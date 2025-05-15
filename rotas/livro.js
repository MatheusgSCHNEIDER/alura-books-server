const { Router } = require('express')
const router = Router()


const { getLivros, getLivrosPorId, postLivros, patchLivros, deleteLivros} = require('../controladores/livro')

router.get('/', getLivros)

router.get('/:id', getLivrosPorId)

router.post('/', postLivros)

router.patch('/:id', patchLivros)

router.delete('/:id', deleteLivros) 

module.exports = router