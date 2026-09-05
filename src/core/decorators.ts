/**
 * Aesthetic Frames, Wings, Borders & Kaomoji Decorators
 */

export interface DecoratorStyle {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  category: "wings" | "frames" | "sparkles" | "kaomoji" | "brackets";
}

export const DECORATOR_PRESETS: DecoratorStyle[] = [
  // Wings & Ornaments
  { id: "wing-1", name: "Royal Wings", prefix: "꧁༺ ", suffix: " ༻꧂", category: "wings" },
  { id: "wing-2", name: "Star Wings", prefix: "★彡 ", suffix: " 彡★", category: "wings" },
  { id: "wing-3", name: "Floral Wings", prefix: "✿.｡.:* ", suffix: " *:.｡.✿", category: "wings" },
  { id: "wing-4", name: "Heart Wings", prefix: "♥╣[-_-]╠♥ ", suffix: " ♥╣[-_-]╠♥", category: "wings" },
  { id: "wing-5", name: "Aesthetic Crown", prefix: "👑✨ ", suffix: " ✨👑", category: "wings" },
  { id: "wing-6", name: "Cyber Blades", prefix: "⚔️『 ", suffix: " 』⚔️", category: "wings" },

  // Sparkles & Stars
  { id: "sparkle-1", name: "Glitter Stars", prefix: "✧･ﾟ: *✧･ﾟ:* ", suffix: " *:･ﾟ✧*:･ﾟ✧", category: "sparkles" },
  { id: "sparkle-2", name: "Constellation", prefix: "｡･:*:･ﾟ★,｡･:*:･ﾟ☆ ", suffix: " ｡･:*:･ﾟ★,｡･:*:･ﾟ☆", category: "sparkles" },
  { id: "sparkle-3", name: "Shooting Stars", prefix: "★━━━━━━━━ ", suffix: " ━━━━━━━━★", category: "sparkles" },
  { id: "sparkle-4", name: "Diamond Sparkle", prefix: "💎✨ ", suffix: " ✨💎", category: "sparkles" },

  // Frames & Borders
  { id: "frame-1", name: "Double Corner Frame", prefix: "『 ", suffix: " 』", category: "frames" },
  { id: "frame-2", name: "Japanese Brackets", prefix: "【 ", suffix: " 】", category: "frames" },
  { id: "frame-3", name: "Ornate Box", prefix: "╔═══*.·:·.☽✧ ✦ ✧☾.·:·.*═══╗\n  ", suffix: "\n╚═══*.·:·.☽✧ ✦ ✧☾.·:·.*═══╝", category: "frames" },
  { id: "frame-4", name: "Simple Ribbon", prefix: "୨⎯ ", suffix: " ⎯୧", category: "frames" },
  { id: "frame-5", name: "Aesthetic Bow", prefix: "🎀.｡.:* ", suffix: " *:.｡.🎀", category: "frames" },
  { id: "frame-6", name: "Musical Notes", prefix: "♫♪˙‿˙♫♪ ", suffix: " ♫♪˙‿˙♫♪", category: "frames" },

  // Kaomoji & Faces
  { id: "kao-1", name: "Joy Wave", prefix: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ", suffix: " ✧ﾟ･:*", category: "kaomoji" },
  { id: "kao-2", name: "Cute Sparkle", prefix: "(｡♥‿♥｡) ", suffix: " (｡♥‿♥｡)", category: "kaomoji" },
  { id: "kao-3", name: "Shy Cat", prefix: "(=^･ω･^=) ", suffix: " (=^･ω･^=)", category: "kaomoji" },
  { id: "kao-4", name: "Victory Bear", prefix: "ʕ•ᴥ•ʔ ", suffix: " ʕ•ᴥ•ʔ", category: "kaomoji" },
  { id: "kao-5", name: "Cool Sunglasses", prefix: "(⌐■_■) ", suffix: " (■_■¬)", category: "kaomoji" },

  // Brackets
  { id: "bracket-1", name: "Angle Brackets", prefix: "《 ", suffix: " 》", category: "brackets" },
  { id: "bracket-2", name: "White Brackets", prefix: "〔 ", suffix: " 〕", category: "brackets" },
  { id: "bracket-3", name: "Heavy Angles", prefix: "❰ ", suffix: " ❱", category: "brackets" }
];

export function applyDecorator(text: string, decorator: DecoratorStyle): string {
  return `${decorator.prefix}${text}${decorator.suffix}`;
}
