const mongoose =require('mongoose')
mongoose.connect(process.env.MONGOURL || "mongodb+srv://harissh:Harissh2004@in-aws.70jym.mongodb.net/test?retryWrites=true&w=majority&appName=In-AWS")
const connection =mongoose.connection;
connection.on('connected',()=> console.log("DB Connected"))
connection.on('error',()=> console.log("DB Error"))
module.exports = mongoose

