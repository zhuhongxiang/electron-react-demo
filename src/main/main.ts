import { BrowserWindow, app, ipcMain } from "electron";
import path from "path";
// 加载html，目前只对生产模式进行加载
function loadHtml(window: BrowserWindow, name: string) {
  if (process.env.NODE_ENV === "production") {
    window.loadFile(path.resolve(__dirname, `../renderer/${name}/index.html`)).catch(console.error);
    return;
  }
  // 开发模式
  window.webContents.openDevTools();
  window.loadURL(`http://localhost:3000/dist/${name}.html`).catch(console.error);
}

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  if (mainWindow) return;

  // 创建窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // 无边框
    frame: false,
    webPreferences: {
      // 优先于内容加载的脚本
      // preload: path.join(__dirname, 'preload_render.js'),
      javascript: true, // javascript Boolean (可选) - 是否启用 JavaScript 支持。 默认值为 true。
      nodeIntegration: true, // nodeIntegration Boolean (可选) - 是否启用 Node integration. 默认值为 false.
      webSecurity: false,
      // 当设置为 false, 它将禁用同源策略 (通常用来测试网站), 如果此选项不是由开发者设置的，还会把 allowRunningInsecureContent设置为 true. 默认值为 true
      contextIsolation: false,
      // 此项为 true 的话在 App.js 中无法通过 window.require 来引用 electron 包
      // Boolean (可选) - 是否在独立 JavaScript 环境中运行 Electron API 和指定的 preload 脚本. 默认为 true。
    },
  });

  loadHtml(mainWindow, "index");
  mainWindow.on("close", () => {
    mainWindow = null;
  });

  // debug.openDevTools(mainWindow)
}

ipcMain.on("asynchronous-message", (event: any, arg: any) => {
  console.log("main:", arg); // prints "ping"
  event.reply("asynchronous-reply", `pong${arg}`);
});

ipcMain.handle("handle-message", async () => {
  const result = await Promise.resolve("123");
  return result;
});

// 隐藏原生滚动条

app.commandLine.appendSwitch("enable-features", "OverlayScrollbar");

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
