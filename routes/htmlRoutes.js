app.get("/", (req, res) => {
  db.workouts.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});