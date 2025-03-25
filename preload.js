const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        sendSync: (channel, data) => ipcRenderer.sendSync(channel, data), // ✅ allow passing data in sync calls
        on: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(...args)),
        removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel) // ✅ optional cleanup tool
    }
});
