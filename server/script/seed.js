'use strict';
const colors = require('colors');
const { db, User } = require('../db');

async function seed() {
    await db.sync({ force: true });
    console.log('db synced'.rainbow);

    const users = await Promise.all([
        User.create({
            email: 'cody@mail.com',
            password: '123',
            name: 'Cody',
            quittingDay: '2020-01-01',
            cigarettesPerDay: 20,
            PacketPrice: 6
        }),
        User.create({
            email: 'lisa@mail.com',
            password: '123',
            name: 'Lisa',
            quittingDay: '2020-01-01',
            cigarettesPerDay: 8,
            PacketPrice: 8
        })
    ]);
    console.log(`seeded ${users.length} users`);


}


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
    console.log('seeding...'.blue);
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        console.log('closing db connection'.green);
        await db.close();
        console.log('db connection closed'.green);
    }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
    runSeed();
}

module.exports = seed;



