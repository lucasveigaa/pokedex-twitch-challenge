import { TPokemonContentEndpoint } from '@/interfaces'
import { requester } from '@/services/axios'
import { useQuery } from 'react-query'

export const useGetPokemon = (uri: string) => {
    const fetchPokemon = async (): Promise<TPokemonContentEndpoint> => {
        const { data } = await requester().get<TPokemonContentEndpoint>(uri)
        return data
    }

    return useQuery([uri], () => fetchPokemon(), {
        refetchOnWindowFocus: false,
    })
}
