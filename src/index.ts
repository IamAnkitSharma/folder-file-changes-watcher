/* eslint-disable no-console */
import chokidar from 'chokidar';
import { logDateTime } from './date.util';

const args = process.argv.slice(2);

const watchDir = args[0];

console.log('Watching on  ', watchDir);

const watcher = chokidar.watch(watchDir, {
  persistent: true
});

setInterval(()=>{
  console.log(`${logDateTime()} - Watching for changes...`);
}, 1000);

watcher.on('change', (path) => {
  console.log('File', path, 'has changed...');
});
