import { useGetPokemon } from '@/queries/useGetPokemon'
import { isAxiosError } from 'axios'
import pokemonType from './pokemonTypes'
import { Chart, Modal } from '..'

interface PokemonCardProps {
    url: string
    pokemonName?: string
}

export const PokemonCard = ({ url, pokemonName }: PokemonCardProps) => {
    const { data, isFetching, isError, error, refetch } = useGetPokemon(url)

    if (isAxiosError(error)) {
        if (error.response?.status === 404) {
            return (
                <div className="w-[320px] min-h-[124px] bg-sun-400 dark:bg-sun-300 shadow rounded-lg text-white text-xs p-4 flex flex-col gap-4 text-center items-center justify-center pt-7">
                    Pokémon não encontrado
                </div>
            )
        }
    }

    if (!isFetching && !data?.id) return null

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
                        <div className="text-white flex justify-center">
                            procurando...
                        </div>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="flex">
            <Modal
                modalTrigger={
                    <button className="flex flex-col cursor-pointer items-center justify-center w-[320px] py-4 rounded-lg bg-sun-400 dark:bg-sun-300">
                        <img
                            loading="lazy"
                            className="w-16 h-16"
                            alt={`Imagem do pokemon ${
                                pokemonName || data?.name
                            }`}
                            src={
                                data?.sprites?.versions?.['generation-v']?.[
                                    'black-white'
                                ]?.animated.front_default ||
                                data?.sprites?.other?.['official-artwork']
                                    ?.front_default
                            }
                        />
                        <span className="uppercase mt-3 text-xs text-white font-normal">
                            {pokemonName || data?.name}
                        </span>
                    </button>
                }
                title={pokemonName!}
            >
                <div className="flex flex-col items-start justify-start">
                    <div className="w-full min-h-[400px] flex flex-wrap gap-5 items-center justify-center">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <img
                                    loading="lazy"
                                    className="h-52 w-52"
                                    src={
                                        data?.sprites?.other?.home
                                            ?.front_default ||
                                        data?.sprites?.other?.[
                                            'official-artwork'
                                        ]?.front_default
                                    }
                                    alt={`Pokémon ${data?.name}`}
                                />
                                <div className="flex justify-center md:justify-start gap-2 flex-wrap">
                                    {data?.types?.map((type, index) => (
                                        <div
                                            key={`${type.type.name}-${index}`}
                                            className="p-2 rounded-md shadow-lg text-sm mt-8"
                                            style={{
                                                backgroundColor: `${
                                                    pokemonType?.[
                                                        type?.type.name
                                                    ]
                                                }`,
                                            }}
                                        >
                                            {type?.type.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center items-center md:h-96 md:w-96 h-60 w-60">
                                <Chart
                                    data={
                                        data?.stats?.map((item) => ({
                                            subject: item.stat?.name,
                                            stats: item.base_stat,
                                        }))!
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
