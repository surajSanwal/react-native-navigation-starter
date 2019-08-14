const envConfig = {
  development: {
    frontEnd: "172.24.4.48:4200",
    apiServer: "172.24.5.81:3000",
    apiPath: "api",
    apiVersion: "v1",
    chatPath: "chatHub"
  },
  production: {
    frontEnd: "stagingsdei.com:4201",
    apiServer: "3.18.168.191:3000",
    apiPath: "api",
    apiVersion: "v1",
    chatPath: "chatHub"
  }
};

/* eslint-disable-next-line */
export const env = envConfig[process.env.NODE_ENV || "development"];

const running_url = env.apiServer,
  frontEndUrl = `http://${env.frontEnd}`,
  http_url = `http://${running_url}`,
  apiBase_url = `http://${running_url}/${env.apiPath}/${env.apiVersion}/`,
  chat_url = `http://${running_url}/${env.chatPath}`;

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
