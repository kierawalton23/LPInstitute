function lpGetAuthenticationToken(callback) {
    var r = new XMLHttpRequest();
    r.open("GET", "https://calm-mesa-48745.herokuapp.com/messaging/idp/token?sub=WebMsgTest1289&expires=259200");
    //&passSdes=true&companyBranch=branch1&firstname=kiera&lastname=walton
    r.onload = function () {
        if (r.status != 200) {
            console.log("IDP not working, status: " + r.status.toString());
        };
        callback(r.responseText);
    };
    r.send();
}