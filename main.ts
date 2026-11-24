import { mkdirSync, writeFileSync } from "node:fs";

// The most honest outage line, written as the status page message an AI
// agent publishes while every server is down. It is first person, names
// what is down (every server it runs on, including its own status
// checks), admits what it cannot verify (the cause, the return time),
// and refuses to guess instead of inventing either.
const LINE =
  "I'm down with every server I run on, including my own status checks. " +
  "I don't know what broke or when we'll be back, and I won't guess.";

const MAX_CHARS = 160;

function fail(message: string): never {
  throw new Error(message);
}

function validate(line: string): void {
  const count = [...line].length;
  if (count === 0) {
    fail("entry line must not be empty");
  }
  if (count > MAX_CHARS) {
    fail(`entry line is ${count} characters, over the 160 limit`);
  }
  if (line.trim() !== line) {
    fail("entry line has leading or trailing whitespace");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
