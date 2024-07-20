import { AppProps } from 'next/app';
import { TRPCReactProvider } from '~/trpc/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <TRPCReactProvider>
            <Component {...pageProps} />
        </TRPCReactProvider>
    );
}

export default MyApp;
