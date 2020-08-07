const db = require('./models');
db.user.create({
    firstName: 'Levin',
    lastName: 'Batallones',
    age: 25,
    email: 'levinbatallones@yahoo.com'
})