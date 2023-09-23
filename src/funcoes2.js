function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);

   element.style.display = 'none';
   document.body.appendChild(element);

   element.click();

   document.body.removeChild(element);
}
function salvarRespostas(){
    let tudoOk = true;
    let nome = document.forms[0].nome.value;
    if(!nome){
        alert("Lembre-se que é obrigatório preencher seu nome!");
        tudoOk = false;
    }
    let idade = document.getElementById('idade').value;
    if(!idade){
        alert("Preciso saber sua idade!");
        tudoOk = false;
    }
    let escola = document.getElementsByName('escola');
    let cont = 0;
    for (let i=0;i<escola.length;i++){
        if(escola[i].checked){
            escola = escola[i].value;
            cont++;
        }
    }
    if(cont===0){
        tudoOk = false;
        alert("É necessário informar sua escola!!");
    }
    let serie = document.getElementById('serie').value;
    if(!serie){
        alert("Preciso que informe a sua série!");
        tudoOk = false;
    }
    let eVeterano = document.querySelector('input[name=veterano]:checked')?.value;

    if(!eVeterano){
        alert("Preciso saber se o cara é veterano!");
        tudoOk = false;
    }

    let resposta1 = document.querySelector('input[name=resposta1]:checked')?.value;
    let resposta2 = document.querySelector('input[name=resposta2]:checked')?.value;
    let resposta3 = document.querySelector('input[name=resposta3]:checked')?.value;
    let resposta4 = document.querySelector('input[name=resposta4]:checked')?.value;
    let resposta5 = document.querySelector('input[name=resposta5]:checked')?.value;
    console.log(resposta5);
    
    const p = document.createElement('p');
    let t = document.createTextNode('Eu nunca pago hoje o que eu posso pagar amanhã!!');
    p.appendChild(t);

    const corpao = document.body;
    corpao.appendChild(p);
    if(tudoOk){
        let texto = nome + ";"+ idade + ";" + escola + ";" + 
        serie + ";" + eVeterano + ";" + resposta1 + ";" + resposta2+ ";" + 
        resposta3 + ";" + resposta4 + ";" + resposta5;

        download(nome+".csv",texto);
        document.forms[0].submit();
    }

}