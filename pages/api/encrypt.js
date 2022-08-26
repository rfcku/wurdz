// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CryptoJS from "crypto-js/";

const secret = process.env.SECRET || "Secret Passphrase";

const encryptArray = (arr) => {
  return JSON.parse(arr).map((x) => {
    const d = crypt(x);
    const [q, w, z] = d.split("-");
    return parseInt(w);
  });
};

export const crypt = (value, direction = "encrypt") => {
  if (direction != "decrypt") {
    return CryptoJS.AES.encrypt(value, secret).toString();
  }
  return CryptoJS.AES.decrypt(value, secret).toString(CryptoJS.enc.Utf8);
};

export default function handler(req, res) {
  const { arr } = req.body;

  res.status(200).json({ arr });
}
