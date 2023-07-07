
const db = require("./models");

db.sequelize.sync({force: true, alter: true}).then(() => {
    console.log('Connected to Databse');
}).catch(err=>{
    console.log(err)
});
