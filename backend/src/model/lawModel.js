const mongoose = require("mongoose");

const LawsuitSchema = new mongoose.Schema(
  {
    _id: String,
    cnj: String,
    autor: String,
    reu: String,
    tribunal: String,
    data: String,
    movimentacoes: [
      {
        descricao: String,
        data: String,
      },
    ],
  },
  { collection: "lawsuits_collection" }
);

const LawModel = mongoose.model("Lawsuit", LawsuitSchema);

module.exports = LawModel;
