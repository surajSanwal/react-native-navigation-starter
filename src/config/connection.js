/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/config/connection.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Tuesday, August 13th 2019, 10:18:19 am
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

const envConfig = {
  development: {
    frontEnd: "3.18.168.191:3002",
    apiServer: "172.24.5.80:3000",
    apiPath: "api",
    apiVersion: "v1",
    chatPath: "chatHub"
  },
  production: {
    frontEnd: "3.18.168.191:3002",
    apiServer: "3.18.168.191:3000",
    apiPath: "api",
    apiVersion: "v1",
    chatPath: "chatHub"
  }
};

/* eslint-disable-next-line */
export const env = envConfig[process.env.NODE_ENV || "development"];
// export const env = envConfig["production"];
export const getEnv = () => {
  /* eslint-disable-next-line */
  return { env, nodeEnv: process.env.NODE_ENV };
};
const frontEndUrl = `http://${env.frontEnd}/`,
  http_url = `http://${env.apiServer}`,
  apiBase_url = `http://${env.apiServer}/${env.apiPath}/${env.apiVersion}/`,
  chat_url = `http://${env.apiServer}/${env.chatPath}`;

export default class Connection {
  static getRestUrl() {
    return apiBase_url;
  }
  static getCmsUrl() {
    return frontEndUrl;
  }
  static getBaseUrl() {
    return http_url;
  }
  static getSuccessUrl() {
    return `${apiBase_url}success.html`;
  }
  static getErrorUrl() {
    return `${apiBase_url}failure.html`;
  }

  static getChatUrl() {
    return chat_url;
  }
}
