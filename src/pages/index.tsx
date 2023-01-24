import { useGetPokemonList } from '@/queries/useGetPokemonList'

export default function Home() {
    const { data, fetchNextPage, hasNextPage, refetch } = useGetPokemonList()

    return (
        <div>
            {data?.pages.map((page) =>
                page.results.map((pokemon) => <div>{pokemon.name}</div>)
            )}
            <button onClick={() => (hasNextPage ? fetchNextPage() : refetch())}>
                Next
            </button>
        </div>
    )
}
