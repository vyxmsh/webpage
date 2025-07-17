const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull', () => {
  console.log('Please turn the motor off');
  setTimeout(() => {
        console.log('its a gentle reminder to please turn the motor off');
  }, 3000);
});

console.log("the script is running")
myEmitter.emit('Waterfull');
console.log("the script is still running")
