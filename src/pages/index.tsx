import { useState } from 'react'

import { PokemonCard, ThemeToggler, PokemonList } from '@/components'
import { useDebounce } from '@/hooks'

export default function Home() {
    const [searchPokemon, setSearchPokemon] = useState('')

    const searchPokemonDebounced = useDebounce(
        searchPokemon.toLocaleLowerCase()
    )

    return (
        <div className="transition-colors bg-fixed animate-infinityParallax pattern-cross pattern-white dark:pattern-white pattern-bg-sun-50 dark:pattern-sun-300 dark:pattern-bg-sun-500 pattern-size-6 pattern-opacity-100 px-4 sm:px-8 lg:px-36 min-h-screen">
            <h1 className="flex justify-center pt-12 pb-10 text-xl sm:text-3xl lg:text-4xl text-sun-400 dark:text-white animate-bounce transition-all">
                Lista de Pokémons
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative">
                <input
                    className="py-3 pl-4 w-[320px] bg-sun-400 dark:bg-sun-300 text-white text-sm rounded-lg placeholder:text-xs outline-0"
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

            <PokemonList />
        </div>
    )
}
