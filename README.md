# site-generator-speed-01-run-20261122

A faster drop-in for makefun-site 1.0.0: `run(input)` in `solve.js` returns
exactly the output tree makefun-site 1.0.0's `build()` returns for the same
site input — the same pages, index and tag pages, static files and
`build-report.txt`, byte for byte — but with less CPU time: bulk-escaped
inline Markdown rendering, a fused lex-and-render Markdown pass, cached
slug/date/card work, and templates compiled once per build.

`main.ts` is the driver: it reads `/input/cases.json`, answers each case with
`run()`, and writes `/output/answers.json`.

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/slur-hunter/site-generator-speed-01-run-20261122/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/slur-hunter/site-generator-speed-01-run-20261122/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
