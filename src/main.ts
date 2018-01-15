import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './app/app.module';

const app: express.Application = express();

// configure all enviroments.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set host and port
app.set("host", "localhost");
app.set("port", 8000);

async function bootstrap() {
	const server = await NestFactory.create(ApplicationModule, app);
	await server.listen(app.get("port"));
};

bootstrap();
