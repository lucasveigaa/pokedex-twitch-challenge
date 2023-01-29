import { TPokemonListEndpoint } from '@/interfaces'
import { requester } from '@/services/axios'
import { useInfiniteQuery } from 'react-query'

const getPokemonList = async (page: string): Promise<TPokemonListEndpoint> => {
    const { data } = await requester().get<TPokemonListEndpoint>(
        page || '/pokemon'
    )
    return data
}

export const useGetPokemonList = () => {
    return useInfiniteQuery({
        queryKey: 'pokemon-list',
        queryFn: ({ pageParam }) => getPokemonList(pageParam),
        getNextPageParam: (lastPage) => lastPage.next ?? undefined,
        getPreviousPageParam: (previousPage) => previousPage ?? undefined,
        refetchOnWindowFocus: false,
    })
}
