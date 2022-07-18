"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const chokidar_1 = __importDefault(require("chokidar"));
const args = process.argv.slice(2);
const watchDir = args[0];
console.log('Watching on  ', watchDir);
const watcher = chokidar_1.default.watch(watchDir, {
    persistent: true
});
watcher.on('change', (path) => {
    console.log('File', path, 'has changed');
});
//# sourceMappingURL=index.js.map