import { pokeApi } from '@/api';
import { Pokemon } from '../interfaces/pokemon-full';

/* EL TRY funciona para ISG que es generar automaticamente algo que
no existe en mis paginas estaticas pero que si hay en la nube*/
export const getPokemonInfo = async (nameOrId:string) => {
    try {
        const { data } = await  pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)
    
        return {
            id: data.id, name:data.name, sprites: data.sprites
        }
    } catch (error) {
        return null
    }

    
}