/* GET homepage */
const index = (req, res) => {
    res.render('funhub', { title: 'Fun Hub' });
   };

/* GET learnabcPage */
const learnabc= (req, res) => {
    res.render('lettersyoutube', { title: 'Learning ABCs by Videos' });
   };

/* GET rhymespage */
const rhymes = (req, res) => {
    res.render('rhymes', { title: 'Learn by Rhymes, Poems and Music' });
   };

/* GET cartoonspage */
const cartoons = (req, res) => {
    res.render('cartoons', { title: 'Learn with Cartoons' });
   };



   module.exports = {
    index,
    learnabc,
    rhymes,
    cartoons

   };