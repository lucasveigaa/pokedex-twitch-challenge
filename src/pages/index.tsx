import { PokemonCard } from '@/components/PokemonCard'
import { useGetPokemonList } from '@/queries/useGetPokemonList'

export default function Home() {
    const { data, fetchNextPage, hasNextPage, refetch } = useGetPokemonList()

    return (
        <div>
            <div className="flex items-center justify-center py-10 gap-4 flex-wrap bg-sun-50">
                {data?.pages.map((page) =>
                    page.results.map((pokemon) => <PokemonCard {...pokemon} />)
                )}
            </div>
            <button onClick={() => (hasNextPage ? fetchNextPage() : refetch())}>
                Next
            </button>
        </div>
    )
}
