// array e matrizes é uma variiavel que permite armazenar varios valores
//  array           [0]                    [1]               [2]              
var passeio =["ir ao parque","conhecer lugares novos", "comer pipoca"]
//para inserir um novo valor no array usamos push.

console.log(passeio);
console.log(passeio[2]);

passeio.push("comer picole");
passeio.push(" ficar sentado conversando");
console.log(passeio);

//para remover o ultimo valor no array usamos o pop.
passeio.pop();
console.log(passeio);

// para remover, deletar um valor especifico.
delete passeio[0];
console.log(passeio);
passeio.splice(1,1);
passeio[0]="cpmer sorvete";
console.log(passeio);


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}