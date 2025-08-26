$(document).ready(function () {

    var combo = $('div[id*=ddlAnoLink]');
    $('div[class*=recebeCombo]').prepend(combo);

    if ($(".hidLinguagem").val() == "ptg") {
        $('.resultadoAno').text('Resultados ' + $("select[id*=ddlAnoFiltro] option:selected").text());
    } else {
        $('.resultadoAno').text('Results ' + $("select[id*=ddlAnoFiltro] option:selected").text());
    }

    var ano = $("select[id*=ddlAnoFiltro] option:selected").text();
    if (ano != '') {
        efetuarFiltroPorAno(ano);
    }
    

    var url = window.location.search;

    var idCanal = url.split('Center=')[1];
    if (typeof idCanal !== "undefined") {
        $('.filtroCentral').each(function () {
            var href = $(this).attr('href');
            var canalFiltro = href.split('Center=')[1];

            if (idCanal.indexOf(canalFiltro) != -1) {

                $(this).addClass('active');
            }
        });
    } else {
        $('.filtroCentral').first().addClass('active');
    }

    $("a[id*=linkArq]").each(function () {
        if ((!$.trim($(this).html()) == "") && ($(this).text().indexOf('PDF') != -1)) {
            if ($(this).hasClass("pdf")) {
                $(this).html('<img src="./images/icons/icon-pdf-simple.svg" alt="Download">');
            } else if ($(this).hasClass("videoArquivo")) {
                $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
            } else if ($(this).hasClass("audio")) {
                $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
            }
        }
        else if ((!$.trim($(this).html()) == "") && ($.trim($(this).text().indexOf('xlsx') != -1) || ($(this).text().indexOf('XLS') != -1))) {
            if ($(this).hasClass("Planilhas")) {
                $(this).html('<img src="./images/icons/icon-excel-simple.svg" alt="Download">');
            } else if ($(this).hasClass("audio")) {
                $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
            }
        }else if ((!$.trim($(this).html()) == "") && ($.trim($(this).text().indexOf('MP3') != -1) || ($(this).text().indexOf('ZIP') != -1))) {
            if ($(this).hasClass("audio")) {
                $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
            } 
        }

    });

 

    $("tr[id*=rptResultados_ResultadoArq]").find('a[href*="javascript:void(0)"]').each(function() {
        $(this).parent().parent().attr('style', 'display:none');
    });


 

    // Inserir PDF disable
    var th = 0;
    var cont = 1;
    var trim1;
    var trim2;
    var trim3;
    var trim4;

    $('table[id*=rptResultados_ulAno]').each(function () {
        $(this).find('th').each(function () {
            if (th === cont) {
                if ($(this).attr('resultado') != undefined) {
                    switch (cont) {
                        case 1:
                            trim1 = true;
                            break;
                        case 2:
                            trim2 = true;
                            break;
                        case 3:
                            trim3 = true;
                            break;
                        case 4:
                            trim4 = true;
                            break;
                    }
                }
                th++;
                cont++;
            } else {
                th++;
                return;
            }
        });
        th = 0;
        cont = 1;

        $(this).find("a[id*=linkArq]").each(function () {
            var id = $(this).attr('id');
            var index = id.substr(id.indexOf('T_') - 1);
            var identificador = index.split('_')[0];

            if ((identificador === '1T') && (trim1 === true))
                if ($.trim($(this).html()) == "") {
                    $(this).removeAttr('href');
                    $(this).attr('style', 'cursor:default');
                    $(this).parent().addClass('not-active');
                    if ($(this).hasClass("pdf")) {
                        $(this).html('<img src="./images/icons/icon-pdf-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("videoArquivo")) {
                        $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
                    } else if ($(this).hasClass("Planilhas")) {
                        $(this).html('<img src="./images/icons/icon-excel-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("audio")) {
                        $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
                    }
                 
                }

            if ((identificador === '2T') && (trim2 === true))
                if ($.trim($(this).html()) == "") {
                    $(this).removeAttr('href');
                    $(this).attr('style', 'cursor:default');
                    $(this).parent().addClass('not-active');
                    if ($(this).hasClass("pdf")) {
                        $(this).html('<img src="./images/icons/icon-pdf-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("videoArquivo")) {
                        $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
                    } else if ($(this).hasClass("Planilhas")) {
                        $(this).html('<img src="./images/icons/icon-excel-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("audio")) {
                        $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
                    }
                 
                }

            if ((identificador === '3T') && (trim3 === true))
                if ($.trim($(this).html()) == "") {
                    $(this).removeAttr('href');
                    $(this).attr('style', 'cursor:default');
                    $(this).parent().addClass('not-active');
                    if ($(this).hasClass("pdf")) {
                        $(this).html('<img src="./images/icons/icon-pdf-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("videoArquivo")) {
                        $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
                    } else if ($(this).hasClass("Planilhas")) {
                        $(this).html('<img src="./images/icons/icon-excel-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("audio")) {
                        $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
                    }
                   
                }

            if ((identificador === '4T') && (trim4 === true))
                if ($.trim($(this).html()) == "") {
                    $(this).removeAttr('href');
                    $(this).attr('style', 'cursor:default');
                    $(this).parent().addClass('not-active');
                    if ($(this).hasClass("pdf")) {
                        $(this).html('<img src="./images/icons/icon-pdf-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("videoArquivo")) {
                        $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
                    } else if ($(this).hasClass("Planilhas")) {
                        $(this).html('<img src="./images/icons/icon-excel-simple.svg" alt="Download">');
                    } else if ($(this).hasClass("audio")) {
                        $(this).html('<img src="./images/icons/icon-audio.svg" alt="Download">');
                    }
                 
                }

            cont++;
        });
        cont = 1;


        trim1 = false;
        trim2 = false;
        trim3 = false;
        trim4 = false;
    });
    // FIM Inserir PDF disable


    $("th[id*=rptResultados]").each(function () {
        if ($(this).attr('resultado') == undefined) {
            $(this).remove();
        }

    });

    //remover 'td' vazias
    $("a[id*=linkArq]").each(function () {
        if (($.trim($(this).html()) == "")) {
            $(this).parent().remove();
        }
    });//fim

    $("a.link").each(function () {

        var link = $(this).attr("href");

        if (link != "javascript:") {
            $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
            $(this).parent().parent().removeClass('not-active');
        } else {
            $(this).html('<img src="./images/icons/icon-play.svg" alt="Download">');
            $(this).attr('style', 'pointer-events: none');
        }

    });

    $('a.videoArquivo').each(function () {
        var temLink = $(this).attr('style');

        if (temLink == 'cursor:default') {
            $(this).remove();
        } else {
            $(this).parent().find('.link').remove();
        }

    });

    $('.recebeAno').each(function () {
        var ano = $(this).parents('div[id*=divResultados]').attr('ano');
        $(this).text(ano);

    });

    $('.trThead').each(function () {

        var thead = $(this).html();

        $(this).parent().parent().prepend('<thead>' + thead + '</thead>');

        $(this).remove();

    });

    $('tr').each(function () {
        var ts = $(this).find('td');
        var qtdTd = ts.length;
        var tdVazia = 1;

        for (var i = 0; i <= qtdTd; i++) {
            if ($(this).find('td').eq(i).hasClass("not-active")) {
                tdVazia++;
            }

            if (tdVazia == qtdTd) {
                $(this).remove();
            }
        }

    });

});

function efetuarFiltroPorAno(ano) {
    $('div[ano]').hide();
    $('div[ano=' + ano + ']').show();
}

function limpaFiltroPorAno() {
    $('div[ano]').hide();
    $('div[ano]').show();
}

