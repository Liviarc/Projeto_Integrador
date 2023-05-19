const mongoose = require('../DB')


const propostasSchema = mongoose.Schema({
    nome: {type: String},
    valor: {type: String},
    tipo: {type: String},
    tipoPessoa: {type: String},
    situacao: {type: String}
})  
const Propostas = mongoose.model("propostas", propostasSchema )


module.exports = Propostas