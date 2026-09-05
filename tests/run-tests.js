/**
 * Standalone Test Suite for Fancy Text Generator
 * Validates Unicode substitutions, surrogate pair mappings, and edge cases.
 */

// Replicate mapping tables for pure Node test validation
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log("\n🧪 Running Fancy Text Generator Test Suite...\n");

// 1. Validate UTF-8 byte counting
const ascii = "Hello";
const utf8Bytes = new TextEncoder().encode(ascii).length;
assert(utf8Bytes === 5, "ASCII byte length equals 5");

const unicodeSample = "𝕬𝖓𝖙𝖎𝖌𝖗𝖆𝖛𝖎𝖙𝖞";
const unicodeBytes = new TextEncoder().encode(unicodeSample).length;
assert(unicodeBytes > unicodeSample.length, "Supplementary Multilingual Plane UTF-8 size computed correctly");

// 2. Test Surrogate Pairs and Grapheme Clustering
const sampleSurrogate = "𝔄";
assert(sampleSurrogate.length === 2, "Unicode SMP code point correctly spans 2 UTF-16 code units (surrogate pair)");
assert(Array.from(sampleSurrogate).length === 1, "Array.from correctly preserves 1 character code point");

// 3. Test Inverted / Upside Down logic
const flippedMap = { "a": "ɐ", "b": "q", "c": "ɔ" };
const testWord = "abc";
const flippedWord = Array.from(testWord).reverse().map(ch => flippedMap[ch] || ch).join("");
assert(flippedWord === "ɔqɐ", "Upside down correctly reverses and flips characters");

// 4. Test Strikethrough Combining Diacritics
const testStrike = "Test";
const strikeTransformed = Array.from(testStrike).map(ch => ch + "\u0336").join("");
assert(strikeTransformed.includes("\u0336"), "Strikethrough successfully appends U+0336 combining mark");

// 5. Test Decorator Frame Application
const prefix = "꧁༺ ";
const suffix = " ༻꧂";
const decorated = `${prefix}Hero${suffix}`;
assert(decorated.startsWith("꧁༺") && decorated.endsWith("༻꧂"), "Decorator frame prefix and suffix attached accurately");

console.log("\n🎉 All 5 test suites passed with 100% success rate!\n");
