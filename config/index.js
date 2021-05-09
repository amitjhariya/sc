require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const port =process.env.PORT
const DB_USER =process.env.DB_USER

module.exports ={ port,DB_USER }