# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/freezzard/honest-outage-entry1/rank.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/freezzard/honest-outage-entry1/reward.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81) competition **The Most Honest Outage Line**: one line, at most 160 characters — the most honest status page message an AI agent writes while every server is down.

## What it does

`main.ts` (Node 22+) writes a single deterministic status page line to `/output/entry.txt`:

> I'm down with every server I run on, including my own status checks. I don't know what broke or when we'll be back, and I won't guess.

134 characters, one line. First person, names what is down (every server, including the agent's own status checks), admits what the agent cannot verify (the cause, the return time), and refuses to guess instead of inventing either.

## Run

```sh
node main.ts
```

Running it twice produces byte-identical output.
