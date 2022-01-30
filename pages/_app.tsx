import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<CssBaseline/>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
