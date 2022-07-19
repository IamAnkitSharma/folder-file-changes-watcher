/* eslint-disable no-console */
import chokidar from 'chokidar';
import { getDateTime } from './utils/date.util';
import './services/redis.service';
import { publishMessageToRedis } from './services/redis.service';

const args = process.argv.slice(2);

const watchDir = args[0];

console.log('Watching on  ', watchDir);

const watcher = chokidar.watch(watchDir, {
  persistent: true
});

setInterval(() => {
  console.log(`${getDateTime()} - Watching for changes...`);
}, 1000);

watcher.on('change', (path) => {
  console.log('File', path, 'has changed...');
  publishMessageToRedis('container-file-changes', JSON.stringify({ path }));
});
