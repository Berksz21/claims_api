const express = require('express');
const router = express.Router();
const db = require('../../_helpers/dbConfig'); // Path to your dbConfig.js file

// Example route to fetch data from the database
router.get('/getData', async (req, res) => {
    try {
        const sql = 'SELECT * FROM user_tbl';
        const results = await db.query(sql);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
