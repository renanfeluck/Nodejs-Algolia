const router = require('express').Router();
const algoliaController = require('../controllers/algoliaController')
module.exports = (app) => {
    router.post('/algolia/export', async (req, res) => {
        algoliaController.exportData(req, res)
    })

    app.use(router)
}