
import React from 'react';
import { Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import { SmallPokemon } from '@/interfaces';
import PokemonCard from './PokemonCard';

interface Props {
    pokemons: SmallPokemon[]
}

const PokemonList: NextPage<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map( pok => (
          <Grid xs={6} sm={3} md={2} xl={1} key={pok.id}>
            <PokemonCard pokemon={pok}/>
          </Grid>
        ))}
        
        
      </Grid.Container>
  )
}
export default PokemonList;
