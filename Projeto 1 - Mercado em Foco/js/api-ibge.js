let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

$.getJSON(url, function(data){
    let conteudo = "<optiongroup>";
    $.each(data, function(v, val){
        conteudo += "<option value="+val.sigla+">"+val.nome+"</option>";
    })
    conteudo += "</optiongroup>";
    $("#estados").html(conteudo);
});

$('#estados').change(function () {
    let es = document.getElementById('estados');
    esValor = es.options[es.selectedIndex].value;
    let url1 = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+esValor+'/municipios';
   
    $.getJSON(url1, function(data){
        let conteudo1 = '<optiongroup>';
        $.each(data, function(v, val){
            conteudo1 += '<option>'+val.nome+'</option>';
        })
        conteudo1 += '</optiongroup>'
        $("#cidades").html(conteudo1);
    });

});

