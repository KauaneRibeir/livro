
const prompt= require("prompt-sync")()
const livros= []
let ultimoId = 0;


function getIndice(id) {
  const indice = livros.findIndex((el) => el.id == id);

  if (indice == -1) {
    console.log("ID inexistente");
  }
  return indice;
}
const modelo =( id = ++ultimoId) => {
    const titulo = prompt(" qual o titulo? ")
    const autor = prompt("Qual é a autor do livro? ")
    const ano = +prompt("Qual é o ano? ")
    const genero =prompt ("qual é o genero? ")
    const versoes =[]
    const verifica = prompt("Tem uma nova versoes? ")
    if (verifica=="sim") {
        while (true) {
        const novaversao=prompt("Qual é o ano da versão?  Ou digite sair ")
        
    if (novaversoes=="sair") {
        break;
    
    }else{
        versoes.push(novaversao)
    }
}
    }
if (titulo!== "" &&
    autor!=="" &&
    !isNaN(ano) &&
    genero!==""){
    
   return {
    titulo,
    autor,
    ano,
    genero,
    versao,
    id
   }
}else{
    console.log("dados invalidos")
   }
}


const criar = () => {
const livro= modelo()
if (livro!== undefined) {
livros.push(livro) 
console.log("livro cadastrado com sucesso!")
}
}

const listar = () => {
    if (livros.length === 0) {
        console.log("nenhuma livro cadastrada.")
        return
    }else{
    livros.forEach((livro) => {
    console.log(`${livro.id}. Titulo: ${livro.titulo}, 
    Autor: ${livro.autor}, Ano: ${livro.ano}, Genero: ${livro.genero}`)
    }
    )}
}

const atualizar = () => {
    listar();

    const id = +prompt("Digite o ID: ");

    const indice = getIndice(id);

    if (indice != -1) {
      const novo = modelo(id);
    
      if (novo) {
        livros[indice] = novo;
        console.log("Atualizado com sucesso");
      }
    }
}


const buscar = () => {
    console.log(`
    1. titulo
    2. autor
    3. ano
    4. genero`)
    const op =+prompt("Qual opção deseja fazer a busca? ")
    let key
    let value
switch (op) {
        case 1:
key = "titulo"
value = prompt("qual é o titulo? ")
        break;
        case 2:
key= "autor"
value = prompt("qual é o autor? ")        
        break;
        case 3:
key = "ano"
value = prompt("qual é o ano? ")       
        break;
        case 4:
key = "genero"
value = prompt("qual é o genero? ")           
        break;
        default:
console.log("Opção invalida!")
        break;
}
const result = livros.filter((livro)=>  livro[key]== value);
if (result.length>0){
    result.forEach((livro)=> {
    console.log(`${livro.id}. Titulo: ${livro.titulo}, 
    Autor: ${livro.autor}, Ano: ${livro.ano}, Genero: ${livro.genero}`)
    
livro.versao.forEach((novaversao,indice) => {
    console.log(`Nome: versão ${indice + 1} : ${novaversao}`)
})
}
    )
}else{
    console.log("Livro não encontrado!")
}
}



const remover =()=>{
    listar()
const id = +prompt("Digite o ID: ");
        
const indice = getIndice(id);
            
 if(indice != -1) {
livros.splice(indice, 1);
console.log("Removido com sucesso");
}

}
        


module.exports = {
  criar,
  listar,
  atualizar, 
  buscar,
  remover
}

