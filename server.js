const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));


    app.get('/', (req, res) =>{
        res.sendFile(__dirname + "/public/Home_page.html"); 
    });
    
    app.get('/informacoes', (req, res) => {
        res.sendFile(__dirname + "/public/informações.html"); 
    });
    app.get('/emprestimo', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.sendFile(__dirname + "/public/Emprestimo.html"); 

    });

app.listen(3001, () =>{
    console.log("servidor de pe em http://localhost:3001")

})