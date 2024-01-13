const { Kafka, Partitioners } = require('kafkajs')
const { handleOrder } = require('./services')

const kafka = new Kafka({
  clientId: 'order-app',
  brokers: ['kafka:19092'],
  retry: {
    initialRetryTime: 2000,
    retries: 5
  }
})

const producer = kafka.producer({
  allowAutoTopicCreation: true,
  createPartitioner: Partitioners.LegacyPartitioner
})

const consumer = kafka.consumer({
  groupId: "orders-group",
  allowAutoTopicCreation: true
})

const sendOrders = async (msg)=>{
    await producer.connect()
    await producer.send({
        topic: 'ordersProducer',
        messages: [{
            value: JSON.stringify(msg)
        }]
    })
    await producer.disconnect()
}

/*Fetch each completed order and update it's status based to the 
producers response */
const fetchCompletedOrdersAndUpdate = async ()=>{
    try {
      await consumer.connect()
      await consumer.subscribe({topics: ["productsProducer"]})
      await consumer.run({
          eachMessage: async ({message}) => {
              const jsonMsg = JSON.parse(message.value)
              await handleOrder(jsonMsg)
          }
      })
    } catch (error) {               
      await consumer.disconnect()
      console.log(error.message)
    }
  }

/* Calls the above function. */
setTimeout(async ()=>{
    try {
      await fetchCompletedOrdersAndUpdate()
    } catch (error) {
      console.log(error.message)
    }
},2000)

module.exports = {
    kafkaProducer: sendOrders
}
