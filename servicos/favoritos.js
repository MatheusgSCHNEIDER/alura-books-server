const fs = require( 'fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deleteFavoritoPorId(id) {
    let livrosFavoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const indiceFavoritoDeletado = livrosFavoritos.findIndex( livro => livro.id === id )

    livrosFavoritos.splice(indiceFavoritoDeletado, 1)
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFavoritos))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const inseridoIndex = livros.findIndex( livro => livro.id === id )

    const novaListaLivrosFavoritos = [ ...favoritos, livros[inseridoIndex]]
    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deleteFavoritoPorId,
    insereFavorito
}