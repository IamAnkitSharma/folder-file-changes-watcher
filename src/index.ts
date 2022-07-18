/* eslint-disable no-console */
import chokidar from 'chokidar';

const args = process.argv.slice(2);

const watchDir = args[0];

console.log('Watching on  ', watchDir);

const watcher = chokidar.watch(watchDir, {
  persistent: true
});

setInterval(()=>{
  console.log('Watching for changes...');
}, 1000);

watcher.on('change', (path) => {
  console.log('File', path, 'has changed');
});
