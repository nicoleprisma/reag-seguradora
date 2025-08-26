function limpaFiltroPorAno() {
    window.location = "ListGroup.aspx?idCanal=" + getIdCanal();
}

function efetuarFiltroPorAno(ano) {

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('section[id*=pergunta-collapse]').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:block;');

    $.ajax({
        type: "POST",
        url: "filtroListGroup.asmx/RefreshContent",
        data: JSON.stringify({
            "ano": ano,
            "idCanal": idCanal,
            "linguagem": linguagem
        }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: onSuccess,
        error: function (result) {
        }
    });

}




function onSuccess(result) {
    //alert(result);
    $('.divListGroup').empty();


    var i;
    var c;
    var text = "";
    var conteudos = "";
    for (i = 0; i < result.d.length; i++) {
        if (!(typeof result.d[i].Titulo === "undefined")) {

            var corpoHtmlBase = '<h2> #TituloCanal  </h2>  <ul class="list-downloads"> #RecebeConteudos </ul>'
            corpoHtmlBase = corpoHtmlBase.replaceAll('#TituloCanal', result.d[i].Titulo);
            var corpoConteudos = "";

            for (c = 0; c < result.d[i].Materia.length; c++) {
                if (!(typeof result.d[i].Materia[c].Titulo === "undefined")) {
                    corpoConteudos = '<li class="ajusteLista"> <div> <span> #trocaData </span> <img src="./images/icons/icon-pdf-simple.svg" alt="PDF" class="iconePDF"> <a href="#trocaLink" id="recebeLink"> <p class="recebeTexto"> #trocaTitulo </p> <img src="./images/icons/icon-download.svg" alt="Download" class="iconeDownload"> <img src="./images/icons/icon-pdf-simple.svg" alt="PDF" class="iconeDownload"> </a> </div> </li>';
                    corpoConteudos = corpoConteudos.replaceAll('#trocaData', result.d[i].Materia[c].Data);
                    corpoConteudos = corpoConteudos.replaceAll('#trocaTitulo', result.d[i].Materia[c].Titulo);
                    corpoConteudos = corpoConteudos.replaceAll('#trocaLink', result.d[i].Materia[c].Link);
                    conteudos += corpoConteudos;
                }
            }
            corpoHtmlBase = corpoHtmlBase.replaceAll('#RecebeConteudos', conteudos);
            conteudos = "";

        }
        text += corpoHtmlBase;
    }

    $('.divListGroup').append(text);


    $('a').each(function () {
        var link = $(this);
        var urlLink = $(this).attr('href');
        if (typeof link.attr('href') != 'undefined') {
            if ((link.attr('href').indexOf('/Download/') > -1) || (link.attr('href').indexOf('download.aspx') > -1) || (link.attr('href').indexOf('Download.aspx') > -1)) {
                var descricao = link.text().trim();
                link.attr('target', '_blank');

                if (descricao == '') {
                    descricao = urlLink.split('download.aspx?')[1];
                }

                var url = window.location.href;

                if (url.toLowerCase().indexOf('/listresultados.aspx') > -1) {
                    var ano = $(this).parents('div[id*=divResultados]').attr('ano');

                    if ($(".hidLinguagem").val() == "ptg") {
                        link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "_PT_" + ano + "'});");
                    } else {
                        link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "_EN_" + ano + "'});");
                    }

                } else {
                    link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "'});");
                }
            }
        }
    });

    $('h2').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('ul').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    if ($('.list-downloads').text().trim() === '') {
        if ($(".hidLinguagem").val() == "ptg") {
            $('.list-downloadsM').first().html('<li><p>N&atilde;o existem mat&eacute;rias com esse filtro escolhido.</p></li>');
        } else {
            $('.list-downloads').first().html('<li><p>There are no materials with this chosen filter.</p></li> ');
        }
    }

    $('div[class*=loader]').attr('style', 'display:none;');
    $('section[id*=pergunta-collapse]').attr('style', 'display:block;');

}


function onError(result) {
    alert(result._message);
}

function getIdCanal() {
    var strHref = window.location.href;
    var strQueryString = strHref.substr(strHref.indexOf("=") + 1);
    var aQueryString = strQueryString.split("&");
    return aQueryString[0];
}


$(document).ready(function () {
    sleep(1000);
    if ($('.list-downloads').text().trim() === '') {
        if ($(".hidLinguagem").val() == "ptg") {
            $('.list-downloadsM').first().html('<li><p>N&atilde;o existem mat&eacute;rias com esse filtro escolhido.</p></li>');
        } else {
            $('.list-downloads').first().html('<li><p>There are no materials with this chosen filter.</p></li> ');
        }
    }

    $('a[id*=linkListaTituloChamada]').each(function () {
        var link = $(this).attr('href');
        $(this).parents('.ajusteLista').find('a#recebeLink').attr('href', link);

        if (link.indexOf("Download") == -1) {
            $(this).parents('.ajusteLista').find('.iconePDF').attr('src', './images/icons/icon-link.svg');
        }

        var textoLink = $(this).text();

        $(this).parents('.ajusteLista').find('.recebeTexto').text(textoLink);

        $(this).remove();
    });

    var combo = $('div[id*=ddlAnoLink]');
    $('div[class*=recebeCombo]').append(combo);

    $('a.disabled').remove();
    $('a#lnkAnterior').remove();
    $('a#lnkProximo').remove();

    $('h2').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('ul').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('div[class*=loader]').attr('style', 'display:none;');
    $('section[id*=pergunta-collapse]').attr('style', 'display:block;');
    
});

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}