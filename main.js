import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
// import { fileURLToPath } from 'url';
import ElectronStore from 'electron-store';

// ✅ Use `process.cwd()` instead of `fileURLToPath(import.meta.url)`
const __dirname = process.cwd();

// Create ElectronStore instance
const store = new ElectronStore({
    cwd: path.join(app.getPath('userData'), 'store')
});


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }

    });

    mainWindow.loadURL('http://localhost:5173');

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

// ✅ Debug: Confirm Redux state updates are being received
ipcMain.on('save-state', (event, state) => {
    store.set('appState', state);
});


// ✅ Debug: Confirm state is being loaded on app start
ipcMain.on('load-state', (event) => {
    event.returnValue = store.get('appState', {}); // Return saved state
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
