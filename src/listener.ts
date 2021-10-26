import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const server = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://lfcjutnp:JsyNB5jFoJ_HW4y4nZyXPqgtlO8B5tDT@poodle.rmq2.cloudamqp.com/lfcjutnp'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });

    server.listen();
}
bootstrap();
