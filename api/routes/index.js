const bodyParser = require('body-parser')
const peopleRoute = require('./peopleRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(peopleRoute)
}