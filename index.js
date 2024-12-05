import app from './app'
import config from './config/index'
import mongoose from 'mongoose'

(async ()=>{
try{
await mongoose.connect(config.mongo_url)
console.log("DB Connected")

app.on('error',(err)=>{

    console.log("ERROR: ",err);
    throw err;
})

const onListening = () =>{

    console.log(`Listening on ${config.mongo_url}`)
}

app.listen(config.port,onListening)

}catch(error){
console.log("ERROR ",err)
throw err
}


})()