const { getFromUse } = require("./controller");
const wol=getFromUse.useWinOrLinux()
 getFromUse.downloadBrowser(wol)
const site=getFromUse.selectWhatSite()
const nameBook=getFromUse.getNameBook()
const pageBook=getFromUse.getPageNumber()
console.log(site, wol)