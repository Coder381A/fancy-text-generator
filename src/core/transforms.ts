import {
  BOLD_MAP,
  ITALIC_MAP,
  BOLD_ITALIC_MAP,
  SCRIPT_MAP,
  BOLD_SCRIPT_MAP,
  FRAKTUR_MAP,
  BOLD_FRAKTUR_MAP,
  DOUBLE_STRUCK_MAP,
  SANS_MAP,
  SANS_BOLD_MAP,
  SANS_ITALIC_MAP,
  SANS_BOLD_ITALIC_MAP,
  MONOSPACE_MAP,
  CIRCLED_MAP,
  NEGATIVE_CIRCLED_MAP,
  SQUARED_MAP,
  NEGATIVE_SQUARED_MAP,
  FULLWIDTH_MAP,
  SMALL_CAPS_MAP,
  SUPERSCRIPT_MAP,
  SUBSCRIPT_MAP,
  UPSIDE_DOWN_MAP,
  MIRROR_MAP,
  LEET_BASIC_MAP,
  MORSE_MAP,
  BRAILLE_MAP,
  CharMap
} from "./unicode-maps.js";

export type TransformCategory =
  | "all"
  | "cursive"
  | "gothic"
  | "aesthetic"
  | "social"
  | "decorative"
  | "glitch"
  | "obfuscated"
  | "math";

export interface TransformDefinition {
  id: string;
  name: string;
  category: TransformCategory;
  description: string;
  transform: (input: string) => string;
}

// Map replacement helper
export function mapChars(input: string, map: CharMap): string {
  let result = "";
  for (const char of input) {
    result += map[char] || char;
  }
  return result;
}

// Combining mark helper
export function combineChars(input: string, combiningMark: string): string {
  let result = "";
  for (const char of input) {
    if (/\s/.test(char)) {
      result += char;
    } else {
      result += char + combiningMark;
    }
  }
  return result;
}

// Double combining mark helper
export function combineMultipleChars(input: string, marks: string[]): string {
  let result = "";
  for (const char of input) {
    if (/\s/.test(char)) {
      result += char;
    } else {
      result += char + marks.join("");
    }
  }
  return result;
}

// Transformations catalogue
export const TRANSFORMS: TransformDefinition[] = [
  // Cursive & Script
  {
    id: "script",
    name: "Cursive Script",
    category: "cursive",
    description: "Elegant handwritten cursive calligraphy",
    transform: (text) => mapChars(text, SCRIPT_MAP)
  },
  {
    id: "bold-script",
    name: "Bold Cursive",
    category: "cursive",
    description: "Heavy calligraphy script",
    transform: (text) => mapChars(text, BOLD_SCRIPT_MAP)
  },
  {
    id: "italic",
    name: "Serif Italic",
    category: "cursive",
    description: "Classic typographic italics",
    transform: (text) => mapChars(text, ITALIC_MAP)
  },
  {
    id: "bold-italic",
    name: "Bold Serif Italic",
    category: "cursive",
    description: "Heavy typographic italics",
    transform: (text) => mapChars(text, BOLD_ITALIC_MAP)
  },

  // Gothic & Medieval
  {
    id: "fraktur",
    name: "Gothic / Fraktur",
    category: "gothic",
    description: "Old English medieval Fraktur typography",
    transform: (text) => mapChars(text, FRAKTUR_MAP)
  },
  {
    id: "bold-fraktur",
    name: "Bold Gothic Fraktur",
    category: "gothic",
    description: "Heavy medieval Blackletter font",
    transform: (text) => mapChars(text, BOLD_FRAKTUR_MAP)
  },
  {
    id: "double-struck",
    name: "Double-Struck / Blackboard",
    category: "gothic",
    description: "Mathematical blackboard bold typography",
    transform: (text) => mapChars(text, DOUBLE_STRUCK_MAP)
  },

  // Social & Clean
  {
    id: "bold",
    name: "Mathematical Bold",
    category: "social",
    description: "Universal clean bold for Instagram, Twitter, and TikTok",
    transform: (text) => mapChars(text, BOLD_MAP)
  },
  {
    id: "sans",
    name: "Sans-Serif",
    category: "social",
    description: "Modern minimalist sans-serif",
    transform: (text) => mapChars(text, SANS_MAP)
  },
  {
    id: "sans-bold",
    name: "Sans-Serif Bold",
    category: "social",
    description: "Clean modern bold sans-serif",
    transform: (text) => mapChars(text, SANS_BOLD_MAP)
  },
  {
    id: "sans-italic",
    name: "Sans-Serif Italic",
    category: "social",
    description: "Clean modern slanted sans-serif",
    transform: (text) => mapChars(text, SANS_ITALIC_MAP)
  },
  {
    id: "sans-bold-italic",
    name: "Sans-Serif Bold Italic",
    category: "social",
    description: "High-emphasis modern bold italic",
    transform: (text) => mapChars(text, SANS_BOLD_ITALIC_MAP)
  },
  {
    id: "monospace",
    name: "Monospace / Code",
    category: "social",
    description: "Typewriter / fixed-width terminal font",
    transform: (text) => mapChars(text, MONOSPACE_MAP)
  },

  // Aesthetic & Vaporwave
  {
    id: "vaporwave",
    name: "Vaporwave / Fullwidth",
    category: "aesthetic",
    description: "Wide aesthetic 90s retro vaporwave spacing",
    transform: (text) => mapChars(text, FULLWIDTH_MAP)
  },
  {
    id: "small-caps",
    name: "Small Capitals",
    category: "aesthetic",
    description: "Subtle aesthetic small uppercase letters",
    transform: (text) => mapChars(text, SMALL_CAPS_MAP)
  },
  {
    id: "superscript",
    name: "Tiny Superscript",
    category: "aesthetic",
    description: "Elevated micro typography",
    transform: (text) => mapChars(text, SUPERSCRIPT_MAP)
  },
  {
    id: "subscript",
    name: "Subscript",
    category: "aesthetic",
    description: "Lowered scientific index typography",
    transform: (text) => mapChars(text, SUBSCRIPT_MAP)
  },
  {
    id: "upside-down",
    name: "Upside Down / Inverted",
    category: "aesthetic",
    description: "Inverted 180-degree flipped text",
    transform: (text) => {
      const reversedChars = Array.from(text).reverse().join("");
      return mapChars(reversedChars, UPSIDE_DOWN_MAP);
    }
  },
  {
    id: "mirrored",
    name: "Mirrored / Reverse",
    category: "aesthetic",
    description: "Backwards horizontally reflected text",
    transform: (text) => {
      const reversedChars = Array.from(text).reverse().join("");
      return mapChars(reversedChars, MIRROR_MAP);
    }
  },

  // Decorative Enclosed & Bubbles
  {
    id: "circled",
    name: "Bubble / Circled",
    category: "decorative",
    description: "Enclosed outlined circular badges",
    transform: (text) => mapChars(text, CIRCLED_MAP)
  },
  {
    id: "negative-circled",
    name: "Black Bubble (Inverted)",
    category: "decorative",
    description: "Filled black circular badges",
    transform: (text) => mapChars(text, NEGATIVE_CIRCLED_MAP)
  },
  {
    id: "squared",
    name: "Squared Outlined",
    category: "decorative",
    description: "Outlined square block letters",
    transform: (text) => mapChars(text, SQUARED_MAP)
  },
  {
    id: "negative-squared",
    name: "Black Squared (Inverted)",
    category: "decorative",
    description: "Filled square emoji block letters",
    transform: (text) => mapChars(text, NEGATIVE_SQUARED_MAP)
  },

  // Combining Marks & Strikethrough
  {
    id: "strikethrough",
    name: "Strikethrough (Crossed)",
    category: "decorative",
    description: "Horizontal strike line across every letter",
    transform: (text) => combineChars(text, "\u0336")
  },
  {
    id: "underline",
    name: "Underline",
    category: "decorative",
    description: "Single bottom line under all characters",
    transform: (text) => combineChars(text, "\u0332")
  },
  {
    id: "double-underline",
    name: "Double Underline",
    category: "decorative",
    description: "Double underline bar under characters",
    transform: (text) => combineChars(text, "\u0333")
  },
  {
    id: "slash-through",
    name: "Slash-Through",
    category: "decorative",
    description: "Forward slash cutting through text",
    transform: (text) => combineChars(text, "\u0338")
  },
  {
    id: "wave-underline",
    name: "Wave Underline",
    category: "decorative",
    description: "Tilde wave line below letters",
    transform: (text) => combineChars(text, "\u0330")
  },
  {
    id: "dotted-above",
    name: "Overline Dots",
    category: "decorative",
    description: "Aesthetic dots above each letter",
    transform: (text) => combineChars(text, "\u0307")
  },
  {
    id: "stars-above",
    name: "Sparkle Stardust",
    category: "decorative",
    description: "Sparkle diacritics over text",
    transform: (text) => combineMultipleChars(text, ["\u0359", "\u0357"])
  },

  // Obfuscated, Ciphers & Tech
  {
    id: "leetspeak",
    name: "1337 / Leetspeak",
    category: "obfuscated",
    description: "Classic hacker / gamer leetspeak substitution",
    transform: (text) => mapChars(text, LEET_BASIC_MAP)
  },
  {
    id: "morse",
    name: "Morse Code",
    category: "obfuscated",
    description: "Telegraphic international morse code",
    transform: (text) => {
      return Array.from(text.toUpperCase())
        .map((ch) => MORSE_MAP[ch] || ch)
        .join(" ");
    }
  },
  {
    id: "binary",
    name: "Binary (8-bit)",
    category: "obfuscated",
    description: "Raw computer binary ASCII bytes",
    transform: (text) => {
      return Array.from(text)
        .map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
    }
  },
  {
    id: "hexadecimal",
    name: "Hexadecimal (0x)",
    category: "obfuscated",
    description: "Hexadecimal memory byte representation",
    transform: (text) => {
      return Array.from(text)
        .map((ch) => ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"))
        .join(" ");
    }
  },
  {
    id: "braille",
    name: "Braille Script",
    category: "obfuscated",
    description: "Tactile Braille embossed code points",
    transform: (text) => mapChars(text, BRAILLE_MAP)
  }
];

// Helper to run a specific transform by ID
export function transformText(text: string, transformId: string): string {
  const t = TRANSFORMS.find((item) => item.id === transformId);
  return t ? t.transform(text) : text;
}
