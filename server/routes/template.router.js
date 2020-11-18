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
  // POST route code here
});

module.exports = router;
