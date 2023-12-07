const express = require('express');
const { asyncHandler } = require('../../utils');

const router = express.Router();
const db = require('../../db/models');

const { Tweet } = db;

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const tweets = await Tweet.findAll();
        res.json(tweets);
    })
);

router.post(
    '/',
    asyncHandler(async (req, res) => {
        // const { message } = req.body;
        const newTweet = await Tweet.create(req.body);
        res.json(newTweet);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const deletedTweet = await Tweet.destroy({
            where: { id: Number(id) },
        });
        res.json(deletedTweet);
    })
);

module.exports = router;
