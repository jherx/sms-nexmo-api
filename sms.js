// Instrucciones
// 1.- instalar node o nvm  
// 2.- npm install  actualiza y descarga los paquetes

const Nexmo = require('@vonage/server-sdk');
const utf8 = require('utf8');

const nexmo = new Nexmo({
  apiKey: '66abc054', // No modificar
  apiSecret: 'XDXGue6AZ8DYHMfo' // No modificar
});

const FROM = 'Vonage APIs';

const MESSAGE = 'Mañana hay que asistir al trabajo.';
let db = [
    '52553106018', // GERSON acompleta el numero completo
    '525565420740'
    
];

async function sendSMS() {
  for (var i = 0; i < db.length; i++) {
    try {
      let data = await nexmo.message.sendSms(FROM, db[i], MESSAGE ,  function(e){
        // console.log(e);
      });
      console.log('Success send SMS');
    } catch (e) {
      console.log(`Error send sms number ${db[i]}`, e);
    }
  }
}

sendSMS();
