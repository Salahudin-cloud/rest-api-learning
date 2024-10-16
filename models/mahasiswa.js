const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
});

const mahasiswa = new mongoose.model("Mahasiswa", schema, "mahasiswa");

module.exports = mahasiswa;
