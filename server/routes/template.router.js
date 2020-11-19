const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
//where "wine"."user_id" =$1;  [req.user.id]
  
  const queryText = `SELECT * FROM "wine" WHERE "wine"."user_id" = $1 ;`;
    pool.query(queryText, [req.user.id])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query` , error);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "wine" ("user_id", "winery", "variety", "name", "rating", "year", "price", 
                        "fruity", "floral", "nutty", "earthy", "herby", "spicy", "other", "overall", "notes")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`;
    console.log(req.body);
    pool.query(queryText, [req.body.user_id, req.body.winery, req.body.variety, req.body.name, req.body.rating,
                            req.body.year, req.body.price, req.body.fruity, req.body.floral, req.body.nutty, req.body.earthy, 
                            req.body.herby, req.body.spicy, req.body.other, req.body.overall, req.body.notes])
      .then((result) => {
            res.sentStatus(200);
      })
      .catch((error) => {
        console.log('error on query post', error);
        res.sendStatus(500);
      })        
});

module.exports = router;
