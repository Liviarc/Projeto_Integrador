const express = require('express')
const Propostas = require('../models/propostas')
module.exports = {
    trailingSlash: false,
    async headers() {
      return [
        {
          // matching all API routes
          source: '/:path*',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
            { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
          ],
        },
      ];
    },
    async redirects() {
      return [];
    }
  };
const router = express.Router()


router.get('/propostas', async (req,res) => {
    

    try {

        const proposta = await Propostas.find({valor: req.query.valor, tipo: req.query.tipo, tipoPessoa: req.query.tipoPessoa, situacao: req.query.situacao})
        return res.send(proposta)
    } catch (error) {
        res.status(400).send({ error: 'Erro na Busca'})
    }
})

module.exports = app => app.use('/', router)