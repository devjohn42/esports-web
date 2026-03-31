import { TicketSlash } from 'lucide-react'

export function Invitation() {
	return (
		<div className="pt-1 mt-8 bg-(image:--text-gradient) self-stretch rounded-lg overflow-hidden">
			<section className="bg-[#2A2634] px-8 py-6 flex items-center justify-between">
				<div className="">
					<strong className="block text-2xl text-zinc-50 font-black">
						Encontre o seu duo
					</strong>
					<span className="text-zinc-400">
						Crie um convite para encontrar novos players!
					</span>
				</div>
				<button className="bg-[#7D74DE] hover:cursor-pointer hover:bg-[#534c96] transition-colors duration-300 py-3 px-4 text-zinc-50 font-bold rounded flex items-center gap-3">
					<TicketSlash size={22} />
					Criar Convite
				</button>
			</section>
		</div>
	)
}
