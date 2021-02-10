const algoliasearch = require('algoliasearch');
const { resolveSoa } = require('dns');
const fs = require('fs');
const { resolve } = require('path');

module.exports = {
    exportData: async (req, res) => {

        const {applicationId, apiKey, indexName} = req.query

        const client = algoliasearch(applicationId, apiKey);
        const index = client.initIndex(indexName);

        const options = req.body.options

        let hits = []
    
        return new Promise((resolve, reject) => {

            index
            .browseObjects({
                ...options,
              batch: (objects) => (hits = hits.concat(objects)),
            })
            .then(() => {
              console.log('Finished! We got %d hits', hits.length);
              fs.writeFile(
                `${indexName}.json`,
                JSON.stringify(hits, null, 2),
                'utf-8',
                (err) => {
                  if (err) throw err;
                  console.log('Your index was successfully exported!');
                }
                );
                res.status(200).send({
                    message: `Finished! We got ${hits.length} hits`,
                    file: `Output file: ${indexName}.json`})
                resolve({
                    status: 200,
                    message: `Finished! We got ${hits.length} hits`
                })
            }).catch( (err) => {
                throw err
            }).catch(err => {
                res.status(err.status).send(err)
                reject(err2)
            })
        })
      
    }
    
}