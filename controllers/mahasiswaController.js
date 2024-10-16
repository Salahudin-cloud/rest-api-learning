const MahasiswaModel = require("../models/mahasiswa");

// create mahasiswa function
exports.create = async (req, res) => {
  if (!req.body.nama || !req.body.jurusan || !req.body.semester) {
    return res.status(400).send({
      message: "Nama, Jurusan, and Semester are required fields",
    });
  }

  const mhs = new MahasiswaModel({
    nama: req.body.nama,
    jurusan: req.body.jurusan,
    semester: req.body.semester,
  });

  try {
    const savedMahasiswa = await mhs.save();
    res.status(201).send({
      message: "Mahasiswa berhasil ditambahkan",
      data: savedMahasiswa,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Terjadi kesalahan pada server",
    });
  }


};

// get all mahasiswa data
exports.findAll = async (req, res) => {
  try {
    const mhs = await MahasiswaModel.find();
    if (mhs.length === 0) {
      res.status(200).send({
        message: "Data mahasiswa kosong",
      });
    } else {
      res.status(200).json(mhs);
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// get single mahasiwa
exports.findOne = async (req, res) => {
  try {
    const mhs = await MahasiswaModel.findById(req.params.id);
    res.status(200).json(mhs);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// update mahasiswa
exports.updateMahasiswa = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "data yang akan di update tidak boleh kosong",
    });
  }

  // mendapatkan id
  const id = req.params.id;

  await MahasiswaModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Mahasiswa dengan id " + id + " tidak ditemukan",
        });
      } else {
        res.status(200).send({
          message: "Mahasiswa berhasil diupdate",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// delete mahasiswa
exports.deleteMahasiswa = async (req, res) => {
  await MahasiswaModel.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Mahasiswa dengan id " + req.params.id + " tidak ditemukan",
        });
      } else {
        res.status(200).send({
          message: "Mahasiswa berhasil dihapus",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
