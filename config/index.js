import dotenv from 'dotenv'

dotenv.config()

const config = {

    mongo_url : process.env.MONGODB_URL,
    port : process.env.PORT
}

export default config;