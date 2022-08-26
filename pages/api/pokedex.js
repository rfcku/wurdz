// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const { token } = req.query;
  console.log("Query", req.query);
  if (!token) {
    return res.status(401).json({ msg: "whut?  o_O" });
  }

  try {
    const decrypted = crypt(decodeURI(token), "decrypt").decrypted.toString();
    const pieces = decrypted.split("-");

    return res.status(200).json({ token, decrypted, pieces });
  } catch (err) {
    console.log("err", token, err);
  }

  res.status(200).json({ token, info: crypt() });
}
