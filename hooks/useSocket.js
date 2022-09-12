import { useSession } from "next-auth/react";
import SocketIo from "socket.io-client";

export default function socketInit() {
  console.log("Socket init");
  const { data: session } = useSession();
  console.log("Socket Sessions", session);
  const socket = SocketIo(`${process.env.SOCKET_URI}`, {
    transports: ["websocket"],
    withCredentials: true,
    query: {
      token: (session && session.accessToken) || "guest",
    },
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("connect", (conn) => {
    const m = "Websocket connection established!";

    socket.on("event", (data) => {
      console.log("new event", data);
    });

    socket.on("message", (data) => {
      console.log("Message", data);
      const { msg } = data;
      const m1 = `Received message: ${msg}`;
    });
    socket.on("event", (data) => {
      console.log("new event", data);
    });
  });

  return {
    socket,
  };
}
