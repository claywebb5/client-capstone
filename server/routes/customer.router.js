
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// -------------------------- Gets classes a specific customer signed up for

router.get('/', (req, res) => {
  // console.log('req.user.id:', req.user); // Test log

  if (req.isAuthenticated()) {
    if (req.user.access_level == 2) { // If a user's authenticated and they're also a trainer, then they retrieve all the classes in which they are teaching.
      
      const trainerQueryText = `SELECT "c"."id", "c"."description", to_char("c"."date", 'FMDay') AS "week_day_name", to_char("c"."date", 'FMMM/FMDD') AS "abbreviated_date", to_char("c"."date", 'YYYY-MM-DD') AS "date",
      to_char("c"."start_time", 'FMHH:MMAM') AS "abrv_start_time","c"."start_time", to_char("c"."end_time", 'FMHH:MMAM') AS "abrv_end_time", "c"."end_time", "c"."classname", "c"."trainer_user_id",
      "user"."first_name" AS "trainer_first_name", "user"."last_name" AS "trainer_last_name",  "user"."pronouns" AS "trainer_pronouns", "user"."profile_image" AS "trainer_image"
      FROM "classes" AS "c"
      JOIN "user" ON "user"."id" = "c"."trainer_user_id"
      WHERE "c"."trainer_user_id" = $1
      ORDER BY date, to_char("start_time",'HH24');`;

      pool.query(trainerQueryText, [req.user.id])
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
    } else { // If a user is authenticated but they ARE NOT a trainer, then they retrieve all the classes that they're signed up for.
  
      const queryText = `SELECT "c"."id", "c"."description", to_char("c"."date", 'FMDay') AS "week_day_name", to_char("c"."date", 'FMMM/FMDD') AS "abbreviated_date", to_char("c"."date", 'YYYY-MM-DD') AS "date",
      to_char("c"."start_time", 'FMHH:MMAM') AS "abrv_start_time","c"."start_time", to_char("c"."end_time", 'FMHH:MMAM') AS "abrv_end_time", "c"."end_time", "c"."classname", "c"."trainer_user_id",
      "user"."first_name" AS "trainer_first_name", "user"."last_name" AS "trainer_last_name",  "user"."pronouns" AS "trainer_pronouns", "user"."profile_image" AS "trainer_image"
      FROM "classes" AS "c"
      JOIN "user" ON "user"."id" = "c"."trainer_user_id"
      JOIN "class_list" ON "c"."id" = "class_list"."class_id"
      WHERE "class_list"."user_id" = $1
      ORDER BY date, to_char("start_time",'HH24');`;
   
      pool.query(queryText, [req.user.id])
        .then((result) => {
          res.send(result.rows);
        }).catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });
    }
  } else { // If a user is not authenticated, they cannot retrieve any personal classes
    res.sendStatus(403);
  }
});


// -------------------------- Updates personal info and address of customer (PUT)
// --- SYNTAX-UPDATE : update this name
router.put('/pronouns/:id', (req, res) => {

  if (req.isAuthenticated() && req.user.id === Number(req.params.id)) {
    const queryText =
      `UPDATE "user"
          SET "pronouns" = $1, "street" = $2, "city" = $3, "state" = $4, "zip" = $5
          WHERE "user"."id" = $6;`;
    pool.query(queryText, [req.body.pronouns, req.body.street, req.body.city, req.body.state, req.body.zip, req.params.id]) // SYNTAX-UPDATE : change req.params.id to req.user.id , as it's verified by Passport
      .then((result) => {
        res.send(result.rows)
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});


//  -------------------------- cancels a customers reservation 
router.delete('/delete/:id', (req, res) => {
  // console.log('req.params.id', req.params.id);
  if (req.isAuthenticated()) {
    let queryText = `DELETE FROM class_list
        WHERE class_list.user_id = $1 and class_list.class_id = $2`;
    pool.query(queryText, [req.user.id, req.params.id])
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  } else {
    res.sendStatus(403);
  }
})

// -------------------------- Reserves a class for a customer (POST)
// SYNTAX-UPDATE : change userID verification
router.post('/reserve-class/:id', (req, res) => {
  console.log('req.body.user_id:', req.user.id);
  console.log('req.params.id:', req.params.id);


  if (req.isAuthenticated()) {
    const queryText = `INSERT into "class_list" ("class_id", "user_id")
    values ($1, $2);`
    pool.query(queryText, [req.params.id, req.user.id]) // SYNTAX-UPDATE : change req.params.id to req.user.id , as it's verified by Passport

      .then((result) => {
        res.send(result.rows)
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

// -------------------------- Get classes, search by name that includes not case sensitive text for specific user

router.get('/search/:id', (req, res) => {

  if (req.isAuthenticated()) {
    let queryText = `SELECT classes.*
  FROM "classes"
  JOIN "class_list"
  ON "classes"."id" = "class_list"."class_id"
  JOIN "user" on "class_list"."user_id" = "user"."id"
  WHERE "user"."id" = $1 AND "classes"."classname" ILIKE $2;`;
    pool.query(queryText, [req.params.id, '%' + req.body.classname + '%'])
      .then((result) => {
        res.send(result.rows)
      }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(403);
  }
});









module.exports = router;