var prods = [
    {   id: 1, nome:"Bife com Batatas", price: 30.0},
    {   id: 2, nome: "Coxa de Frango Crocante", price: 25.0},
    {   id: 3, nome: "Carne de Panela", price: 22.0},        
    {   id: 4, nome: "Farofa", price: 10.0},        
    {   id: 5, nome: "Salada", price: 8.0},        
    {   id: 6, nome: "Torresmo", price: 12.0},       

];


function calc(){
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;
    var contador = false;
    var nomef = document.getElementById("namef").value;
    output.innerHTML = "";



    var formatter = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    })


    if(!nomef.trim()){
        alert("Por favor prencha o nome!!!");
        return;
    }

    output.innerHTML += `<div class="output"> Caro  <strong>${nomef}</strong><br><br>
    <br>Seguem os dados do seu pedido.<br><br>
    O seu pedido é:<br>`


    for(var input of quantities){
        var id = input.id; 

        let precoUnitario = parseFloat(prods[id-1].price); // Garantir que seja um número
let quantidade = parseFloat(input.value);
let totalItem = precoUnitario * quantidade

        if(parseFloat (input.value) > 0){
        contador = true;
        output.innerHTML += `<ul id="listasaida" class="output"><li>Prato: ${prods[id-1].nome} - Preço unitário: ${formatter.format(prods[id-1].price)}
                             - Quantidade: ${parseFloat(input.value)} - Total: ${formatter.format(totalItem)}</li></ul>`;
        total            += totalItem;

1
    }

}
if(!contador) {
    output.innerHTML = "<h3 style='color: red;'> Nenhum item foi selecionado</h3>"
}else{
        output.innerHTML += `<div class="output" >  <h3><br><br>Preço final: ${formatter.format(total)}</h3></div>`
}
}