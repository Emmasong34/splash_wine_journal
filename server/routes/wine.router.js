const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//gets the data from the "wine" table to display on the DOM
router.get('/', (req, res) => {
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

//gets the data for a selected wine id from the "wine" table to display on the DOM
router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "wine" WHERE "wine"."id" = ${req.params.id};`
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in get request for wine details', error);
    res.sendStatus(500);
  })
})

//client may add a wine to the "wine" table using this route, sanitized for security
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "wine" ("user_id", "winery", "variety", "name", "rating", "year", "price", 
                        "fruity", "floral", "nutty", "earthy", "herby", "spicy", "other", "overall", "notes")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`;
    console.log(req.body);
    pool.query(queryText, [req.user.id, req.body.newWine.winery, req.body.newWine.variety, req.body.newWine.name, 
                            req.body.newWine.rating, req.body.newWine.year, req.body.newWine.price, req.body.newWine.fruity, 
                            req.body.newWine.floral, req.body.newWine.nutty, req.body.newWine.earthy, 
                            req.body.newWine.herby, req.body.newWine.spicy, req.body.newWine.other, 
                            req.body.newWine.overall, req.body.newWine.notes])
      .then((result) => {
            res.sendStatus(200);
      })
      .catch((error) => {
        console.log('error on query post', error);
        res.sendStatus(500);
      })        
});

//client may update fields previously entered into the "wine" table, sanitized for security
router.put('/:id', (req, res) => {
  console.log('in PUT function', req.params.id);
  console.log(req.body);
  id = req.params.id
  let queryText = `UPDATE "wine" SET 
  user_id = $1, winery = $2, variety = $3, name = $4, rating = $5, year = $6, price = $7, fruity = $8, 
  floral = $9, nutty = $10, earthy = $11, herby = $12, spicy = $13, other = $14, overall = $15, notes = $16 WHERE id=$17;`;
  pool.query(queryText, [req.user.id, req.body.winery, req.body.variety, req.body.name, 
    req.body.rating, req.body.year, req.body.price, req.body.fruity, 
    req.body.floral, req.body.nutty, req.body.earthy, 
    req.body.herby, req.body.spicy, req.body.other, 
    req.body.overall, req.body.notes, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in router.put', error);
      res.sendStatus(500);
    })
})

//client may delete a wine from the "wine" table, selected by wine id
router.delete('/:id', (req, res) => {
  if(req.isAuthenticated()) {
  const queryText = `DELETE FROM "wine" WHERE "id" = $1`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error on delete from server', error);
      res.sendStatus(500);
    })
  }else {
    alert ("not authorized to delete")
  }
})



module.exports = router;
