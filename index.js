const prompt = require("prompt-sync")();
const { criar, atualizar, listar, buscar, remover } = require("./modulos.js");

while (true) {
  console.log(`
        1. Para criar
        2. Para listar
        3. Para atualizar
        4. Para remover
        5. Para buscar
        6. Para sair
        `);

  const opcao = +prompt("Escolha uma opção acima: ");

  switch (opcao) {
    case 1:
        criar()
      break;
    case 2:
        listar()
      break;
    case 3:
        atualizar()
      break;
    case 4:
        remover()
      break;
      case 5:
        buscar()
      break;
    case 6:
        process.exit()
      break;
    default:
        console.log("Opção inválida")
      break;
  }
}
