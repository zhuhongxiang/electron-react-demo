/*! For license information please see main.dev.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/main/main.ts":(e,o,r)=>{var t,a=r("electron");function n(e,o){e.webContents.openDevTools(),e.loadURL(`http://localhost:3000/dist/${o}.html`).catch(console.error)}r("path"),e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;let s=null;function l(){s||(s=new a.BrowserWindow({width:800,height:600,frame:!1,webPreferences:{javascript:!0,nodeIntegration:!0,webSecurity:!1,contextIsolation:!1}}),n(s,"index"),s.on("close",(()=>{s=null})))}var d,i;a.ipcMain.on("asynchronous-message",((e,o)=>{console.log("main:",o),e.reply("asynchronous-reply",`pong${o}`)})),a.ipcMain.handle("handle-message",(async()=>await Promise.resolve("123"))),a.app.commandLine.appendSwitch("enable-features","OverlayScrollbar"),a.app.whenReady().then((()=>{l(),a.app.on("activate",(()=>{0===a.BrowserWindow.getAllWindows().length&&l()}))})),a.app.on("window-all-closed",(()=>{"darwin"!==process.platform&&a.app.quit()})),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(n,"loadHtml","/Users/bytedance/Desktop/workspace/electron-react-demo/src/main/main.ts"),d.register(s,"mainWindow","/Users/bytedance/Desktop/workspace/electron-react-demo/src/main/main.ts"),d.register(l,"createWindow","/Users/bytedance/Desktop/workspace/electron-react-demo/src/main/main.ts")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},electron:e=>{e.exports=require("electron")},path:e=>{e.exports=require("path")}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return e[t](n,n.exports,r),n.loaded=!0,n.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r("./src/main/main.ts")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZXYuanMiLCJtYXBwaW5ncyI6IjsrRUFHQSxTQUFTQSxFQUFTQyxFQUF1QkMsR0FNdkNELEVBQU9FLFlBQVlDLGVBQ25CSCxFQUFPSSxRQUFTLDhCQUE2QkgsVUFBYUksTUFBTUMsUUFBUUMsd01BRzFFLElBQUlDLEVBQW1DLEtBRXZDLFNBQVNDLElBQ0hELElBR0pBLEVBQWEsSUFBSUUsRUFBQUEsY0FBYyxDQUM3QkMsTUFBTyxJQUNQQyxPQUFRLElBRVJDLE9BQU8sRUFDUEMsZUFBZ0IsQ0FHZEMsWUFBWSxFQUNaQyxpQkFBaUIsRUFDakJDLGFBQWEsRUFFYkMsa0JBQWtCLEtBTXRCbkIsRUFBU1MsRUFBWSxTQUNyQkEsRUFBV1csR0FBRyxTQUFTLEtBQ3JCWCxFQUFhLGlCQU1qQlksRUFBQUEsUUFBQUEsR0FBVyx3QkFBd0IsQ0FBQ0MsRUFBWUMsS0FDOUNoQixRQUFRaUIsSUFBSSxRQUFTRCxHQUNyQkQsRUFBTUcsTUFBTSxxQkFBdUIsT0FBTUYsUUFHM0NGLEVBQUFBLFFBQUFBLE9BQWUsa0JBQWtCSyxlQUNWQyxRQUFRQyxRQUFRLFNBTXZDQyxFQUFBQSxJQUFBQSxZQUFBQSxhQUE2QixrQkFBbUIsb0JBRWhEQSxFQUFBQSxJQUFBQSxZQUFnQkMsTUFBSyxLQUNuQnBCLElBRUFtQixFQUFBQSxJQUFBQSxHQUFPLFlBQVksS0FDNEIsSUFBekNsQixFQUFBQSxjQUFBQSxnQkFBOEJvQixRQUFjckIsVUFJcERtQixFQUFBQSxJQUFBQSxHQUFPLHFCQUFxQixLQUNELFdBQXJCRyxRQUFRQyxVQUF1QkosRUFBQUEsSUFBQUEsd0dBakU1QjdCLEVBQUFBLFdBQUFBLHNGQVVMUyxFQUFBQSxhQUFBQSxzRkFFS0MsRUFBQUEsZUFBQUEscUxDZlR3QixFQUFPQyxRQUFVQyxRQUFRLHNCQ0F6QkYsRUFBT0MsUUFBVUMsUUFBUSxVQ0NyQkMsRUFBMkIsR0FHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUwsUUFHckIsSUFBSUQsRUFBU0csRUFBeUJFLEdBQVksQ0FDakRHLEdBQUlILEVBQ0pJLFFBQVEsRUFDUlIsUUFBUyxJQVVWLE9BTkFTLEVBQW9CTCxHQUFVTCxFQUFRQSxFQUFPQyxRQUFTRyxHQUd0REosRUFBT1MsUUFBUyxFQUdUVCxFQUFPQyxRQ3ZCZkcsRUFBb0JPLEVBQUtYLElBQ3hCLElBQUlZLEVBQVNaLEdBQVVBLEVBQU9hLFdBQzdCLElBQU9iLEVBQWlCLFFBQ3hCLElBQU0sRUFFUCxPQURBSSxFQUFvQlUsRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsR0NMUlIsRUFBb0JVLEVBQUksQ0FBQ2IsRUFBU2UsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYWixFQUFvQmMsRUFBRUYsRUFBWUMsS0FBU2IsRUFBb0JjLEVBQUVqQixFQUFTZ0IsSUFDNUVFLE9BQU9DLGVBQWVuQixFQUFTZ0IsRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLE1DSjNFYixFQUFvQm1CLElBQU92QixLQUMxQkEsRUFBU21CLE9BQU9LLE9BQU94QixJQUNYeUIsV0FBVXpCLEVBQU95QixTQUFXLElBQ3hDTixPQUFPQyxlQUFlcEIsRUFBUSxVQUFXLENBQ3hDcUIsWUFBWSxFQUNaSyxJQUFLLEtBQ0osTUFBTSxJQUFJQyxNQUFNLDBGQUE0RjNCLEVBQU9RLE9BRzlHUixHQ1RSSSxFQUFvQmMsRUFBSSxDQUFDVSxFQUFLQyxJQUFVVixPQUFPVyxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0d4RHpCLEVBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtZGVtby8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtZGVtby9leHRlcm5hbCBjb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtZGVtby9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1kZW1vL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LWRlbW8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJXaW5kb3csIGFwcCwgaXBjTWFpbiB9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbi8vIOWKoOi9vWh0bWzvvIznm67liY3lj6rlr7nnlJ/kuqfmqKHlvI/ov5vooYzliqDovb1cbmZ1bmN0aW9uIGxvYWRIdG1sKHdpbmRvdzogQnJvd3NlcldpbmRvdywgbmFtZTogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB3aW5kb3cubG9hZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4uL3JlbmRlcmVyLyR7bmFtZX0vaW5kZXguaHRtbGApKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8g5byA5Y+R5qih5byPXG4gIHdpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgd2luZG93LmxvYWRVUkwoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kaXN0LyR7bmFtZX0uaHRtbGApLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuXG5sZXQgbWFpbldpbmRvdzogQnJvd3NlcldpbmRvdyB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XG4gIGlmIChtYWluV2luZG93KSByZXR1cm47XG5cbiAgLy8g5Yib5bu656qX5Y+jXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICAvLyDml6DovrnmoYZcbiAgICBmcmFtZTogZmFsc2UsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIC8vIOS8mOWFiOS6juWGheWuueWKoOi9veeahOiEmuacrFxuICAgICAgLy8gcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ByZWxvYWRfcmVuZGVyLmpzJyksXG4gICAgICBqYXZhc2NyaXB0OiB0cnVlLCAvLyBqYXZhc2NyaXB0IEJvb2xlYW4gKOWPr+mAiSkgLSDmmK/lkKblkK/nlKggSmF2YVNjcmlwdCDmlK/mjIHjgIIg6buY6K6k5YC85Li6IHRydWXjgIJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSwgLy8gbm9kZUludGVncmF0aW9uIEJvb2xlYW4gKOWPr+mAiSkgLSDmmK/lkKblkK/nlKggTm9kZSBpbnRlZ3JhdGlvbi4g6buY6K6k5YC85Li6IGZhbHNlLlxuICAgICAgd2ViU2VjdXJpdHk6IGZhbHNlLFxuICAgICAgLy8g5b2T6K6+572u5Li6IGZhbHNlLCDlroPlsIbnpoHnlKjlkIzmupDnrZbnlaUgKOmAmuW4uOeUqOadpea1i+ivlee9keermSksIOWmguaenOatpOmAiemhueS4jeaYr+eUseW8gOWPkeiAheiuvue9rueahO+8jOi/mOS8muaKiiBhbGxvd1J1bm5pbmdJbnNlY3VyZUNvbnRlbnTorr7nva7kuLogdHJ1ZS4g6buY6K6k5YC85Li6IHRydWVcbiAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlLFxuICAgICAgLy8g5q2k6aG55Li6IHRydWUg55qE6K+d5ZyoIEFwcC5qcyDkuK3ml6Dms5XpgJrov4cgd2luZG93LnJlcXVpcmUg5p2l5byV55SoIGVsZWN0cm9uIOWMhVxuICAgICAgLy8gQm9vbGVhbiAo5Y+v6YCJKSAtIOaYr+WQpuWcqOeLrOeriyBKYXZhU2NyaXB0IOeOr+Wig+S4rei/kOihjCBFbGVjdHJvbiBBUEkg5ZKM5oyH5a6a55qEIHByZWxvYWQg6ISa5pysLiDpu5jorqTkuLogdHJ1ZeOAglxuICAgIH0sXG4gIH0pO1xuXG4gIGxvYWRIdG1sKG1haW5XaW5kb3csIFwiaW5kZXhcIik7XG4gIG1haW5XaW5kb3cub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGw7XG4gIH0pO1xuXG4gIC8vIGRlYnVnLm9wZW5EZXZUb29scyhtYWluV2luZG93KVxufVxuXG5pcGNNYWluLm9uKFwiYXN5bmNocm9ub3VzLW1lc3NhZ2VcIiwgKGV2ZW50OiBhbnksIGFyZzogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibWFpbjpcIiwgYXJnKTsgLy8gcHJpbnRzIFwicGluZ1wiXG4gIGV2ZW50LnJlcGx5KFwiYXN5bmNocm9ub3VzLXJlcGx5XCIsIGBwb25nJHthcmd9YCk7XG59KTtcblxuaXBjTWFpbi5oYW5kbGUoXCJoYW5kbGUtbWVzc2FnZVwiLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShcIjEyM1wiKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vLyDpmpDol4/ljp/nlJ/mu5rliqjmnaFcblxuYXBwLmNvbW1hbmRMaW5lLmFwcGVuZFN3aXRjaChcImVuYWJsZS1mZWF0dXJlc1wiLCBcIk92ZXJsYXlTY3JvbGxiYXJcIik7XG5cbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgY3JlYXRlV2luZG93KCk7XG5cbiAgYXBwLm9uKFwiYWN0aXZhdGVcIiwgKCkgPT4ge1xuICAgIGlmIChCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5sZW5ndGggPT09IDApIGNyZWF0ZVdpbmRvdygpO1xuICB9KTtcbn0pO1xuXG5hcHAub24oXCJ3aW5kb3ctYWxsLWNsb3NlZFwiLCAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSBcImRhcndpblwiKSBhcHAucXVpdCgpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9tYWluLnRzXCIpO1xuIl0sIm5hbWVzIjpbImxvYWRIdG1sIiwid2luZG93IiwibmFtZSIsIndlYkNvbnRlbnRzIiwib3BlbkRldlRvb2xzIiwibG9hZFVSTCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwibWFpbldpbmRvdyIsImNyZWF0ZVdpbmRvdyIsIkJyb3dzZXJXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lIiwid2ViUHJlZmVyZW5jZXMiLCJqYXZhc2NyaXB0Iiwibm9kZUludGVncmF0aW9uIiwid2ViU2VjdXJpdHkiLCJjb250ZXh0SXNvbGF0aW9uIiwib24iLCJpcGNNYWluIiwiZXZlbnQiLCJhcmciLCJsb2ciLCJyZXBseSIsImFzeW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhcHAiLCJ0aGVuIiwibGVuZ3RoIiwicHJvY2VzcyIsInBsYXRmb3JtIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJpZCIsImxvYWRlZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJobWQiLCJjcmVhdGUiLCJjaGlsZHJlbiIsInNldCIsIkVycm9yIiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=