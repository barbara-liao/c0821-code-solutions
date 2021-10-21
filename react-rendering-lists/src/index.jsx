import React from 'react';
import ReactDOM from 'react-dom';

function ListPokemon(props) {
  return <li>{props.value}</li>;
}

function PokemonList(props) {
  const pokedex = props.pokedex;
  const pokemon = pokedex.map(function (pokename) { return pokename.name; });
  const listPokemon = pokemon.map(name =>
  <ListPokemon key={name.toString()} value={name} />
  );
  return (
    <ul>
      {listPokemon}
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <PokemonList pokedex={pokedex} />,
  document.getElementById('root')
);
