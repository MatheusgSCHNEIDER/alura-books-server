const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

const rotaLivro = require('./rotas/livro')
const rotaFavorito = require('./rotas/favoritos')

app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

app.listen(port, () => {
    console.log("ESCUTANDO NA PORTA 8000" )
})
