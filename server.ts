import { opine, json } from "https://deno.land/x/opine@1.3.4/mod.ts";

const app = opine();

app.use(json());

app.get("/", async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 893);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
  );
  const pokemonData = await response.json();
  //   console.log(pokemonData);
  res.send(pokemonData);
});

app.listen(3000, () =>
  console.log("server has started on http://localhost:3000 🚀")
);
