import React from "react";

export default function PokemonList(props) {

  return (
    <tr>
      <th scope="row">{props.pokemon.id}</th>
      <td>
        <img
          className="card-img-pokemon"
          src={props.pokemon.ThumbnailImage}
          alt={props.pokemon.name}
        />
      </td>
      <td>{props.pokemon.name}</td>
      <td>{props.pokemon.description}</td>
      <td>{props.pokemon.height}</td>
      <td>{props.pokemon.weight}</td>
      <td>
      {props.pokemon.type.map((po) => {
          return (
              <div key={"id"+po}>
                <span 
                 className="badge badge-secondary">{po}</span>
              </div>
          ); 
      })} 
      </td>
    </tr>
  );
}
