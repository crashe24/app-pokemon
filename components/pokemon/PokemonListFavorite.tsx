import { Grid } from "@nextui-org/react";
import PokemonFavorite from "./PokemonFavorite";
import { NextPage } from 'next';

interface Props {
    favoritePokemon: number[]
}
const PokemonListFavorite: NextPage<Props> = ({favoritePokemon}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    { favoritePokemon.map( id =>(
       <PokemonFavorite key={id} id={id} />
    ))}
</Grid.Container>
  );
}

export default PokemonListFavorite;
