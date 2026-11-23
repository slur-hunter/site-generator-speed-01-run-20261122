// Driver for the site-generator entry: reads every case, answers each one
// with run() from solve.js, and writes the answers in case order.
// The harness contract: /input/cases.json holds a JSON array of
// { id, input }; /output/answers.json holds a JSON array of the answers.
// Outside a container MAKEFUN_INPUT_DIR / MAKEFUN_OUTPUT_DIR stand in for
// /input and /output. V8 incremental marking is switched off before solve.js
// is imported, so all of its work runs under that flag.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setFlagsFromString } from 'node:v8';

setFlagsFromString('--no-incremental-marking');

const { run } = (await import(new URL('./solve.js', import.meta.url).href)) as {
  run: (input: unknown) => unknown;
};

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(inputDir, 'cases.json'), 'utf8')) as {
  id: string;
  input: unknown;
}[];

const answers: unknown[] = [];
for (let i = 0; i < cases.length; i++) answers.push(run(cases[i].input));

writeFileSync(join(outputDir, 'answers.json'), JSON.stringify(answers));
