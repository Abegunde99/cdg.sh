const express = require('express');
const router = express.Router();

const Url = require('../model/Url');
const schema = require('../utils/yup');

router.get('/url/:id', (req, res) => {
    // TODO: get a specific url
});
 
router.get('/:id', async (req, res, next) => {
    const { id: slug } = req.params;
    try {
        const url =await Url.findOne({ slug });
        if (url) {
            if (url.clicks === 0) {
                url.clicks = 1;
            } else {
                url.clicks++;
            }
            res.redirect(url.url);
            console.log(url);
        } else {
            res.redirect(`/?error=${slug} not found`);
        }

    } catch (error) {
        next(error);
    }

})
 
router.post('/url', async(req, res, next) => { 
    let { slug, url } = req.body;
    try {
        await schema.validate({ slug, url });
        // slug = slug.toLowerCase();
        const created = await Url.create({ slug, url });
        res.status(201).json(created);
    } catch (error) {
        next(error)
    }
});
 
router.delete('/url/:id', (req, res) => { 
     // TODO: delete a specific url
});
 
router.put('/url/:id', (req, res) => {
     // TODO: update a specific url
});

module.exports = router;