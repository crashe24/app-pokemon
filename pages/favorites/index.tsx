import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { localFavorites } from '@/utils';

import { Layout } from '@/components/layouts';
import NoFavorites from '@/components/ui/NoFavorites';
import PokemonListFavorite from '@/components/pokemon/PokemonListFavorite';



const FavoritesPage: NextPage = () => {

  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemon(localFavorites.pokemons())
  }, []);
  return (
    <Layout title='Favorites'>
      {
         favoritePokemon.length === 0 
         ? ( <NoFavorites /> )
         : ( <PokemonListFavorite favoritePokemon={favoritePokemon} />)
      }
    </Layout>
  );
}

export default FavoritesPage;
