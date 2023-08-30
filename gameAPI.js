const express = require('express')
const app = express()
app.use(express.json())
const port = 5200

const cors = require("cors")
app.use(cors())

const {MongoClient} = require('mongodb')
const {ObjectId} = require('mongodb')
const uri = "mongodb://localhost:2717"

const client = new MongoClient(uri);
//-----< animals >--------------------------------------------------------------
//get all
app.get('/animals', async (req,res) =>{
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('animals')
        let animalList = await db.find().toArray()
        res.send(animalList)
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
    
})

//get one by name
app.get('/animals/name/:name', async (req,res) => {
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('animals')
        const id = req.params.name
        await db.findOne({'name'  : new ObjectId(id)}).then(result =>{
            res.status(201).json(result)
        })
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
})

//get one by id
app.get('/animals/id/:id', async (req,res) => {
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('animals')
        const id = req.params.id
        await db.findOne({'id'  : new ObjectId(id)}).then(result =>{
            res.status(201).json(result)
        })
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
})
//-----< users >----------------------------------------------------------
//get all users
app.get('/users', async (req,res) =>{
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('users')
        let userList = await db.find().toArray()
        res.send(userList)
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
    
})

//insert user
app.post('/users/insert', async (req,res) =>{
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const users = database.collection('users')
        const recievedUser = req.body
        await users.insertOne(recievedUser).then(result =>{
            res.status(201).json(result)
        })
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
    
})


//update user
app.patch('/users/:name',async function (req, res) {
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('users')
        const name = req.params.name
        const updateObject = req.body
        await db.updateOne({'username'  : name}, {$set: updateObject}).then(result =>{
            res.status(201).json(result)
        })
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
})

app.get('/users/get/:name',async function (req, res) {
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('users')
        const name = req.params.name
        const updateObject = req.body
        let thU = await db.findOne({'username'  : name})
        res.send(thU)
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
})

//-----< gameData >---------------------------------------------
//get game data
app.get('/gd', async (req,res) =>{
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('gameData')
        let userList = await db.findOne()
        res.send(userList)
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
    
})

//update the gamedata
app.patch('/gd/update',async function (req, res) {
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('gameData')
        const updateObject = req.body
        await db.updateOne({'id'  : '1'}, {$set: updateObject}).then(result =>{
            res.status(201).json(result)
        })
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
})


app.patch('/liu/update',async function (req, res) {
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('loginUser')
        const updateObject = req.body
        await db.updateOne({'id'  : '1'}, {$set: updateObject}).then(result =>{
            res.status(201).json(result)
        })
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
})

app.get('/liu', async (req,res) =>{
    const client = new MongoClient(uri)
    try{
        const database = client.db('dbGame')
        const db = database.collection('loginUser')
        let userList = await db.findOne()
        res.send(userList)
    }catch(err){
        console.log(err)
    }finally{
        client.close()
    }
    
})

app.listen(port, ()=>{
    console.log('Api Listening at localhost:5200')
})