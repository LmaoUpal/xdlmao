

const clientBuilder = require('./config');
const clientBuilder = require('./config');

let clientArray = []

const configsArray = [{

login: "davalka257",
password: "Kot20032010",
sharedSecret: "PCZDXkdssgWEZKljixu5pPeh7lo=",
games: [
730, // CS:GO
252490 //RUST
]
},
{
login: "shit_zo",
password: "Newxdacclmao296",
sharedSecret: "SqrTySRUPahFAZREpWlpAYCBZzA=",
games: [
730, // CS:GO
381210 //DBD
]
}]


console.log('Bot number: ' + configsArray.length);

for (let config of configsArray) {

let client = clientBuilder.execute(config);
client.doLogin();
clientArray.push(client);
}
console.log('Running ' + configsArray.length + ' bots.');


