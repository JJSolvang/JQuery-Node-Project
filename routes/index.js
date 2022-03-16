var express = require('express');
var router = express.Router();

let selectedType = "";

// define a constructor to create note objects
let NoteObject = function (pTitle, pYear, pType) {
    this.title = pTitle;
    this.year = pYear;
    this.type = pType;
}

let noteArray = [];
let favNoteArray = [];
noteArray.push(new NoteObject("Destiny", "2014", "FPS"));
noteArray.push(new NoteObject("Destiny 2", "2017", "FPS"));
noteArray.push(new NoteObject("Portal 2", "2011", "FPS"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

/* GET list page. */
router.get('/list', (req, res) => {
  res.render('/list', {
      noteArray: noteArray
  })
})

/* GET list page. */
router.get('/list', (req, res) => {
  res.render('list', {
      favNoteArray: favNoteArray
  })
})

/* GET favlist page. */
router.get('/favorites', (req, res) => {
  res.render('favorites', {
      favNoteArray: favNoteArray
  })
})

module.exports = router;
