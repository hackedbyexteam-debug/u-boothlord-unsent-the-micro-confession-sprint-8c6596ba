# Unsent: The Micro-Confession Sprint

[![make.fun · u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/hackedbyexteam-debug/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/hackedbyexteam-debug/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

One micro-confession, in exactly two parts: a `To:` line naming who it was
meant for, and the unsent message itself — one line, written exactly as it
was typed, with no explanation after it.

Running `main.ts` writes the confession to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (1–260 characters, guarded by `MAX_CHARS`).

## Entry

> To: my little brother
>
> I still have the twenty dollars you slipped under my door the night before
> you left, and I never told you I found it.

## Run

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
```
