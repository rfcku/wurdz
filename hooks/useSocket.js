/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// import { useEffect } from 'react';
import { useSession } from "next-auth/react";
import SocketIo from "socket.io-client";

export default function socketInit() {
  console.log("SOCKET INIT");
  const { data: session } = useSession();
  console.log("Socket Sessions", session);
  const socket = SocketIo("http://localhost:4000", {
    transports: ["websocket"],
    withCredentials: true,
    query: {
      token: (session && session.accessToken) || "guest",
    },
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
    enqueueSnackbar("Socket Connection Error", {
      variant: "error",
      persist: false,
    });
  });
  socket.on("connect", (conn) => {
    console.log("THIS CONNECTION", socket);
    const m = "Websocket connection established!";
    enqueueSnackbar(m, {
      variant: "success",
      persist: false,
      autoHideDuration: 1000,
    });

    socket.on("event", (data) => {
      console.log("new event", data);
    });

    socket.on("message", (data) => {
      console.log("Message", data);
      const { msg } = data;
      const m1 = `Received message: ${msg}`;
      enqueueSnackbar(m1, {
        variant: "success",
        persist: false,
        autoHideDuration: 3000,
      });
    });
    socket.on("event", (data) => {
      console.log("new event", data);
    });
  });

  const callMath = () => {
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);

    socket.emit(
      "call",
      "math.add",
      {
        a,
        b,
      },
      (err, res) => {
        if (err) {
          enqueueSnackbar(JSON.stringify(err), {
            variant: "error",
            persist: false,
            autoHideDuration: 3000,
          });
        } else {
          enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
            variant: "success",
            persist: false,
            autoHideDuration: 3000,
          });
        }
      }
    );
  };
  const login = () => {
    console.log("LOGING IN");
    socket.emit(
      "call",
      "users.login",
      { user: "tiaod", password: "pass" },
      (err, res) => {
        console.log("Socket Response", err, res);
        if (err) {
          enqueueSnackbar(JSON.stringify(err), {
            variant: "error",
            persist: false,
          });
        } else {
          enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
            variant: "success",
            persist: false,
          });
        }
      }
    );
  };
  const getUserInfo = () => {
    socket.emit("call", "users.getUserInfo", (err, res) => {
      if (err) {
        enqueueSnackbar(JSON.stringify(err), {
          variant: "error",
          persist: false,
        });
      } else {
        enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
          variant: "success",
          persist: false,
        });
      }
    });
  };

  const joinRoom = () => {
    socket.emit("call", "rooms.join", { join: "testRoom" }, (err, res) => {
      if (err) {
        enqueueSnackbar(JSON.stringify(err), {
          variant: "error",
          persist: false,
        });
      } else {
        enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
          variant: "success",
          persist: false,
        });
      }
    });
  };
  const leaveRoom = () => {
    socket.emit("call", "rooms.leave", { leave: "testRoom" }, (err, res) => {
      if (err) {
        enqueueSnackbar(JSON.stringify(err), {
          variant: "error",
          persist: false,
        });
      } else {
        enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
          variant: "success",
          persist: false,
        });
      }
    });
  };
  const getRooms = () => {
    socket.emit("call", "rooms.get", (err, res) => {
      if (err) {
        enqueueSnackbar(JSON.stringify(err), {
          variant: "error",
          persist: false,
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
          variant: "success",
          persist: false,
          autoHideDuration: 3000,
        });
      }
    });
  };

  const message = (msg) => {
    console.log("Emmitting");
    socket.emit("call", "say.message", { msg }, (err, res) => {
      if (err) {
        enqueueSnackbar(JSON.stringify(err), {
          variant: "error",
          persist: false,
          autoHideDuration: 1000,
        });
      } else {
        enqueueSnackbar(`${JSON.stringify(res, null, 4)}`, {
          variant: "success",
          persist: false,
          autoHideDuration: 1000,
        });
      }
    });
  };

  return {
    callMath,
    login,
    getUserInfo,
    joinRoom,
    leaveRoom,
    getRooms,
    message,
  };
}
