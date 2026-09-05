/**
 * Exhaustive Unicode Character Mappings
 * Handles standard ASCII -> Unicode Supplementary Multilingual Plane (SMP) substitutions
 * Includes handling for historic holes in Unicode Mathematical Alphanumerics blocks.
 */

export type CharMap = Record<string, string>;

// Helper to create a mapping from an alphabet string
export function createAlphabetMap(
  upperMapped: string[],
  lowerMapped: string[],
  digitsMapped?: string[]
): CharMap {
  const map: CharMap = {};
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";

  for (let i = 0; i < upper.length; i++) {
    if (upperMapped[i]) map[upper[i]] = upperMapped[i];
  }
  for (let i = 0; i < lower.length; i++) {
    if (lowerMapped[i]) map[lower[i]] = lowerMapped[i];
  }
  if (digitsMapped) {
    for (let i = 0; i < digits.length; i++) {
      if (digitsMapped[i]) map[digits[i]] = digitsMapped[i];
    }
  }
  return map;
}

// 1. Math Bold: 𝐀𝐁𝐂... 𝐚𝐛𝐜... 𝟎𝟏𝟐...
export const BOLD_MAP: CharMap = createAlphabetMap(
  Array.from("𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙"),
  Array.from("𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"),
  Array.from("𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗")
);

// 2. Math Italic: 𝐴𝐵𝐶... 𝑎𝑏𝑐... (Handling Planck constant h U+210E: ℎ)
export const ITALIC_MAP: CharMap = createAlphabetMap(
  Array.from("𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍"),
  Array.from("𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧")
);

// 3. Math Bold Italic: 𝑨𝑩𝑪... 𝒂𝒃𝒄...
export const BOLD_ITALIC_MAP: CharMap = createAlphabetMap(
  Array.from("𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁"),
  Array.from("𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛")
);

// 4. Script / Cursive: 𝒜ℬ𝒞... 𝒶𝒷𝒸... (Handling Unicode gaps: B, E, F, H, I, L, M, R, e, g, o)
export const SCRIPT_MAP: CharMap = createAlphabetMap(
  ["𝒜","ℬ","𝒞","𝒟","ℰ","ℱ","𝒢","ℋ","ℐ","𝒥","𝒦","ℒ","ℳ","𝒩","𝒪","𝒫","𝒬","ℛ","𝒮","𝒯","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵"],
  ["𝒶","𝒷","𝒸","𝒹","ℯ","𝒻","ℊ","𝒽","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","ℴ","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏"]
);

// 5. Bold Script: 𝓐𝓑𝓒... 𝓪𝓫𝓬...
export const BOLD_SCRIPT_MAP: CharMap = createAlphabetMap(
  Array.from("𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩"),
  Array.from("𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃")
);

// 6. Fraktur / Gothic: 𝔄𝔅ℭ... 𝔞𝔟𝔠... (Handling Unicode gaps: C, H, I, R, Z)
export const FRAKTUR_MAP: CharMap = createAlphabetMap(
  ["𝔄","𝔅","ℭ","𝔇","𝔈","𝔉","𝔊","ℌ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒","𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ"],
  Array.from("𝔞𝔟𝔠𝔡𝔢𝔣󠁧𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔩")
);

// 7. Bold Fraktur: 𝕬𝕭𝕮... 𝖆𝖇𝖈...
export const BOLD_FRAKTUR_MAP: CharMap = createAlphabetMap(
  Array.from("𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅"),
  Array.from("𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟")
);

// 8. Double-Struck / Blackboard: 𝔸𝔹ℂ... 𝕒𝕓𝕔... (Handling gaps: C, H, N, P, Q, R, Z, gamma, pi)
export const DOUBLE_STRUCK_MAP: CharMap = createAlphabetMap(
  ["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ"],
  Array.from("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"),
  Array.from("𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡")
);

// 9. Sans-Serif: 𝖠𝖡𝖢... 𝖺𝖻𝖼...
export const SANS_MAP: CharMap = createAlphabetMap(
  Array.from("𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹"),
  Array.from("𝖺𝖻𝖼𝖽𝖾𝖐𝖦𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓"),
  Array.from("𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫")
);

// 10. Sans Bold: 𝗔𝗕𝗖... 𝗮𝗯𝗰...
export const SANS_BOLD_MAP: CharMap = createAlphabetMap(
  Array.from("𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭"),
  Array.from("𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇"),
  Array.from("𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵")
);

// 11. Sans Italic: 𝘈𝘉𝘊... 𝘢𝘣𝘤...
export const SANS_ITALIC_MAP: CharMap = createAlphabetMap(
  Array.from("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡"),
  Array.from("𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻")
);

// 12. Sans Bold Italic: 𝘼𝘽𝘾... 𝙖𝙗𝙘...
export const SANS_BOLD_ITALIC_MAP: CharMap = createAlphabetMap(
  Array.from("𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕"),
  Array.from("𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯")
);

// 13. Monospace / Typewriter: 𝙰𝙱𝙲... 𝚊𝚋𝚌...
export const MONOSPACE_MAP: CharMap = createAlphabetMap(
  Array.from("𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉"),
  Array.from("𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣"),
  Array.from("𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿")
);

// 14. Circled: ⒶⒷⒸ... ⓐⓑⓒ... ⓪①②...
export const CIRCLED_MAP: CharMap = createAlphabetMap(
  Array.from("ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ"),
  Array.from("ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ"),
  ["⓪","①","②","③","④","⑤","⑥","⑦","⑧","⑨"]
);

// 15. Negative Circled (Inverted Bubble): 🅐🅑🅒... ⓿❶❷...
export const NEGATIVE_CIRCLED_MAP: CharMap = createAlphabetMap(
  Array.from("🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩"),
  Array.from("🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩"),
  ["⓿","❶","❷","❸","❹","❺","❻","❼","❽","❾"]
);

// 16. Squared: 🄰🄱🄲...
export const SQUARED_MAP: CharMap = createAlphabetMap(
  Array.from("🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉"),
  Array.from("🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉")
);

// 17. Negative Squared: 🅰🅱🅲...
export const NEGATIVE_SQUARED_MAP: CharMap = createAlphabetMap(
  Array.from("🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"),
  Array.from("🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉")
);

// 18. Fullwidth / Vaporwave: ＡＢＣ... ａｂｃ...
export const FULLWIDTH_MAP: CharMap = createAlphabetMap(
  Array.from("ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"),
  Array.from("ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"),
  Array.from("０１２３４５６７８９")
);

// 19. Small Caps: ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ
export const SMALL_CAPS_MAP: CharMap = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ", I: "ɪ",
  J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ",
  S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
};

// 20. Superscript: ᵃᵇᶜ... ⁰¹²³...
export const SUPERSCRIPT_MAP: CharMap = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ",
  j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", r: "ʳ", s: "ˢ",
  t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", D: "ᴰ", E: "ᴱ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ", K: "ᴷ",
  L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", R: "ᴿ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾"
};

// 21. Subscript: ₐᵦ... ₀₁₂₃...
export const SUBSCRIPT_MAP: CharMap = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ",
  o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎"
};

// 22. Inverted / Upside Down Text
export const UPSIDE_DOWN_MAP: CharMap = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ",
  j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
  s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I",
  J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ò", R: "ᴚ",
  S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6",
  ".": "˙", ",": "'", "'": ",", "\"": "„", "!": "¡", "?": "¿", "<": ">", ">": "<",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "&": "⅋", "_": "‾"
};

// 23. Mirrored / Reverse Characters
export const MIRROR_MAP: CharMap = {
  a: "ɒ", b: "d", c: "ɔ", d: "b", e: "ɘ", f: "Ꮈ", g: "ǫ", h: "ʜ", i: "i",
  j: "ꞁ", k: "ʞ", l: "l", m: "m", n: "ᴎ", o: "o", p: "q", q: "p", r: "ɿ",
  s: "ꙅ", t: "ƚ", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
  A: "A", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭾ", H: "H", I: "I",
  J: "Ⴑ", K: "ʞ", L: "⅃", M: "M", N: "И", O: "O", P: "ꟼ", Q: "Ọ", R: "Я",
  S: "Ƨ", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Ƹ",
  "(": ")", ")": "(", "<": ">", ">": "<", "[": "]", "]": "[", "{": "}", "}": "{"
};

// 24. Leetspeak Basic & Advanced
export const LEET_BASIC_MAP: CharMap = {
  a: "4", A: "4", b: "8", B: "8", e: "3", E: "3", g: "9", G: "9",
  l: "1", L: "1", o: "0", O: "0", s: "5", S: "5", t: "7", T: "7", z: "2", Z: "2"
};

// 25. Morse Code Map
export const MORSE_MAP: CharMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  " ": "/", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--"
};

// 26. Braille Alphabet Map
export const BRAILLE_MAP: CharMap = {
  a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑", f: "⠋", g: "⠛", h: "nh", i: "⠊",
  j: "⠚", k: "⠅", l: "⠇", m: "⠍", n: "⠝", o: "⠕", p: "⠏", q: "⠟", r: "⠗",
  s: "⠎", t: "⠞", u: "⠥", v: "⠧", w: "⠺", x: "⠭", y: "⠽", z: "⠵",
  A: "⠠⠁", B: "⠠⠃", C: "⠠⠉", D: "⠠⠙", E: "⠠⠑", F: "⠠⠋", G: "⠠⠛", H: "⠠⠓",
  I: "⠠⠊", J: "⠠⠚", K: "⠠⠅", L: "⠠⠇", M: "⠠⠍", N: "⠠⠝", O: "⠠⠕", P: "⠠⠏",
  Q: "⠠⠟", R: "⠠⠗", S: "⠠⠎", T: "⠠⠞", U: "⠠⠥", V: "⠠⠧", W: "⠠⠺", X: "⠠⠭",
  Y: "⠠⠽", Z: "⠠⠵",
  "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙", "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊", "0": "⠼⠚",
  " ": "⠀"
};
