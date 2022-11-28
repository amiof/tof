const readline = require('readline-sync');
const{ downloadBrowser} = require("./utiles")
class getFromUse{
    // constructor(){
    //     this.selectWhatSite()
    //    const namebook= this.getNameBook()
    //   const pagebook=  this.getPageNumber()

    // }

    selectWhatSite(){
    const tof=["fidibo","taghche"]
    const nameSite =readline.keyInSelect (tof, "whiche you want?")
    if(nameSite==0)return "https://fidibo.com/"
    return "https://taaghche.com/login"
    }
    useWinOrLinux(){
    const wol=["LINUX","WINDOWS"]
    const system =readline.keyInSelect (wol, "whiche you want?")
    
    return system
    }
    getNameBook(){
        const nameBook =readline.question('please import your book name?')
            return nameBook

    }
    getPageNumber(){
    
    const pageNumber =readline.question('please import your Page of book:')
        return pageNumber
    }
    routeFolder(){

    }
    openBrowserAndGo(){
        
    }
    downloadBrowser(wol){
        const qBrowser =readline.question('do you want download borwser?[y/n]')
        if(qBrowser.toLowerCase()=="y"){

            if(wol==1){
               const filename="chrom-win-32.zip"
                const url="https://chromedriver.storage.googleapis.com/108.0.5359.22/chromedriver_win32.zip"
               downloadBrowser(url,filename)
            }
            const filename="chrom-linux-64.zip"
            const url="https://chromedriver.storage.googleapis.com/108.0.5359.22/chromedriver_linux64.zip"
            downloadBrowser(url,filename)
        }
    }

}


module.exports={
    getFromUse: new getFromUse()
}







