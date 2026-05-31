const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
    // รัน เปา.js ผ่าน Console ของระบบเพื่อความเท่และใช้งาน Input ได้เต็มที่
    const runTerminal = spawn('cmd.exe', ['/c', 'node เปา.js'], {
        stdio: 'inherit',
        shell: true
    });

    runTerminal.on('exit', () => {
        app.quit();
    });
}

app.whenReady().then(() => {
    createWindow();
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
