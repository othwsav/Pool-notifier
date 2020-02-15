console.log("yes we did it" + $("body"));

function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
        notify();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                notify();
            }
        });
    }

    function notify() {
        var notification = new Notification('GO GO GO GO GO GO', {
            icon: 'https://candidature.1337.ma/assets/logo_1337-5a213e139c27b7fd6bb1b34bf4cf837f944c466c2d5ea88153efab9f273e6ddb.png',
            body: "The Pool has Arrived",
        });

        notification.onclick = function () {
            window.open("https://candidature.1337.ma/piscines");
        };
        setTimeout(notification.close.bind(notification), 7000);
    }

}

// chrome.runtime.onMessage.addListener(WeclickedButton);

// function WeclickedButton (message, sender, sendResponse){
//     console.log(message.txt);
//     if(message.txt === "hello"){
//         location.href = "https://candidature.1337.ma/piscines"
//     }
// }
function doTheWork(){
    $(document).ready(function () {
        if ($("#subs-content").children().eq(3).text().search("Aucune piscine n\'est actuellement disponible.") == -1)
        notifyMe();
        else {
            console.log("why2222");
            // setTimeout(location.reload(), 50000);
            location.reload().delay(50000);
        }
    });
}

doTheWork();


