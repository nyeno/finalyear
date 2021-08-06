/* GET progresspage */
const progress = (req, res) => {
    res.render('index', { title: 'Progress' });
   };

   module.exports = {
    progress
   };