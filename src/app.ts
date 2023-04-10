import express, { Express } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { routes } from './routes';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(express.static('public'));
    this.app.set('public', path.join(__dirname, '../public'));
    this.app.set('view engine', 'ejs');
  }

  private routes(): void {
    this.app.use('/', routes);
  }
}

export default new App().app;
