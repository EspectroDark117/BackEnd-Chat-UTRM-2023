import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import { Telegraf } from "telegraf";
import { Database } from "../config/database.js";
import { Routes } from '../routes/routes.js';
import { Server as SocketServer } from 'socket.io';
import { SocketIo } from "./socket.js";

dotenv.config();

class App {

  app = express.application;
  http = null
  routes = new Routes();
  bot = null;
  db = new Database();
  socket = new SocketIo()
  io = null;


  constructor() {
    this.initializeApp()
  }


  async initializeApp() {
    this.app = express();
    this.config()
    this.http = http.createServer(this.app)
    await this.initDatabase();
    this.io = new SocketServer(this.http, {
      cors: {
        origin: '*',
      }
    })

    await this.initSocket(this.io)
    this.routes.routes(this.app);
    this.bot = new Telegraf(process.env.BOT)
  }

  config() {
    this.app.use(
      express.urlencoded({
        extended: true
      }))
    this.app.use(express.json());
    this.app.use(cors({ origin: '*' }));
  }

  async initDatabase() {
    const connection = await this.db.connection();
    console.log(connection.message);
  }

  async initSocket(io) {
    await this.socket.SocketinitListen(io);

  }
}

export default new App();



