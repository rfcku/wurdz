import { useEffect, useState } from "react";
import { crypt } from "../pages/api/hello";
const TOKEN_NAME = process.env.TOKEN_NAME || "rftoken";

const decryptArray = (arr) => {
  return JSON.parse(arr).map((x) => {
    const d = crypt(x, "decrypt");
    const [q, w, z] = d.split("-");
    return parseInt(w);
  });
};
const encryptArray = (arr) => {
  return JSON.parse(arr).map((x) => {
    const d = crypt(x);
    const [q, w, z] = d.split("-");
    return parseInt(w);
  });
};

export const useStorage = () => {
  const [captured, setCaptured] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem(TOKEN_NAME);
    if (local) {
      const decrypted = crypt(local, "decrypt");
      if (decrypted) {
        setCaptured(JSON.parse(decrypted));
      }
    }
  }, []);

  const addToLocalStorage = (id) => {
    console.log("before capture", captured);
    const cptrd = [...captured, id];
    localStorage.setItem(TOKEN_NAME, crypt(JSON.stringify(cptrd)));
    setCaptured(cptrd);
    console.log("after capture", captured);
  };

  const submitToken = (value) => {
    console.log("Submitting value: ", value);
    const request = `/api/bye?token=${encodeURIComponent(value)}`;
    console.log("Request", request);
    return fetch(request)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.species.name) {
          addToLocalStorage(data.id);
          return {
            msg: `Gotcha! ${data.species.name} !`,
            status: "success",
            code: 200,
            data,
          };
        }
      });
  };

  return {
    captured,
    submitToken,
  };
};
