import React, {useState} from 'react';
import { Layout } from '@/components/layouts';
import { GetStaticProps, GetStaticPaths , NextPage } from 'next';
import { Pokemon } from '@/interfaces';
import { pokeApi } from "@/api";
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { getPokemonInfo, localFavorites  } from '@/utils';

import confetti from 'canvas-confetti'

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existPokemonInFavorites(pokemon.id))
  
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if(isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount:100,
      spread: 360,
      angle: -100,
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
      origin: { x:1, y: 0 }
    })
  }

  
 return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop:'5px'}} gap={2}>
            <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding:'30px'}} >
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt= {pokemon.name}
                            width='100%'
                            height={200} />
                        </Card.Body>
                    </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display:'flex', 
                                        justifyContent:'space-between'}} >
                                <Text h1 transform='capitalize'>{pokemon.name}</Text>
                                <Button color='gradient' 
                                  ghost={!isInFavorites} 
                                  onPress={onToggleFavorite}>
                                        {isInFavorites?'En favoritos':'Guardar en favoritos'}
                                </Button>    
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}> Sprites:</Text>
                                <Container direction='row' display='flex' gap={0}>
                                        <Image src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}/>    
                                        <Image src={pokemon.sprites.back_default}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}/>    
                                        <Image src={pokemon.sprites.front_shiny}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}/>    
                                        <Image src={pokemon.sprites.back_shiny}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}/>    
                                        
                                </Container> 
                    </Card.Body>
                </Card>
            </Grid>
           
        </Grid.Container>
    </Layout>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemon151 : string[] = Array.from({ length: 151 }, (_, index) => "" +(index + 1))
  return {
    paths: pokemon151.map( id => ({
        params: {id}  
    })),
    //fallback: "blocking"
    fallback: false // esto es para que aparesca el 404
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { id } = ctx.params as { id: string }
 
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage;
