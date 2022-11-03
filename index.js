
// importing express
const express = require('express')
const mysql = require('mysql')
const os = require('os');
// const path = require('path')
const chalk = require('chalk');

const app = express()
const router = express.Router()

const port = 3000


// creating connection 
const db = mysql.createConnection({ 

    host : 'localhost', 
    user : 'root' , 
    database : 'socialthread'

})

// // connecting 
db.connect((err) => {
    if (err) { throw err }
    console.log(chalk.green('[✓] database connected '))
})

app.use('/' , express.static('public/'))
app.use('/signup', express.static('public/signUp'))
app.use(express.json({ limit : '1mb' }))

app.get('/dynamicImageList' , ( req , res ) => {
    res.sendFile('./imageList.json' , {root: __dirname})
})

app.post('/userRequest' , (req , res) => {
    res.json({
        status : 'success',
        response : req.body
    })
    data = { 
        username : 'testUser',
        date_time : req.body.date_time
    }

    var query = db.query('INSERT INTO newuserrequest SET ?' , data , (err , result) => {
        if (err) throw err ;
    }) 

})


app.use('/' , router)
app.listen(port, () => {
    console.log(chalk.green(`[+] Server is running \n[+] Address :  ${chalk.black.bgWhite(` http://${os.networkInterfaces()['Ethernet'][1]['address']}:${port}/ `)}`))
})