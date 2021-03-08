const os = require('os');

const freeMem = os.freemem();
const userInfo = os.userInfo();
const osCpu = os.cpus();
const osNet = os.networkInterfaces();
const osPlat = os.platform();
const osDir = os.tmpdir();
const osTotal = os.totalmem();
let busyMem = osTotal - freeMem;
const osType = os.type();
const osTime = os.uptime();
const osversion = os.version();
// console.log(`Bo'sh xotira: ${freeMem/(1024*1024)} Mbayt\nFoydalanuvchi haqida ma'lumot: ${userInfo.username}`);
// console.log(`Band xotira: ${busyMem/(1024*1024)} Mbayt`);
console.log(osversion);