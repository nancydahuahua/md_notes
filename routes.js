const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')({})
const db = pgp(
    {
        connectionString: "postgres://miainkgyhpgcwz:6394a0ce3edfe47ac4876e3da7057602e715270fe7c25d848170102d815c6ceb@ec2-3-212-143-188.compute-1.amazonaws.com:5432/d7bks4aoa3d3kt",
        ssl: {
            rejectUnauthorized: false
        }
    }
)

// Post - CREATE
router.post('/create', async (req, res) => {
    let {
        id,
        title,
        createdOn,
        lastUpdatedOn,
        body
    } = req.body;
    await db.none("INSERT INTO notes (id, title, created_on, last_updated_on, body) VALUES ($1, $2, $3, $4,$5)", [id, title, createdOn, lastUpdatedOn, body])
    res.status(200)
    res.send('ok')
})

module.exports = router;