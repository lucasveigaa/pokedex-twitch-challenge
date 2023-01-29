import { useState } from 'react'

import { PokemonCard, LoadingStatus, ThemeToggler } from '@/components'
import { useDebounce } from '@/hooks'
import { useGetPokemonList } from '@/queries'

export default function Home() {
    const [searchPokemon, setSearchPokemon] = useState('')

    const searchPokemonDebounced = useDebounce(
        searchPokemon.toLocaleLowerCase()
    )

    const { data, fetchNextPage, hasNextPage, refetch, isFetching } =
        useGetPokemonList()

    return (
        <div className="bg-sun-50 px-4 sm:px-8 lg:px-36 min-h-screen dark:bg-black">
            <h1 className="flex justify-center pt-12 pb-10 text-xl sm:text-3xl lg:text-4xl text-sun-400 dark:text-white animate-bounce transition-all">
                Lista de Pokémons
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative">
                <input
                    className="peer py-3 pl-4 w-[320px] bg-sun-400 dark:bg-sun-300 text-white text-sm rounded-lg border-2 border-dashed border-sun-300 placeholder:text-xs"
                    onChange={(e) => setSearchPokemon(e.target.value)}
                    placeholder="Procure nome ou ID"
                />
                <div className="absolute right-0">
                    <ThemeToggler />
                </div>
            </div>

            <div
                className={`flex justify-center  ${
                    searchPokemonDebounced && 'mt-8'
                }`}
            >
                <PokemonCard url={`pokemon/${searchPokemonDebounced}`} />
            </div>

            <div className="flex items-center justify-center sm:justify-between py-10 gap-4 flex-wrap ">
                {data?.pages.map((page) =>
                    page.results.map((pokemon) => (
                        <PokemonCard
                            url={pokemon.url}
                            pokemonName={pokemon.name}
                        />
                    ))
                )}
            </div>

            <div className="flex justify-center pb-4">
                {isFetching ? (
                    <div className="flex gap-2">
                        <LoadingStatus /> Carregando...
                    </div>
                ) : (
                    <button
                        className="flex gap-2"
                        onClick={() =>
                            hasNextPage ? fetchNextPage() : refetch()
                        }
                    >
                        Carregar mais...
                    </button>
                )}
            </div>
        </div>
    )
}
