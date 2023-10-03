const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('vinicius oppenheimer é platina')

})

app.listen(1000, () =>{
    console.log('vinicius plat')
})
