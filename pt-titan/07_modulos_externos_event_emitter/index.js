import { EventEmitter } from 'events'; 
const eventEmitter = new EventEmitter();

// Não entendi o porque disso ser tão importante, ja que uma funcao pode fazer isso

eventEmitter.on('event', (message) => {
    console.log('Durante');
});

console.log('Antes');

eventEmitter.emit("event");

console.log("Depois");