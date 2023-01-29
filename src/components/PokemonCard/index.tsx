import { useGetPokemon } from '@/queries/useGetPokemon'
import { TPokemonListEndpointResult } from '../../interfaces'

export const PokemonCard = (pokemon: TPokemonListEndpointResult) => {
    const { data, isFetching, isError, refetch } = useGetPokemon(pokemon.url)

    if (isError)
        return (
            <div className="w-[320px] min-h-[124px] bg-sun-400 dark:bg-sun-300 shadow rounded-lg text-white text-xs p-4 flex flex-col gap-4 text-center pt-7">
                Erro ao carregar o pokémon
                <button
                    className="border border-sun-50 w-fit px-2 py-1 mx-auto rounded-md"
                    onClick={() => refetch()}
                >
                    Tentar novamente
                </button>
            </div>
        )

    if (isFetching)
        return (
            <div className="w-[320px] min-h-[124px] bg-sun-400 dark:bg-sun-300 shadow rounded-lg pt-5">
                <div className="animate-pulse flex flex-col gap-4">
                    <div className="mx-auto mt-2 rounded-full bg-slate-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1 px-14">
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="flex flex-col items-center justify-center min-w-[320px] py-4 rounded-lg bg-sun-400 dark:bg-sun-300">
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
            <span className="uppercase mt-3 text-xs text-white font-normal">
                {pokemon.name}
            </span>
        </div>
    )
}
