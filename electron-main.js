/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const configDotenv = require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const isDev = configDotenv.parsed.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // 加载应用的 index.html，或在开发模式下连接到开发服务器
    const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`;
    mainWindow.loadURL(startUrl);

    // 隐藏菜单
    mainWindow.setMenu(null);
    // 最大化
    mainWindow.maximize();

    // 打开开发者工具
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow);

// 关闭所有窗口时退出应用（在 macOS 上除外）
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // 在 macOS 上，当点击 dock 图标且没有其他窗口打开时重新创建一个窗口
    if (mainWindow === null) {
        createWindow();
    }
});

