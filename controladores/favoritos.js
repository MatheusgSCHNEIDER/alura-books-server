const fs = require( 'fs')
const { getTodosFavoritos, insereFavorito, deleteFavoritoPorId } = require("../servicos/favoritos") 


function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos() 
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritos (req, res) {
    try {    
        const id = req.params.id
        const livros = JSON.parse(fs.readFileSync('livros.json'))
        const inseridoIndex = livros.findIndex( livro => livro.id === id )
        const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

        if(!livros[inseridoIndex]) {
            res.status(404).send({ Erro: `Livro com ID ${id} não encontrado.` }) 
        }
        if(favoritos.some(item => item.id === id)) {
            res.status(422).send({ Erro: `O ID ${id} já existe em favoritos`})
        }
        else {
            insereFavorito(id)
            res.status(201).send(`Livro com ID ${id} inserido em favoritos.`)
        }   
    } catch (error) {
        res.status(500)
        res.send(error.message)    
    }


}

function deleteFavoritos (req, res) {
    try {
        const id = req.params.id
        const livrosFavoritos = JSON.parse(fs.readFileSync('favoritos.json'))
        const deletadoIndex = livrosFavoritos.findIndex( livro => livro.id === id )

        if (id && Number(id) && livrosFavoritos[deletadoIndex]) {
            deleteFavoritoPorId(id)
            res.send(`Livro id:${id} removido dos favoritos com sucesso`)
        }
        else {
            res.status(422).send({Erro:`Valor '${id}' para ID é inválido ou não existe em favoritos`})
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}