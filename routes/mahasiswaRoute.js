const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

// Route for creating a new Mahasiswa
router.post('/api/create', mahasiswaController.create);

// Route for fetching all Mahasiswa
router.get('/api', mahasiswaController.findAll);

// Route for fetching a Mahasiswa by ID
router.get('/api/:id', mahasiswaController.findOne);

// Route for updating a Mahasiswa by ID
router.put('/api/update/:id', mahasiswaController.updateMahasiswa);

// Route for deleting a Mahasiswa by ID
router.delete('/api/delete/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;
