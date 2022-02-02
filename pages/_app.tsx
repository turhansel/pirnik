import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: { light: '#ddd' },
	},
});

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			// brand colors
			primaryLight: '$green200',
			primary: '#4ADE7B',
			primaryDark: '$green600',

			gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
			link: '#5E1DAD',

			// you can also create your own color
			myColor: '#ff4ecd',

			// ...  more colors
		},
		space: {},
		fonts: {},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextThemesProvider
			defaultTheme='system'
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
