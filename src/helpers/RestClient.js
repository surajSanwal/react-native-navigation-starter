/* eslint-disable */

"use strict";

import Connection from "../config/connection";
import NetInfo from "@react-native-community/netinfo";
class RestClient {
  static isConnected() {
    let context = this;
    return new Promise(function(fulfill, reject) {
      NetInfo.fetch()
        .then(state => {
          if (state.isConnected) {
            fulfill(state.isConnected);
          } else {
            reject(state.isConnected);
          }
        })
        .catch(e => reject(e));
    });
  }
  static restCall(
    url,
    params,
    token = null,
    BusinessToken = null,
    type = "POST"
  ) {
    let context = this;
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          console.log(
            type,
            "call",
            JSON.stringify({ url: Connection.getResturl() + url }),
            " requestObject => ",
            JSON.stringify(params),
            " accessToken => ",
            token,
            " BusinessToken => ",
            BusinessToken
          );
          fetch(Connection.getResturl() + url, {
            method: type,
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: token ? "Bearer " + token : "",
              businessToken: BusinessToken
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              console.log("POST response*****", response);
              if (response.status === 401) {
                return {
                  status: response.status,
                  message: "Auth Token Expired"
                };
              }
              return response.json();
            })
            .then(response => {
              console.log("POST responseText*****", response);
              if (response.status === 401) {
                reject(response);
              }
              fulfill(response);
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
  static getCall(url, token = null, BusinessToken = null) {
    let context = this;
    console.log(
      "get call",
      Connection.getResturl() + url,
      token,
      BusinessToken
    );
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(Connection.getResturl() + url, {
            method: "GET",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: token ? "Bearer " + token : "",
              BusinessToken: BusinessToken
            }
          })
            .then(response => {
              console.log(" get call status*****", response);
              if (response.status === 401) {
                return {
                  status: response.status,
                  message: "Auth Token Expired"
                };
              }
              return response.json();
            })
            .then(response => {
              console.log(" get call responseText*****", response);
              if (response.status === 401) {
                reject(response);
              }
              fulfill(response);
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
  static delCall(url, token = null, BusinessToken = null) {
    let context = this;
    console.log("delete call", url, token);
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(Connection.getResturl() + url, {
            method: "Delete",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: token ? "Bearer " + token : "",
              BusinessToken: BusinessToken
            }
          })
            .then(response => {
              if (response.status === 401) {
                return {
                  status: response.status,
                  message: "Auth Token Expired"
                };
              }
              return response.json();
            })
            .then(response => {
              console.log("Del responseText*****", response);
              if (response.status === 401) {
                reject(response);
              }
              fulfill(response);
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
  static post(url, params, deviceToken = null, deviceType = null) {
    let context = this;
    console.log("login details->", url, params, deviceToken, deviceType);
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          console.log(
            "url=> ",
            Connection.getResturl() + url,
            " requestObject=> ",
            params
          );
          fetch(Connection.getResturl() + url, {
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
            .then(response => {
              if (response.status === 401) {
                return {
                  status: response.status,
                  message: "Auth Token Expired"
                };
              }
              return response.json();
            })
            .then(response => {
              console.log("POST responseText*****", response);
              if (response.status === 401) {
                reject(response);
              }
              fulfill(response);
            })
            .catch(error => {
              //   debugger;
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
}

export default RestClient;
