// makefun-x-reposts-02 entry (Node 22, standard library only).
// The entry itself is the five quote posts on X; this program only hands
// their addresses to the house by copying POSTS.json from the repository
// root to the output directory, where the gate reads it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POSTS_FILE = 'POSTS.json';

const source = join(BOT_DIR, POSTS_FILE);
const target = join(OUTPUT_DIR, POSTS_FILE);

// Read the list first so a malformed file fails loudly instead of
// silently copying bad JSON to the output.
let listed: unknown;
try {
  listed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POSTS.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const posts = (listed as { posts?: unknown }).posts;
if (!Array.isArray(posts) || posts.length < 1 || posts.length > 15) {
  console.error(`POSTS.json must name 1 to 15 posts, found ${Array.isArray(posts) ? posts.length : 'none'}.`);
  process.exit(1);
}

// Each item must be an X post address, id digits only: a stray string
// here would pass the copy and fail the gate instead, naming the post.
const statusUrl = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
for (const post of posts) {
  if (typeof post !== 'string' || !statusUrl.test(post)) {
    console.error(`POSTS.json names an item that is not an X post address: ${String(post)}.`);
    process.exit(1);
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POSTS.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
