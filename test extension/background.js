console.log("object");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    var newURL = "https://candidature.1337.ma/piscines";
    chrome.tabs.create({ url: newURL });
    // console.log("why");
    // let msg = {
    //     txt: "hello"
    // }
    // chrome.tabs.sendMessage(tab.id, msg)
}