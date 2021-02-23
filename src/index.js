const fs = require('fs');
const { Rabbit  }  = require('./Rabbit')

fs.readFile('./queues.json', 'utf8', (err, data) => {
  const conf = JSON.parse(data);
  const server = conf.server;
  conf.queues.map((queue) => {
    console.log(queue);
    Rabbit(conf.server, conf.exchange, queue);
  });
  console.log('Press Ctrl + C to exit after queues created.');
});
