import { Card, Col, Container, Grid, Row, Text, useTheme } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import { games } from '../data/games';
import Image from 'next/image';

const Home: NextPage = () => {
	const { theme } = useTheme();
	return (
		<div>
			<Head>
				<title>GameStore</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Container fluid className=' max-w-7xl' style={{ color: theme }}>
				<Grid.Container gap={2} justify='flex-start'>
					{games.map((game, idx) => (
						<Grid xs={12} sm={3} key={idx}>
							<Card cover>
								<Card.Header css={{ position: 'absolute', zIndex: 1, top: 5, left: 12 }}>
									<Col className='bg-indigo-600 max-w-[56px] h-14' >
										<Text>bla</Text>
										<Text>7</Text>
									</Col>
								</Card.Header>
								<Card.Image src={game.thumbnail} height={340} width='100%' alt={game.title} />
								<Card.Footer justify='flex-start'>
									<Row justify='space-between'>
										<Text b>{game.title}</Text>
										<Text css={{ color: '$accents4', fontWeight: '$semibold' }}>{game.title}</Text>
									</Row>
								</Card.Footer>
							</Card>
						</Grid>
					))}
				</Grid.Container>
			</Container>
		</div>
	);
};

export default Home;
