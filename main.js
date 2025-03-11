import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
// import { fileURLToPath } from 'url';
import ElectronStore from 'electron-store';

// Define __dirname for ES modules

// ✅ Use `process.cwd()` instead of `fileURLToPath(import.meta.url)`
const __dirname = process.cwd();

console.log("HERE");
console.log(__dirname);

// Create ElectronStore instance
const store = new ElectronStore({
    cwd: path.join(app.getPath('userData'), 'store')
});


// ✅ Log where ElectronStore is saving the file
console.log("Electron Store Path:", store.path);

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // ✅ Corrected path
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

// 🔥 ✅ PLACE THIS SECTION **BEFORE** `app.on('window-all-closed', ...)`

// ✅ Debug: Confirm Redux state updates are being received
ipcMain.on('save-state', (event, state) => {
    console.log("🔄 Received Redux state in main process:", state);
    store.set('appState', state);
    console.log("✅ Redux state saved to ElectronStore file!");
});


// ✅ Debug: Confirm state is being loaded on app start
ipcMain.on('load-state', (event) => {
    console.log("🔍 Loading Redux state...");
    event.returnValue = store.get('appState', {}); // Return saved state
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
