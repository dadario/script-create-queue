const amqp = require('amqplib/callback_api');

const Rabbit = (server, exchange, queue) => {

  amqp.connect(server, function(error0, connection) {
    if (error0) throw error0;

    connection.createChannel(function(error1, channel) {
      if (error1) throw error1;

      channel.assertQueue(queue.name, { durable: true });
      // channel.bindQueue(queue.name, exchange, queue.bind, { durable: true });
      channel.prefetch(1);
      console.log(" [*] Queue create %s.", queue);
    });
  });
}

exports.Rabbit = Rabbit;
