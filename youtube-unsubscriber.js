var i = 0;
var channels = document.getElementsByTagName("ytd-channel-renderer");
var refreshIntervalId = setInterval(unsubscribe, 2000);

function unsubscribe() {
    if (channels.length>0) {
        channels[0].getElementsByTagName("paper-button")[0].click();
        setTimeout(function() {
            document.getElementById("confirm-button").click();
        }, 500);
        setTimeout(function() {
            channels[0].parentNode.removeChild(channels[0]);
        }, 1000);
    }
    else{
        clearInterval(refreshIntervalId);
    }
    i++;
    console.log(i + " unsubscribed");
    console.log(channels.length + " remaining");
}
