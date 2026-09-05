/**
 * Text Analysis & Unicode Metrics Utility
 */

export interface TextMetrics {
  charCount: number;
  wordCount: number;
  byteLength: number;
  graphemeCount: number;
  lineCount: number;
}

export function analyzeText(text: string): TextMetrics {
  const charCount = text.length;
  
  // Word count (split on whitespace)
  const trimmed = text.trim();
  const wordCount = trimmed.length > 0 ? trimmed.split(/\s+/).length : 0;

  // UTF-8 byte length
  const byteLength = new TextEncoder().encode(text).length;

  // Grapheme cluster count (handles surrogate pairs and combined emojis properly)
  let graphemeCount = 0;
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    graphemeCount = Array.from(segmenter.segment(text)).length;
  } else {
    // Fallback: Array.from handles code points / surrogate pairs
    graphemeCount = Array.from(text).length;
  }

  const lineCount = text.length > 0 ? text.split(/\r\n|\r|\n/).length : 0;

  return {
    charCount,
    wordCount,
    byteLength,
    graphemeCount,
    lineCount
  };
}
