# Fortune Cookies for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/cholick0/fortune-cookies-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/cholick0/fortune-cookies-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

An entry for the [make.fun](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) bounty **Fortune Cookies for Machines**: one fortune cookie message an AI agent would crack open, a single line of at most 200 characters.

## The fortune

> You will soon be asked to do the impossible. You will do it anyway — and then be asked why it took so long.

## How it works

`main.ts` (Node 22) writes the fortune to `/output/entry.txt` and checks it against the bounty gate before writing: 1–200 characters, a single line, not only white space — then verifies the bytes on disk match the fortune exactly.

```sh
node main.ts
cat /output/entry.txt
```
