const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  // 建立瀏覽器視窗。
  win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
          plugins:true
      }
  });

  // 並載入應用程式的 index.html。
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // 打開 DevTools。
  win.webContents.openDevTools();

  win.on('closed', () => {
    console.log("test");
    win = null;
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
