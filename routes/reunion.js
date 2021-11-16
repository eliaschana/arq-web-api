const express = require('express')
const router = express.Router()
const reunionController = require('../controllers/reunionController')

// Se asigna el controlador correspondiente a cada ruta

router.get('/',
    reunionController.getAll
)

router.get('/:id',

    reunionController.findById
),

router.post('/',
 
    reunionController.addReunion
)

router.delete('/:id',
   reunionController.delete
)

router.put(
    '/:id',
    reunionController.editReunion
)

module.exports = router