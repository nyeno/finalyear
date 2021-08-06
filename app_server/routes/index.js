var express = require('express');
var router = express.Router();
const ctrlHome = require('../controllers/home');
const ctrlFunhub = require('../controllers/funhub');
const ctrlProgress = require('../controllers/progress');


 /* GET homepage. */
 router.get('/', ctrlHome.index);
/* Details on homepage*/

 router.get('/infantDirected', ctrlHome.infantDirected);
 router.get('/sentences', ctrlHome.sentences);
 router.get('/words', ctrlHome.words);
 router.get('/phonetics', ctrlHome.phonetics);

/*Details on funhub*/
 router.get('/funhub', ctrlFunhub.index);
 router.get('/funhub/learnabc', ctrlFunhub.learnabc);
 router.get('/funhub/rhymes', ctrlFunhub.rhymes);
 router.get('/funhub/cartoons', ctrlFunhub.cartoons);

 router.get('/progress', ctrlProgress.progress);

module.exports = router;
