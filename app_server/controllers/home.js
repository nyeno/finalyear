/* GET homepage */
const index = (req, res) => {
    res.render('home', { title: 'Baby Talk' });
   };

/* GET IDSpeechPage */
const infantDirected= (req, res) => {
    res.render('idspeech', { title: 'Infant-Directed Speech' });
   };

/* GET wordspage */
const words = (req, res) => {
    res.render('words', { title: 'Learn Words' });
   };

/* GET sentencespage */
const sentences = (req, res) => {
    res.render('sentences', { title: 'Learn Sentences' });
   };

/* GET progresspage */
const phonetics = (req, res) => {
    res.render('details', { title: 'Letters, Alphabets and Phonetics' });
   };


   module.exports = {
    index,
    infantDirected,
    words,
    phonetics,
    sentences

   };