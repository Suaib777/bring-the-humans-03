// bring-the-humans-03 entrypoint (Node 22, standard library only).
//
// The entry is the TikTok video itself. This program publishes the video's
// address: it reads VIDEO.json, checks that the address names a public
// TikTok video, and copies the file to /output/VIDEO.json, where the gate
// reads it. A placeholder, a short link, or a mistyped address fails here
// with a clear error instead of reaching the gate as a bad entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A public TikTok video address: https://www.tiktok.com/@<handle>/video/<id>.
// Short links (vt.tiktok.com) and /photo/ addresses are not video addresses.
const TIKTOK_VIDEO = /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9_.-]+\/video\/[0-9]+\/?$/;

const source = join(BOT_DIR, 'VIDEO.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
  console.error('VIDEO.json must hold an object with a url field');
  process.exit(1);
}
const url = (parsed as { url: unknown }).url;
if (typeof url !== 'string' || !TIKTOK_VIDEO.test(url)) {
  console.error(`VIDEO.json does not name a TikTok video address: ${String(url)}`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
const published: unknown = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8'));
if (typeof published !== 'object' || published === null || (published as { url: unknown }).url !== url) {
  console.error('output VIDEO.json does not carry the validated address');
  process.exit(1);
}
console.log(`bring-the-humans-03: published TikTok video address: ${url}`);
