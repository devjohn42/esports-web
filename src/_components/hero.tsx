import logo from '../assets/logo-nlw.svg'

export function Hero() {
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
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-1.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-zinc-50 block">Counter Strike</strong>
						<span className="text-zinc-300 text-sm mt-4"> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-2.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-zinc-50 block">Dota 2</strong>
						<span className="text-zinc-300 text-sm mt-4"> 2 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-3.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-zinc-50 block">WarCraft</strong>
						<span className="text-zinc-300 text-sm mt-4"> 7 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-4.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-zinc-50 block">League Of Legends</strong>
						<span className="text-zinc-300 text-sm mt-4"> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-5.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-zinc-50 block">Fortnite</strong>
						<span className="text-zinc-300 text-sm mt-4"> 9 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-6.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-(image:--game-gradient) absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-zinc-50 block">Apex Legends</strong>
						<span className="text-zinc-300 text-sm mt-4"> 2 anúncios</span>
					</div>
				</a>
			</div>
		</section>
	)
}
