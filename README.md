# Nodejs-Algolia
# Develop by Renan Felipe Luckow

Run the project:    
  -npm install  
  -npm start  
  
  Project will run at: "http://localhost:3001"
  
 ROUTES:     
      
   ---Export:   
    
    Route: /algolia/export?applicationId=____&apiKey=_____&indexName=______
    Body:
    {
      "options": {
        "attributesToRetrieve": [
                    "objectID"
                  ]
      }
    }
 in Options all algolia options can be used: https://www.algolia.com/doc/api-reference/api-methods/browse/#retrieve-only-certain-attributes-when-browsing
    
    
 Output: Export the index informations to a .json file
    
