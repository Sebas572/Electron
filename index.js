const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(__dirname + '/src/view/index.html', {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const create = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 500,
		webPreferences: {
    	devTools: false
    }
	})

	win.loadFile('./src/view/index.html');
}

app.on('ready', () => {
	create();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})