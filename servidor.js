const express = require('express')
const fs = require('fs')
const app = express()
 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

global.db = require('./db');

app.post('/create', (req, res) => {
global.db.salvar(req.body)
res.send({message: "Dados salvos com sucesso!"})
})
https://github.com/amendoana/TP2-2023-amanda-.git
app.get('/read', (req, res) => {
    listabd = global.db.busqueTodas()
res.send({lista: listabd })
})

app.get('/read/:email', (req, res) => {
res.send(JSON.parse(fs.readFileSync(req.params.email+'.json')))
})
app.delete('/delete/:email', (req, res) => {
fs.unlinkSync(req.body.email+'.json')
res.send({message: "Dados apagados com sucesso!"})
})
app.put('/update/:email', (req, res) => {
fs.writeFileSync(req.body.email+'.json', JSON.stringify(req.body), {flag: 'w'})
res.send({message: "Dados atualizados com sucesso!"})
})

app.listen(3000, () => console.log(`server rodando`))