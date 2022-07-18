/* eslint-disable no-console */
import chokidar from 'chokidar';

const args = process.argv.slice(2);

const watchDir = args[0];

console.log('Watching on  ', watchDir);

const watcher = chokidar.watch(watchDir, {
  persistent: true
});

watcher.on('change', (path) => {
  console.log('File', path, 'has changed');
});
