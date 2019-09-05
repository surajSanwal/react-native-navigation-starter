/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/helpers/Socket.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Wednesday, September 4th 2019, 6:33:08 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */
import TimerMixin from "react-timer-mixin";
import reactMixin from "react-mixin";
import Connection from "../config/connection";
import io from "socket.io-client";

class Socket {
  constructor() {
    this.socket = null;
    this.navigator = null;
    this.isConnected = false;
    this.socketError = "Client/Server connection lost ";
  }

  static init = () => {
    if (!this.socket) {
      console.log("Intializing socket");
      this.socket = io(Connection.getBaseUrl(), {
        jsonp: false,
        transports: ["websocket"]
        //   query: `token=${getState().user.accessToken}`
      });
    }

    this.socket.on("connect", res => {
      console.log("Socket connected", this.socket, res);
      this.isConnected = this.socket.connected;
    });

    this.socket.on("disconnect", res => {
      console.log("Socket disconnected", this.socket, res);
      this.isConnected = this.socket.connected;
    });

    this.socket.on("reconnect", () => {
      console.log("Re-connected");
    });
  };
}
reactMixin(Socket.prototype, TimerMixin);

export default Socket;
