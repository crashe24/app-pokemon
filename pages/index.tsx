import { NextPage,GetStaticProps } from "next"
import { Layout } from '../components/layouts';
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import  PokemonList  from "../components/pokemon/PokemonList";

interface Props {
  pokemons: SmallPokemon[];
}

const  HomePage: NextPage<Props> = ({pokemons})=> {
  return (
    <Layout title={'Pokemon Apps'}>
     
      <h1>Pokemon</h1>
      <PokemonList pokemons= {pokemons} />
      
    </Layout>
  )
}

/* SOLO SE EJECUTA DEL LADO DEL SERVIDOR
   FUNCION SOLO SE PUEDE UTILIZAR EN LAS PAGINAS
   SOLO SE USA SI SE SABE DE ANTEMANO QUE SE VA A CARGAR
   EN ESTE CASO LA PAGINA PRINCIPAL TENDRA 151 POKEMON SIEMPRE

*/
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await  pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons : SmallPokemon[] = data.results.map( (result,i) => ({
    ...result,
    id:i+1,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
}))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
