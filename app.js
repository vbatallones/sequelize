//create
 const db = require('./models');
db.user.create({
    firstName: 'Levin',
    lastName: 'Batallones',
    age: 25,
    email: 'levinbatallones@yahoo.com'
}).then(data => {
    console.log(data)
});

//searching by id.
db.user.findOne({
    where: {id: 1}
}).then(user => {
    console.log(user.dataValues)
})
//searching by name
db.user.findOne({
    where: {firstName: 'Levin'}
}).then(user => {
    console.log(user)
})
//searching by email
db.user.findOne({
    where: {email: 'levinbatallones@yahoo.com'}
}).then(user => {
    console.log(user)
})
db.user.findOrCreate({
    where: {
        firstName: 'Kevin',
        lastName: 'Johnson'
    },
    defaults: {age: 40, email: 'kv@email.com'}
}).then(([user, created]) => {
    console.log(`This was created on ${created}`)
    console.log(user.dataValues)
})

let queryOne = {
    where: {
        firstName: 'John',
        lastName: 'Smith'
    },
    defaults: {age: 25, email: 'jsjs@gmail.com'}
};

db.user.findOrCreate (queryOne).then(([user, created]) => {
    console.log(created);
    console.log(user.dataValues)
})

db.user.findAll().then(user => {
    user.forEach(u => {
        
        console.log(u.firstName+ " " +u.lastName)
    });
})