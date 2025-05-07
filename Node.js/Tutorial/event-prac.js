const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received: Name ${name} ID ${id}`)
})

customEmitter.emit('response', 'john', 34)