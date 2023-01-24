import { TPokemonListEndpoint } from '@/interfaces'
import { api } from '@/services/axios'
import { useInfiniteQuery } from 'react-query'

const getPokemonList = async (page: string): Promise<TPokemonListEndpoint> => {
    const { data } = await api.get<TPokemonListEndpoint>(page || '/pokemon')
    return data
}

export const useGetPokemonList = () => {
    return useInfiniteQuery({
        queryKey: 'pokemon-list',
        queryFn: ({ pageParam }) => getPokemonList(pageParam),
        getNextPageParam: (lastPage) => lastPage.next ?? undefined,
        getPreviousPageParam: (previousPage) => previousPage ?? undefined,
    })
}
