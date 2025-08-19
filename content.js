// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     console.log(request.theme);

//     var alldiv = document.body.querySelectorAll('div');
//     alldiv.forEach((els) => {
//         els.style.backgroundColor = request.theme;
//     }); 


//     // chrome.storage.sync.get(['fontstyleinkey', 'themekey'], function(vall){
//     //     console.log(vall.fontstyleinkey, vall.themekey)
//     // })
    
//     document.body.style.fontFamily = request.fontstylein;
// });

chrome.storage.sync.get(['fontstyleinkey', 'themekey'], function(vall){
    var alldiv = document.body.querySelectorAll('div');
    alldiv.forEach((els) => {
        els.style.backgroundColor = vall.themekey;
    }); 

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if(request.reload){
            window.location.reload()
        }
        
    })

    document.body.style.fontFamily = vall.fontstyleinkey;
})
    

