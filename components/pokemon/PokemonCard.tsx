import React  from 'react';

import { Card, Row, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard:NextPage<Props> = ({ pokemon }) => {

  const router = useRouter()
  const handleClick = () => {
        //router.push(`/pokemon/${pokemon.id}`)
        router.push(`/pokemonbyname/${pokemon.name}`)
  }

  return (
    <Card  isPressable isHoverable onClick={handleClick}>
        <Card.Body css={{p:1}}>
            <Card.Image src={pokemon.img}  alt={pokemon.name} width="100%" />
        </Card.Body>
        <Card.Footer>
            <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
            </Row>
        </Card.Footer>
    </Card>
  );
}

export default PokemonCard;
