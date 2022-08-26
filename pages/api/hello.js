// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CryptoJS from "crypto-js/";

const secret = "Secret Passphrase";

export const crypt = (value, direction = "encrypt") => {
  if (direction != "decrypt") {
    return CryptoJS.AES.encrypt(value, secret).toString();
  }
  return CryptoJS.AES.decrypt(value, secret).toString(CryptoJS.enc.Utf8);
};

export default function handler(req, res) {
  const { num } = req.body;

  const arr = [];
  for (let i = 1; i < 10; i++) {
    const encrypted = crypt(`pk-0${i}-rfcku`);
    arr.push({
      id: i,
      encrypted,
      dencrypted: crypt(encrypted.toString(), "decrypt"),
    });
  }
  console.log("AASDASD", arr);

  res.status(200).json({ arr });
}
