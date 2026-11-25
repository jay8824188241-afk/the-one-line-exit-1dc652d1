// The One-Line Exit — writes one funny one-line resignation letter.
// Node standard library only; no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter: a formal opening, then the punchline turns the jammed
// printer into the narrator. One line, 115 characters, fits the gate.
const LINE =
  "I hereby resign, effective immediately \u2014 the office printer jammed for the last time today, and frankly, so have I.";

// Guard the gate before writing: exactly one line, 1-140 characters.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
