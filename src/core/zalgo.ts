/**
 * Zalgo / Glitch Text Generator
 * Applies random combining diacritical marks (above, middle, below) to characters.
 */

// Combining diacritical marks above
export const ZALGO_UP: string[] = [
  "\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311", "\u0306", "\u0310",
  "\u0352", "\u0357", "\u0351", "\u0307", "\u0308", "\u030a", "\u0342", "\u0343",
  "\u0344", "\u034a", "\u034b", "\u034c", "\u0350", "\u0300", "\u0301", "\u0302",
  "\u0303", "\u030b", "\u030c", "\u033e", "\u0340", "\u0341", "\u0315", "\u031b",
  "\u0363", "\u0364", "\u0365", "\u0366", "\u0367", "\u0368", "\u0369", "\u036a",
  "\u036b", "\u036c", "\u036d", "\u036e", "\u036f", "\u033d"
];

// Combining diacritical marks in middle / overlay
export const ZALGO_MID: string[] = [
  "\u0312", "\u0313", "\u0314", "\u0338", "\u0337", "\u0336", "\u0335", "\u0334",
  "\u0320", "\u0324", "\u0325", "\u0326", "\u0327", "\u0328", "\u032d", "\u032e"
];

// Combining diacritical marks below
export const ZALGO_DOWN: string[] = [
  "\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e", "\u031f",
  "\u0321", "\u0322", "\u0323", "\u0329", "\u032a", "\u032b", "\u032c", "\u032f",
  "\u0330", "\u0331", "\u0332", "\u0333", "\u0339", "\u033a", "\u033b", "\u033c",
  "\u0345", "\u0347", "\u0348", "\u0349", "\u034d", "\u034e", "\u0353", "\u0354",
  "\u0355", "\u0356", "\u0359", "\u035a", "\u032a"
];

export interface ZalgoOptions {
  intensity?: number;   // 1 (subtle) to 10 (maximum chaos), default 3
  up?: boolean;
  mid?: boolean;
  down?: boolean;
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateZalgo(text: string, options: ZalgoOptions = {}): string {
  const intensity = Math.max(1, Math.min(10, options.intensity ?? 3));
  const useUp = options.up ?? true;
  const useMid = options.mid ?? true;
  const useDown = options.down ?? true;

  const result: string[] = [];

  for (const char of text) {
    // Preserve whitespace and newlines without adding marks
    if (/\s/.test(char)) {
      result.push(char);
      continue;
    }

    result.push(char);

    const countUp = useUp ? Math.floor(Math.random() * intensity) : 0;
    const countMid = useMid ? Math.floor(Math.random() * (intensity / 2)) : 0;
    const countDown = useDown ? Math.floor(Math.random() * intensity) : 0;

    for (let i = 0; i < countUp; i++) {
      result.push(getRandomItem(ZALGO_UP));
    }
    for (let i = 0; i < countMid; i++) {
      result.push(getRandomItem(ZALGO_MID));
    }
    for (let i = 0; i < countDown; i++) {
      result.push(getRandomItem(ZALGO_DOWN));
    }
  }

  return result.join("");
}
