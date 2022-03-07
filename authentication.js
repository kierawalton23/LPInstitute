function lpGetAuthenticationToken(callback) {
    var r = new XMLHttpRequest();
    r.open("GET", "https://calm-mesa-48745.herokuapp.com/messaging/idp/token?sub=WebMsgTest1245&expires=240");
    r.onload = function () {
        if (r.status != 200) {
            console.log("IDP not working, status: " + r.status.toString());
        };
        callback(r.responseText);
    };
    r.send();
}