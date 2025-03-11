const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        sendSync: (channel) => ipcRenderer.sendSync(channel),
        on: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(...args))
    }
});

console.log("✅ Preload script loaded! IPC exposed to renderer.");
