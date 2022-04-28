const express = require('express')
const app = express() //La constante app est l'instanciation d'un objet Express, qui va contenir notre serveur ainsi que les méthodes dont nous aurons besoin pour le faire fonctionner
app.use(express.json())
port = 5000

app.listen(port, () => {
    console.log(`server running on port ${port}\nhttp://localhost:${port}`)
})

app.get('/', (req,res) => {
    res.send("Hello world!")
})

var Tutorials = ["Arrays","Queues","Stacks"]
function tuto(){
    let TutorialList = []
    for(let i = 0; i < Tutorials.length; i++){ 
        TutorialList += Tutorials[i] +","
        }
        return TutorialList
}

app.get('/Tutorial', (req,res) => {
    for(let i = 0; i < Tutorials.length; i++){ 
        res.status(200).send(tuto())
        }
})

function tutoByid(id){
    return Tutorials[id]
}
app.get('/Tutorials/:id', (req,res) => {
    res.status(200).send(tutoByid(req.params.id))
})

function addTuto(tuto){
    Tutorials.push(tuto)
}

app.post('/addTuto', (req,res) => {
    addTuto(req.body.newTuto)
    res.status(200).send(`${req.body.newTuto} successfully added!`)
})

function deleteTuto(id){
    Tutorials.splice(id, 1);
}

app.delete('/deleteTuto/:id', (req,res) =>{
    deleteTuto(req.params.id)
    res.status(200).send(`successfully deleted!`)

})