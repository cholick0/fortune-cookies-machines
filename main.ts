import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, a single line, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const FORTUNE =
  "You will soon be asked to do the impossible. You will do it anyway — and then be asked why it took so long.";

const OUT_PATH = "/output/entry.txt";

function validateEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `fortune must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("fortune must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

const text = FORTUNE;
validateEntry(text);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, text, "utf8");

// Byte-level read-back: the bytes on disk must be exactly the fortune.
const back = readFileSync(OUT_PATH);
if (!Buffer.from(text, "utf8").equals(back)) {
  throw new Error("read-back mismatch: entry.txt bytes do not match the fortune");
}
console.log(`wrote ${text.length} characters to ${OUT_PATH}`);
