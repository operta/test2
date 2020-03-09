const Functions = require('./functions')

const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    database: 'test',
    port: 5431,
    user: '',
    password: ''
});


const getCompanies = (request, response) => {
    pool.query('SELECT * FROM company', (error, results) => {
        if (error) {
            throw error
        }

        Functions.algo();

        if (results.rows.length === 0) {
            response.status(404).send('Not found');
        } else {
            response.status(200).json(results.rows);
        }

    })
};

const getCompany = (req, res) => {
    const companyId = req.params.id;
    pool.query(`SELECT * FROM company WHERE id = $1`, [companyId], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length === 0) {
            res.status(404).send('Not found');
        } else {
            res.status(200).json(results.rows[0]);
        }

    })
}

const createCompanies = (request, response) => {
    companies = request.body;
    companies.forEach(c => {
        pool.query(`INSERT INTO request (equation, age) VALUES ('2+3-4=0', $1)`, [c['age']], (error, results) => {
            if (error) {
                throw error
            }

        })
    })
    response.status(201).send(`Companies saved`);
}

const createCompany = (request, response) => {
    const {age} = request.body;


    pool.query(`INSERT INTO request (equation, age) VALUES ('2+3-4=0', $1)`, [age], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}


module.exports = {
    getCompanies,
    createCompany,
    createCompanies,
    getCompany
};
