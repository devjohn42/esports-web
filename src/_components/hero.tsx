import { useEffect, useState } from 'react'
import logo from '../assets/logo-nlw.svg'

interface GameBannerProps {
	bannerUrl: string
	title: string
	adsCount: number
}

export interface Game {
	id: string
	title: string
	bannerUrl: string
	_count: {
		ads: number
	}
}

const GameBanner = ({ bannerUrl, title, adsCount }: GameBannerProps) => {
	return (
		<a href="" className="relative rounded-lg overflow-hidden">
			<img src={bannerUrl} alt="" />

			<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
				<strong className="font-bold text-zinc-50 block">{title}</strong>
				<span className="text-zinc-300 text-sm mt-4"> {adsCount} anúncio(s)</span>
			</div>
		</a>
	)
}

export function Hero() {
	const [games, setGames] = useState<Game[]>([])

	useEffect(() => {
		fetch('http://localhost:3333/games')
			.then((response) => response.json())
			.then((data) => {
				setGames(data)
			})
	}, [])

	return (
		<section className="flex flex-col items-center">
			<img src={logo} alt="" />
			<h1 className="text-[64px] text-[#7D74DE] font-black mt-20">
				Seu{' '}
				<span className="bg-(image:--text-gradient) bg-clip-text text-transparent">
					duo
				</span>{' '}
				está aqui!
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				{games.map((game) => {
					return (
						<GameBanner
							key={game.id}
							title={game.title}
							bannerUrl={game.bannerUrl}
							adsCount={game._count.ads}
						/>
					)
				})}
			</div>
		</section>
	)
}
