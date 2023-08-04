//Still trying to figure out models in JS
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

class Cat {

    static method() {

    }
}
