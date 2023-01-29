import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    )
}
