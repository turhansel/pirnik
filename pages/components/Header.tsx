import { Avatar, Container, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const Header = () => {
	const { setTheme, theme } = useNextTheme();
	const { isDark } = useTheme();

	return (
		<Row className='' justify='space-evenly'>
			<Text h3>logo</Text>
			<Switch
				size='xl'
				iconOn={<MoonIcon />}
				iconOff={<SunIcon />}
				shadow
				color='warning'
				initialChecked={isDark}
				onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
			/>
		</Row>
	);
};

export default Header;
