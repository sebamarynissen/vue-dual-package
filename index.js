import { createRequire } from 'node:module';
import assert from 'node:assert';
import Vue from 'vue';
const require = createRequire(import.meta.url);

assert.equal(Vue, require('vue'));
