// V1.0.0.0

const config = require('../../config/configure')
const corelink = require('../../clients/javascript/corelink.lib')

// Setup
const workspace = 'Holodeck'
const protocol = 'udp'
const datatype = 'distance'

corelink.debug = true

function randomdata() {
  const mydata = Math.random().toString()
  console.log(mydata)
  return mydata
}
// function sleep(milliseconds) {
//   const date = Date.now()
//   let currentDate = null
//   do {
//     currentDate = Date.now()
//   } while (currentDate - date < milliseconds)
// }

const run = async () => {
  let sender
  if (await corelink.connect({ username: 'Testuser', password: 'Testpassword' }, config).catch((err) => { console.log(err) })) {
    sender = await corelink.createSender({
      workspace,
      protocol,
      type: datatype,
      metadata: { name: 'Random Generator' },
    }).catch((err) => { console.log(err) })
  }
  setInterval(() => corelink.send(sender, Buffer.from(randomdata())), 1000)
}

run()


// V1.0.0.1
/*
const config = require('../../config/configure')
//const inquirer = require('./lib/inquirer')
const corelink = require('../../clients/javascript/corelink.lib')
console.log(config)
// Setup
const workspace = 'Holodeck'
const protocol = 'udp'
const datatype = 'distance'

corelink.debug = false

const run = async () => {
  let sender
  if (await corelink.connect({username:'Testuser',password:'Testpassword'}, config).catch((err) => { console.log(err) })) {
    sender = await corelink.createSender({
      workspace,
      protocol,
      type: datatype,
    }).catch((err) => { console.log(err) })
  }

  let num = 0
  let datastring = ''

  function sendPing() {
    const data1 = Math.random().toString()
    datastring = data1
    corelink.send(sender, Buffer.from(datastring))
    console.log(datastring)
    //num += 1
    //if (num === 10) num = 0
    setTimeout(sendPing, 1000)
  }
  setTimeout(sendPing, 1000)
}

run()
*/
