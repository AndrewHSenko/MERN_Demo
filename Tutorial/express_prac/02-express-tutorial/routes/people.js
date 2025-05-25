const express = require('express')
const router = express.Router()

const { 
    getPeople,
    createPerson,
    createPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// router.get('/', getPeople)

// router.post('/', createPerson)

// router.post('/postman', createPostman)

// router.put('/:id', updatePerson)

// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson) // Chaining
router.route('/postman').post(createPostman)
router.route('/:id').put(updatePerson).delete(deletePerson) // Chaining

module.exports = router