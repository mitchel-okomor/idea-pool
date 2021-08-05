'use strict';
import fs from 'fs';
import path from 'path';
require('dotenv').config();

const pathToPubKey = path.join(__dirname, '/crypto/', 'id_rsa_pub.pem');
const pathToPrivKey = path.join(__dirname, '/crypto/', 'id_rsa_priv.pem');

const PUB_KEY = fs.readFileSync(pathToPubKey, 'utf8');
const PRIV_KEY = fs.readFileSync(pathToPrivKey, 'utf8');

const baseUrl = process.env.BASE_URL;

global.config = {
  common: {
    env: process.env.NODE_ENV || 'development',
    appName: process.env.APP_NAME,
    baseUrl: baseUrl,
    apiUrl: process.env.API_URL,
    clientUrl: process.env.CLIENT_URL,
    userGroups: { admin: 1, client: 2 },

    APP_PUB_KEY: PUB_KEY,
    APP_PRIV_KEY: PRIV_KEY,
  },
  development: {},
};

export default global.config;
