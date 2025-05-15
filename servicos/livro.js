const fs = require( 'fs')

function getTodosLivros () {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    return livros.find( livro => livro.id === id) 
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    
    const novaListaLivros = [... livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros))

}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ... modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function deleteLivroPorId(id){
    let livros = JSON.parse(fs.readFileSync('livros.json'))
    const indiceDeletado = livros.findIndex(livro => livro.id === id)

    livros.splice(indiceDeletado, 1)
    fs.writeFileSync('livros.json', JSON.stringify(livros))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deleteLivroPorId
} 