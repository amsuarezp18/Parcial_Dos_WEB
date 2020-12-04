import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import { FormattedMessage } from "react-intl";
import PokemonGraphic from "./PokemonGraphic";
import PokemonList from "./PokemonList";

export default function Pokemon(props) {
  const [locale, setLocale] = useState(props.lang);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("pokemon") === "") {
        setMessages("Loading...");
      } else {
        setMessages(JSON.parse(localStorage.getItem("pokemon")));
      }
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    let url = "";
    if (locale === "en") {
      url =
        "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json";
    } else {
      url =
        "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json";
    }
    const resp = await fetch(url);
    const data = await resp.json();

    setMessages(data);
    localStorage.setItem("pokemon", JSON.stringify(data));
  };

  return (
    <main>
      <section className="container-pokemon-table max-w__table">
        <div className="bd-grid__table">
          <table className="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <FormattedMessage
                    id="table.image"
                    defaultMessage="Image"
                    description="src of image"
                    values={{ what: "react-intl" }}
                  />
                </th>
                <th scope="col">
                  <FormattedMessage
                    id="table.name"
                    defaultMessage="Name"
                    description="name of pokemon"
                    values={{ what: "react-intl" }}
                  />
                </th>
                <th scope="col">
                  <FormattedMessage
                    id="table.description"
                    defaultMessage="Description"
                    description="description of pokemon"
                    values={{ what: "react-intl" }}
                  />
                </th>
                <th scope="col">
                  <FormattedMessage
                    id="table.height"
                    defaultMessage="Height"
                    description="height of pokemon"
                    values={{ what: "react-intl" }}
                  />
                </th>
                <th scope="col">
                  <FormattedMessage
                    id="table.weight"
                    defaultMessage="Weight"
                    description="weight of pokemon"
                    values={{ what: "react-intl" }}
                  />
                </th>
                <th scope="col">
                  <FormattedMessage
                    id="table.type"
                    defaultMessage="Type"
                    description="type of pokemon"
                    values={{ what: "react-intl" }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
                {messages.map((po) => {
                return <PokemonList pokemon={po} key={po.id} />;
              })} 
            </tbody>
          </table>
        </div>
      </section>
      <section>
      <PokemonGraphic
         pokemons={messages} 
         />
      </section>
    </main>
  );
}
