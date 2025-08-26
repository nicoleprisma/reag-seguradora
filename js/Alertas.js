$(document).ready(function () {
    $('input[id*=txtTelefone]').setMask("(99)9999 99999");

    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

});

function Limpar() {
    $('#formFaleComRi').find('input:text, textarea, input:password').val('');
    $('#formFaleComRi').find('select').val($("select option:first-child").val());
    $("input[type='checkbox']").prop('checked', false);
}













