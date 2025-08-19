const fontinp = document.getElementById("fontinput");
const colorinp = document.getElementById("colorinput");
const changebt = document.getElementById("changebtn");


changebt.addEventListener("click", () => {
    chrome.storage.sync.set({'fontstyleinkey': fontinp.value, 'themekey':colorinp.value}, function (){
        console.log("value is set");
        
    });

    
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, {reload:'reload'});
    })


   
})