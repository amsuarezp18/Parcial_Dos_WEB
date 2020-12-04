import React, { useEffect } from "react";
import * as d3 from "d3";
import "./PokemonGraphic.css"

export default function PokemonGraphic(props) {
  const configTable = async () => {
    const data = props.pokemons;
    const width = 700;
    const height = 500;
    const margin = { top: 20, left: 80, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3
      .select("#height-table")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    let higher = 0;

    data.forEach((pokemon) => {
      if (pokemon.height > higher) {
        higher = pokemon.height;
      }
    });

    const y = d3.scaleLinear().domain([0, higher]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((pokemon) => pokemon.name))
      .range([0, iwidth])
      .padding(0.1);

    const bars = svg.selectAll("rect").data(data);

    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", "#5582B0")
      .attr("x", (pokemon) => x(pokemon.name))
      .attr("y", (pokemon) => y(pokemon.height))
      .attr("height", (pokemon) => iheight - y(pokemon.height))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`);

    svg.append("g").classed("y--axis", true).call(d3.axisLeft(y));
  };

  useEffect(() => {
    if (props.pokemons.length > 0) {
      configTable();
    }
  });

  return ( 
    <section className="container-pokemon-graphic max-w__graphic">
        <div className="bd-grid__graphic">
    <div id="height-table"></div>
    </div>
    </section>
  );
  
}
