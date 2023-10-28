/*const EventEmitter = require('events');

// Creating an instance of Event Emitter

const celebrity = new EventEmitter();

// Regestring a listener for celebrity with one argumetn in emit

celebrity.on('race win',()=>{
    console.log('Congratulations! You are GOAT!')
})

celebrity.on('race win',()=>{
    console.log('Boo! I could\'ve done better')
})

celebrity.removeListener('race win',)

celebrity.emit('race win')*/

const http = require('http')

const req = http.request('http://www.google.com',(res)=>{
    // console.log("first console",res)
    res.on('data',(response)=>{
        console.log(`Data from Server: ${response}`)
    })

    res.on('end',()=>{
        console.log("Request Ends here")
    })
})

req.end()