import { useGetPokemon } from '@/queries/useGetPokemon'
import { TPokemonListEndpointResult } from '../../interfaces'

export const PokemonCard = (pokemon: TPokemonListEndpointResult) => {
    const { data } = useGetPokemon(pokemon.url)

    return (
        <div className="flex flex-col items-center justify-center min-w-[320px] py-4 rounded-lg bg-sun-300">
            <img
                loading="lazy"
                className="w-16 h-16"
                alt={`Imagem do pokemon ${pokemon.name}`}
                src={
                    data?.sprites?.versions?.['generation-v']?.['black-white']
                        ?.animated.front_default ||
                    data?.sprites?.other?.['official-artwork']?.front_default
                }
            />
            <span className="uppercase mt-3 text-xs text-white font-pressStart font-normal">
                {pokemon.name}
            </span>
        </div>
    )
}
