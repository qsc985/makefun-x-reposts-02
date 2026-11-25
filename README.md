# makefun-x-reposts-02

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/qsc985/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/qsc985/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts" ($500 pot, top 50 share it).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## The entry

Five quote posts from the public X account @music199512, each quoting a different one of make.fun's newest posts on x.com/makefunai, each carrying make.fun and the play code `makefun-minnow-windmill-garden` in its own words. Their addresses are in `POSTS.json`; the house reads their reposts, quotes and likes from X.

Score: 2 points for each repost and each quote, 1 point for each like, summed over all five posts, read again at the deadline. Places go by that score, the highest first.

## The five posts

Each quote answers a different @makefunai pool post:

| # | Quote post (@music199512) | Answers @makefunai |
|---|---|---|
| 1 | https://x.com/music199512/status/2125655512662654979 | https://x.com/makefunai/status/2125375203744391226 ("Make GTA 6" leaderboard) |
| 2 | https://x.com/music199512/status/2125655793299251388 | https://x.com/makefunai/status/2125247026728235268 (best game on make.fun) |
| 3 | https://x.com/music199512/status/2125656151069258170 | https://x.com/makefunai/status/2125246707512553850 (Slotbound, $1.33M first week) |
| 4 | https://x.com/music199512/status/2125656435212292344 | https://x.com/makefunai/status/2125053991293784431 ($1,666 GTA 6-style game bounty) |
| 5 | https://x.com/music199512/status/2125656778285388207 | https://x.com/makefunai/status/2125053632605196760 (Mike Houser, AOD: Age of Dragon) |

## How it works

`main.ts` (Node 22, standard library only) copies `POSTS.json` from the repository root to the output directory, where the gate reads it. That is all the program has to do; nothing it writes about the posts is scored.

Run it locally the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.

## Keep the posts up

The five posts and the @music199512 account stay public until the results are out: a post deleted or no longer public when the house reads it at the deadline adds 0.
