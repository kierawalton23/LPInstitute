function lpGetAuthenticationToken(callback) {
    var r = new XMLHttpRequest();
    r.open("GET", "https://calm-mesa-48745.herokuapp.com/messaging/idp/token?sub=WebMsgTest1289&expires=259200&passSdes=true&companyBranch=branch1");
    r.onload = function () {
        if (r.status != 200) {
            console.log("IDP not working, status: " + r.status.toString());
        };
        callback(r.responseText);
    };
    r.send();
}

// var tokenCalls = 0;

// function LPJsMethodName(callback) {
//     addAlert('container', '[2] ' + status + ' lpGetAuthenticationToken(callback)');

//     //Standard
//     callback('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDY2NjM5MzksImV4cCI6MTY0NjY2NDE3OSwiaXNzIjoicG9jYXBwIiwic3ViIjoiV2ViTXNnVGVzdDEyNDUifQ.dSROepmL3DMw7yDBkbztHYUR7y9XBq8AD4yrRKNCrAke6jwbLCqW_ZZIPLL4OtF-Rrq-4TT9PAlywZ_OVSlvaaaqEPOe1W3durYSQE0sEwQcKNA-Ee3HykQnZ3soxMzDxcPxR8y5ANw5Lm-E9Q67pzZD1lOhWafcrVenX0kpdP_P9NdKK6Vkv8tsuXCCiwUsar1tA36uSggicti65prQiex_qyNZHHgJsvT-uIOs2OzTfQl_EwmCAQM25_1bRygHe06Sj9g2Q4prpJE1-ZjLuosWy0uOwvqJFqUTDkibcQfOfJ22IrdAeH8VTvmD04Xh0wi1ZGmSU6Amdo2o0C07lQ');
// }

// function addAlert(targetDiv, text) {
//     var div = document.getElementById(targetDiv);
//     var alertDiv = document.createElement("div");

//     alertDiv.className = 'alert alert-primary';
//     alertDiv.innerHTML += text;
//     div.appendChild(alertDiv);
// }