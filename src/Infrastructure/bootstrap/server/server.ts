import express, { Application } from 'express';
import morgan from 'morgan';
import router from '../../routes/index.routes';
import '../config/database.mongo';

export default class Server {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(express.json())
    this.app.use(morgan('dev'));
    this.app.use(router);
  }

  static init(port: number) {
    return new Server(port);
  }

  start(cb: VoidFunction) {
    this.app.listen(this.port, cb);
  }
}