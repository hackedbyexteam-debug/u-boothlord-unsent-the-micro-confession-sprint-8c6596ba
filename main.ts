// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to $MAKEFUN_OUTPUT_DIR/entry.txt:
// a To: line naming who it was meant for, and the unsent message itself,
// one line, written exactly as it was typed, with no explanation after it.
// The confession below is the rebuild entry: the twenty dollars slipped
// under the door the night before he left — specific, honest, and only
// ever addressed to the little brother named in the To: line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 260;

const ENTRY = [
  "To: my little brother",
  "I still have the twenty dollars you slipped under my door the night before you left, and I never told you I found it.",
].join("\n");

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
