const fs = require("fs") // fs=fyle system

fs.readFile('texto.txt', 'utf8', (erro,dados) => {
    if(erro){
        console.log(erro)
        return
    }
})