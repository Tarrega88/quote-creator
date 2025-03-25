import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ElectronStore from 'electron-store';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const store = new ElectronStore({
    cwd: path.join(app.getPath('userData'), 'store')
});

let mainWindow;
const isDev = !app.isPackaged;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:5173');
    } else {
        mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (mainWindow === null) createWindow();
    });
});

ipcMain.on('save-state', (event, state) => {
    store.set('appState', state);
});

ipcMain.on('load-state', (event) => {
    event.returnValue = store.get('appState', {});
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
