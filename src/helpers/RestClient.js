/* eslint-disable */

"use strict";

import Connection from "../config/connection";
import NetInfo from "@react-native-community/netinfo";
class RestClient {
  static isConnected = () => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch()
        .then(state => {
          if (state.isConnected) {
            resolve(state.isConnected);
          } else {
            reject(state.isConnected);
          }
        })
        .catch(e => reject(e));
    });
  };
  static restCall = (url, params, token = null, type = "POST") => {
    return new Promise((resolve, reject) => {
      this.isConnected()
        .then(() => {
          console.log(
            type,
            "call",
            JSON.stringify({ url: Connection.getRestUrl() + url }),
            " requestObject => ",
            JSON.stringify(params),
            " accessToken => ",
            token
          );
          fetch(Connection.getRestUrl() + url, {
            method: type,
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: token ? "Bearer " + token : ""
            },
            body: JSON.stringify(params)
          })
            .then(response => response.json())
            .then(response => {
              console.log(`****** ${type} response*****`, response);
              if (response.statusCode === 200) resolve(response.data);
              else reject(response);
            })
            .catch(error => {
              reject({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          reject({
            message: "Please check your internet connectivity."
          });
        });
    });
  };
  static getCall = (url, token = null) => {
    console.log("get call", Connection.getRestUrl() + url, token);
    return new Promise((resolve, reject) => {
      this.isConnected()
        .then(() => {
          fetch(Connection.getRestUrl() + url, {
            method: "GET",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: token ? "Bearer " + token : ""
            }
          })
            .then(response => response.json())
            .then(response => {
              console.log(" get call responseText*****", response);
              if (response.statusCode === 200) resolve(response.data);
              else reject(response);
            })
            .catch(error => {
              reject({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          reject({
            message: "Please check your internet connectivity."
          });
        });
    });
  };
  static delCall = (url, token = null) => {
    console.log("delete call", url, token);
    return new Promise((resolve, reject) => {
      this.isConnected()
        .then(() => {
          fetch(Connection.getRestUrl() + url, {
            method: "Delete",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: token ? "Bearer " + token : ""
            }
          })
            .then(response => response.json())
            .then(response => {
              console.log("Del responseText*****", response);
              if (response.statusCode === 200) resolve(response.data);
              else reject(response);
            })
            .catch(error => {
              reject({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          reject({
            message: "Please check your internet connectivity."
          });
        });
    });
  };
  static post = (url, params, deviceToken = null, deviceType = null) => {
    console.log("login details->", url, params, deviceToken, deviceType);
    return new Promise((resolve, reject) => {
      this.isConnected()
        .then(() => {
          console.log(
            "url=> ",
            Connection.getRestUrl() + url,
            " requestObject=> ",
            params
          );
          fetch(Connection.getRestUrl() + url, {
            method: "POST",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              "device-type": deviceType,
              "device-token": deviceToken
            },
            body: JSON.stringify(params)
          })
            .then(response => response.json())
            .then(response => {
              console.log("POST responseText*****", response);
              if (response.statusCode === 200) resolve(response.data);
              else reject(response);
            })
            .catch(error => {
              //   debugger;
              reject({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          reject({
            message: "Please check your internet connectivity."
          });
        });
    });
  };
}

export default RestClient;
