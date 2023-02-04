import { useEffect, useState } from 'react'

export function useDebounce(value: string, delay = 50) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler: ReturnType<typeof setTimeout> = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
