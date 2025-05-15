const fs = require( 'fs')
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deleteLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros() 
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivrosPorId(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        if (id && Number(id)) {
            if (!livro) {
                res.status(404).send({ Erro: `Livro com ID ${id} não encontrado.` })
                return    
            }
            res.send(livro)
        }
        else {
            res.status(422).send({Erro:`Valor '${id}' para ID é inválido`})
        }         
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }        
}    

function postLivros (req, res) {
    try {
        const livroNovo = req.body
        const id = req.body.id
        const livros = JSON.parse(fs.readFileSync('livros.json'))
        const postIndex = livros.findIndex( livro => livro.id === id )
        
        if(req.body.id && req.body.nome && req.body.autor) {
            if(livros[postIndex]) {
                res.status(422).send({ Erro: `O ID ${id} já existe na tabela livros`})    
            }
            else {
                res.status(201).send('Livro inserido com sucesso')
                insereLivro(livroNovo)
            }
            
        }
        else {
            res.status(422).send({ Erro: 'Campos obrigatórios não enviados'})
        }    
    } catch (error) {
        res.status(500)
        res.send(error.message)    
    }


}

function patchLivros (req, res) {
    try {
        const id = req.params.id 
        const body = req.body
        if (id && Number(id)) {
            if(!req.body.name && !req.body.autor ) {
                res.status(400).send({ Erro: `O livro deve conter um titulo e um autor` })
                return     
            }
            modificaLivro(body,id)
            res.send(`Livro '${body.nome}' modificado com sucesso`)
        }
        else {
            res.status(422).send({Erro:`Valor '${id}' para ID é inválido`})
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivros (req, res) {
    try {
        const id = req.params.id
        const livros = JSON.parse(fs.readFileSync('livros.json'))
        const excluidoIndex = livros.findIndex( livro => livro.id === id )

        if (id && Number(id) && livros[excluidoIndex]) {
            deleteLivroPorId(id)
            res.send(`Livro id:${id} deletado com sucesso`)
        }
        else {
            res.status(422).send({Erro:`Valor '${id}' para ID é inválido ou inexistente na tabela livros`})
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivrosPorId,
    postLivros,
    patchLivros,
    deleteLivros
}