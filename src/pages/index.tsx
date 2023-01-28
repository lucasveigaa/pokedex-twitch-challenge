import { PokemonCard, LoadingStatus } from '@/components'
import { useGetPokemonList } from '@/queries/useGetPokemonList'

export default function Home() {
    const { data, fetchNextPage, hasNextPage, refetch, isFetching } =
        useGetPokemonList()

    return (
        <div className="bg-sun-50 min-h-screen">
            <h1 className="flex justify-center pt-14 text-4xl text-sun-400 animate-bounce transition-all">
                Lista de Pokémons
            </h1>

            <div className="flex items-center justify-center py-10 gap-4 flex-wrap ">
                {data?.pages.map((page) =>
                    page.results.map((pokemon) => <PokemonCard {...pokemon} />)
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
