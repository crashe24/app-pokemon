
const toggleFavorite = (id:number) => {
    
     let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
         
      if(favorites.includes(id)) {
           favorites = favorites.filter(pokeid => pokeid !== id)
          // console.log('ya esta incluido')
       } else {
            favorites.push(id)
       }
   
     localStorage.setItem('favorites', JSON.stringify(favorites))
} 

const existPokemonInFavorites = (id:number):boolean => {
    
   
    if (typeof Window === 'undefined') return false

    const favorites: number[] = JSON.parse(
        localStorage.getItem('favorites') || '[]') 

    return favorites.includes(id) 
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}
export default{ 
    toggleFavorite,
    existPokemonInFavorites,
    pokemons
}