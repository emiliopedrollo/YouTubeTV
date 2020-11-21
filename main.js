const { app, BrowserWindow } = require('electron')

if (require('electron-squirrel-startup')) return app.quit();

function createWindow () {
    const win = new BrowserWindow({
        fullscreen: true,
        useContentSize: true,
        icon: "icon.png",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.menuBarVisible = false;

    win.loadURL(`https://youtube.com/tv`,{
        userAgent: "Mozilla/5.0 (SMART-TV; Linux; Tizen 4.0.0.2) AppleWebkit/605.1.15 " +
            "(KHTML, like Gecko) SamsungBrowser/9.2 TV Safari/605.1.15"
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
