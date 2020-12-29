import { config } from 'dotenv';
import { AppServer } from './AppServer';
config();

const appServer = new AppServer();
appServer.start(8000);
