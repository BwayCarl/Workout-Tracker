const { Workout } = require("../models");
var db = require("../models");
const path = require ("path");

module.exports = function(app) {

    //GET index HTML page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "./public/index.html"));
    });

    // GET stats HTML page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/stats.html"));
    });

    //GET exercise HTML page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
    });

    // GET all workouts
    app.get("/all", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });
      
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

      //POST create a new workout
      app.post("/api/workouts", (req, res) => {
          db.Workout.create({}).then(data => {
            console.log("data", data);
            res.json(data);
          })
            .catch(err => {
              res.json(err);
            });
        })

      // UPDATE a workout
      app.put("/api/workouts/:id",(req, res) => {
        Workout.findOneAndUpdate(
          { _id: req.params.id }, 
          { $push: { exercises: req.body  } },
        )
        .then(data=>{
          console.log("data", data)
          res.json(data)
        })
        .catch(err => {
          res.json(err);
        });        
     });
}