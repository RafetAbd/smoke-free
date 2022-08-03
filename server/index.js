const colors = require('colors');
const { db } = require('./db');
const app = require('./app');
const PORT = process.env.PORT || 3000;
const seed = require('./script/seed');

const init = async () => {
    try {
        if ( process.env.SEED === 'true' ) {
            await seed();
        } else {
            await db.sync();
            console.log('db synced'.rainbow);
        }

        // start the server
        app.listen(PORT, () => {
            console.log(`Listening on http://localhost:${PORT}`.cyan);
        }
        );
    } catch (ex) {
        console.log(ex);
    }
}

init();

