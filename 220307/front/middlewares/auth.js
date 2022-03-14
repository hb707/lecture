const axios = require('axios')

const Auth = async (req, res, next) => {
    const { token } = req.cookies
    const body = {
        token: token
    }
    const response = await axios.post('http://localhost:4001/api/auth', body, { 'Content-type': 'application/json' })

    if (response.data === true) {
        next()
    }
    else {
        res.render('tokenError')
    }
}

module.exports = Auth