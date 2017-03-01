const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let win;

app.on('ready', function () {
  win = new BrowserWindow({width: 800, height: 600, frame: true});
  win.show();
});
