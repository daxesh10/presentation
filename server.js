const
    express = require('express'),
    path = require('path'),
    app = express();
   


let port = process.env.PORT || 8081
app.use(express.static(path.join(__dirname)))
//app.use(require('./client/routes')())

app.get('/',(request,response)=>{

    console.log(request.id)
    response.sendFile("/index.html")
})




app.listen(port,()=>{

    console.log('server running on. \n localhost:',port)
})