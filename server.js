const express = require('express')
const app = express()
const PORT = 8000

const pets = {
    'ocean':{
        'animal': 'dog',
        'type': 'American Bully mix',
        'color': 'tan',
        'size': 'large',
        'age': '6 months'
    },
    'nugget':{
        'animal': 'cat',
        'type': 'Domestic short hair',
        'color': 'black',
        'size': 'small',
        'age': '1.5 years'
    },
    'od':{
        'animal': 'dog',
        'type': 'Chihuahua mix',
        'color': 'tan',
        'size': 'small',
        'age': '10 years'
    },
    'unknown':{
        'animal': 'unknown',
        'type': 'unknown',
        'color': 'unknown',
        'size': 'unknown',
        'age': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const petName = request.params.name.toLowerCase()
    if(pets[petName]){
        response.json(pets[petName])
    }else{
        response.json(rappers['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})