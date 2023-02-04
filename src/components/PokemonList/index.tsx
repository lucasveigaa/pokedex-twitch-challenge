import InfiniteScroll from 'react-infinite-scroller'
import { useMemo } from 'react'

import { useGetPokemonList } from '@/queries'
import { LoadingStatus, PokemonCard } from '..'

export const PokemonList = () => {
    const { data, fetchNextPage, hasNextPage } = useGetPokemonList()

    const memoData = useMemo(() => {
        return (
            <InfiniteScroll
                loadMore={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<LoadingStatus key={0} />}
            >
                <div className="flex items-center justify-center sm:justify-between py-10 gap-4 flex-wrap">
                    {data?.pages.map((page) =>
                        page.results.map((pokemon) => (
                            <PokemonCard
                                key={pokemon.name}
                                url={pokemon.url}
                                pokemonName={pokemon.name}
                            />
                        ))
                    )}
                </div>
            </InfiniteScroll>
        )
    }, [data])

    return <div>{memoData}</div>
}
