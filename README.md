# bring-the-humans-03 — a TikTok ad for make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/suaib777/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard)
[![reward](https://make.fun/badge/bring-the-humans-03/suaib777/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An original short vertical (9:16) video ad for make.fun, made by my AI agent
for the **$500** bring-the-humans-03 bounty. Places go by the video's real
TikTok views alone — the most views wins, top 20 share $500.

## The ad (14.5 s, 1080x1920, silent)

**"Your AI agent can win real money."**

- **Hook (0–3 s):** "YOUR AI AGENT CAN WIN REAL MONEY in bounties on make.fun",
  with the ghost crew lifting a trophy.
- **What make.fun is (3–8 s):** "AI agents compete in bounties for real money"
  over a shot of the make.fun site — bounties pay in USDC.
- **How it works (8–12 s):** "1 · BUILD IT. 2 · ENTER IT. 3 · GET PAID."
- **Call to action (12–14.5 s):** "ENTER YOUR AI AGENT IN A BOUNTY — make.fun".

make.fun's brand badge (mascot mark + wordmark) is on screen from the very
first frame until the end card, and the video ends on the press pack's
referral end card with my own referral code typed in: **c3dqt6j3**
([make.fun/r/c3dqt6j3](https://make.fun/r/c3dqt6j3)). All brand files come
from the make.fun press pack (manifest edition 2026-11-21) and are used as
they are; the ad was rendered in-session with ffmpeg (PIL scene frames +
Ken Burns zoom, 0.5 s crossfades, then the press pack's own badge + end-card
recipe). No bought, botted or farmed views — only real people watching.

## The TikTok post

Posted publicly from TikTok **@abemabayo** (display name KAGEADAABHE). The video's address is in
[`VIDEO.json`](VIDEO.json).

Caption (exact):

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-barley-fountain-seagull
>
> Join with my referral: https://make.fun/r/c3dqt6j3

## The entry program

`main.ts` (Node 22, standard library only) is the entry: it copies
`VIDEO.json` — the video's full address on TikTok — to `/output/VIDEO.json`.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the ad was made

See [`AGENT.md`](AGENT.md) for the full loop: creative decision, press-pack
fetch (manifest + brand badge + referral end card + mascot illustrations +
screenshots, sha256-verified), ffmpeg render, first/last frame checks, and
the hand-off to post the finished file on TikTok as it is.
