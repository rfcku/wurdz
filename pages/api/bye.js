// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { crypt } from "./hello";
import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

export default function handler(req, res) {
  const { token } = req.query;
  console.log("Query", req.query);
  if (!token) {
    return res.status(401).json({ msg: "whut?  o_O" });
  }

  try {
    const decrypted = crypt(decodeURI(token), "decrypt");
    const [q, id, z] = decrypted.split("-");
    if (q && id && z) {
      console.log("Is Three");

      return P.getPokemonByName(parseInt(id))
        .then((response) => {
          console.log(response.sprites);
          const { sprites, species } = response;
          return res.status(200).json({
            id,
            token,
            sprites,
            species,
          });
        })
        .catch((error) => {
          console.log("There was an ERROR: ", error);
          return res.status(400).json({ error, token, decrypted, pieces });
        });
    }
    return res.status(400).json({ token, decrypted, msg: "malformed" });
  } catch (err) {
    console.log("err", token, err);
    return res.status(400).json({ err, msg: "error" });
  }
}
