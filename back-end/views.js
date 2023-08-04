//Haven't figured out how to move this to a new file without creating a circular reference
const db = require("knex")({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'admin',
        database: 'mummies'
    }
});


//Define view functions below
function homeJs(req, res) {
    res.send("Second Route");
}

function defaultRoute(req, res) {
    res.send("Home Route")
}


//Get all the Entertainers
async function getAllEntertainers(req, res) {
    try {
        let results = await db("entertainers");
        if (results.length >= 1) {
            res.json(results);
        } else {
            res.status(404).json({ message: "No entertainers found." });
        }
    } catch (error) {
        console.error("Error retrieving entertainers:", error);
        res.status(500).json({ error: "An error occurred while retrieving entertainers." });
    }
}


//Get Entertainer By ID
async function getEntertainer(req, res) {
    try {
        let result = await db("entertainers").where("EntertainerID", req.params.id);
        if (result.length >= 1) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json("Entertainer Not Found");
        }
    } catch (err) {
        res.json(err);
    }
}

//Add entertainer
async function addEntertainer(req, res) {
    try {
        let result = await db("entertainers").insert({
            DateEntered: req.body.DateEntered,
            EntCity: req.body.EntCity,
            EntEMailAddress: req.body.EntEmailAddress,
            EntSSN: req.body.EntSsn,
            EntStageName: req.body.EntStageName,
            EntState: req.body.EntState,
            EntStreetAddress: req.body.EntStreetAddress,
            EntWebPage: req.body.EntWebPage,
            EntZipCode: req.body.EntZipCode,
        });
        res.status(201).json(result);
    } catch (err) {
        res.send(err)
    }
}

//Edit based on id
async function editEntertainer(req, res) {
    try {
        let result = await db("entertainers").where("EntertainerID", req.params.id).update({
            DateEntered: req.body.DateEntered,
            EntCity: req.body.EntCity,
            EntEMailAddress: req.body.EntEMailAddress,
            EntSSN: req.body.EntSSN,
            EntStageName: req.body.EntStageName,
            EntState: req.body.EntState,
            EntStreetAddress: req.body.EntStreetAddress,
            EntWebPage: req.body.EntWebPage,
            EntZipCode: req.body.EntZipCode,
        });
        res.status(204).json(result);
    } catch (err) {
        res.status(422).json(err);
    }
}


async function deleteEntertainer(req, res) {
    try {
        let result = await db("entertainers").where("EntertainerID", req.params.id).del();
        res.status(204).json("Successfully Deleted");

    } catch (err) {
        res.status(403).json(err);
    }
}


module.exports = { homeJs, defaultRoute, getAllEntertainers, getEntertainer, addEntertainer, editEntertainer, deleteEntertainer }

