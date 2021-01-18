// V1.0.0.0
/*
const config = require('../../config/configure')
const control = require('../../clients/javascript/corelink.lib')

// Setup
const workspace = 'Holodeck'
const protocol = 'udp'
const datatype = ['distance']


const run = async () => {
  if (await control.connect({username:'Testuser',password:'Testpassword'}, config).catch((err) => { console.log(err) })) {
    await control.createReceiver({
      workspace, protocol, type: datatype, echo: true, alert: true,
    }).catch((err) => { console.log(err) })

    control.on('receiver', async (data) => {
      await control.subscribe([data.streamID])
    })

    control.on('data', (streamID, data, timestamp) => {
      console.log(data.toString())
    })
  }
}

run()
*/

// V1.0.0.0

const config = require('../../config/configure')
const control = require('../../clients/javascript/corelink.lib')
// const inquirer = require('./lib/inquirer')

// Setup
const workspace = 'Holodeck'
const protocol = 'udp'
const datatype = 'distance'


const run = async () => {
  if (await control.connect({ username: 'Testuser', password: 'Testpassword' }, config).catch((err) => { console.log(err) })) {
    await control.createReceiver({
      workspace, protocol, type: datatype, echo: true, alert: true,
    }).catch((err) => { console.log(err) })

    control.on('receiver', async (data) => {
      await control.subscribe([data.streamID])
    })

    control.on('data', (streamID, data, header) => {
      console.log(streamID, data.toString(), JSON.stringify(header))
    })
  }
}

run()
