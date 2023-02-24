import { Card, Grid } from '@nextui-org/react';
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
    id:number
}
const PokemonFavorite: NextPage<Props> = ({id}) => {

  const router = useRouter()

 // console.log(router)

  const handleClick = () => {
    const url = `/pokemon/${id}`
    router.push(url)
  }
  return (
    <Grid xs={6} sm={2} xl={1}  onClick={handleClick}>
                    <Card isHoverable isPressable css={ {padding:10}}>
                        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                          width='100%' height={140} />
                    </Card>
                 </Grid>
  );
}

export default PokemonFavorite;

