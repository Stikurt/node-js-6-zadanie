const { response } = require('express')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/contact', function (request, reponse){
    reponse.render('contact',{
        title: 'мой контакты',
        emailsVisible: true,
        emails: ['maionez@mycorp.com', 'ketchup@mycorp.com'],
        phome: '+1234567890',
    })
})

app.use('/', function (request, reponse){
    response.send('Главное страница')
})
app.listen(3000)
