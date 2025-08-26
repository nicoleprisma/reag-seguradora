$(document).ready(function () {

    PageMethods.RefreshFundo(onSuccess, onError);

});

function onSuccess(result) {
    for (i = 0; i < result.length; i++) {

        result[i].fund_family;

    }
}

function onError(result) {
    alert(result._message);
}








