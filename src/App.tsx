import * as Dialog from '@radix-ui/react-dialog'
import { Gamepad } from 'lucide-react'
import { Input } from './_components/form/input'
import { Hero } from './_components/hero'
import { Invitation } from './_components/invitation'

{
	/* <h1 className="font-extrabold text-[#7D74DE]">ESports Web</h1> */
}

function App() {
	return (
		<div className="max-w-336 mx-auto flex flex-col items-center justify-center my-20">
			<Hero />
			<Dialog.Root>
				<Invitation />

				<Dialog.Portal>
					<Dialog.DialogOverlay className="bg-black/60 inset-0 fixed" />

					<Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-120 shadow-lg shadow-black/30">
						<Dialog.Title className="text-3xl font-black">
							Publique o seu Convite
						</Dialog.Title>

						<form className="mt-8 flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<label htmlFor="game" className="font-semibold">
									Qual o game?
								</label>
								<Input id="game" placeholder="Selecione o game que deseja jogar" />
							</div>

							<div className="flex flex-col gap-2">
								<label htmlFor="name">Seu nome (ou nickname)</label>
								<Input id="name" placeholder="Como te chamam dentro do game?" />
							</div>

							<div className="grid grid-cols-2 gap-6">
								<div className="flex flex-col gap-2">
									<label htmlFor="yearsPlaying">Joga a quantos anos?</label>
									<Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
								</div>

								<div className="flex flex-col gap-2">
									<label htmlFor="discord">Qual o Discord?</label>
									<Input id="discord" placeholder="User#0000" />
								</div>
							</div>

							<div className="flex gap-6">
								<div className="flex flex-col gap-2">
									<label htmlFor="weekDays">Quando costuma jogar?</label>

									<div className="grid grid-cols-4 gap-2">
										<button className="w-8 h-8 rounded bg-zinc-900" title="Domingo">
											D
										</button>
										<button className="w-8 h-8 rounded bg-zinc-900" title="Segunda">
											S
										</button>
										<button className="w-8 h-8 rounded bg-zinc-900" title="Terça">
											T
										</button>
										<button className="w-8 h-8 rounded bg-zinc-900" title="Quarta">
											Q
										</button>
										<button className="w-8 h-8 rounded bg-zinc-900" title="Qiunta">
											Q
										</button>
										<button className="w-8 h-8 rounded bg-zinc-900" title="Sexta">
											S
										</button>
										<button className="w-8 h-8 rounded bg-zinc-900" title="Sábado">
											S
										</button>
									</div>
								</div>

								<div className="flex flex-1 flex-col gap-2">
									<label htmlFor="hourStart">Qual horário do dia?</label>
									<div className="grid grid-cols-2 gap-2">
										<Input id="hourStart" type="time" placeholder="De" />
										<Input id="hourEnd" type="time" placeholder="Até" />
									</div>
								</div>
							</div>

							<div className="mt-2 flex gap-2 text-sm">
								<Input type="checkbox" />
								Costumo me conectar ao chat de voz
							</div>

							<footer className="mt-4 flex justify-end gap-4">
								<Dialog.Close className="bg-zinc-500 hover:cursor-pointer hover:bg-zinc-600 transition-colors duration-300 px-5 h-12 rounded-md font-semibold">
									Cancelar
								</Dialog.Close>
								<button
									type="submit"
									className="bg-[#7D74DE] hover:cursor-pointer hover:bg-[#534c96] transition-colors duration-300 px-5 h-12 rounded-md font-semibold flex items-center gap-3"
								>
									<Gamepad size={24} />
									Criar convite
								</button>
							</footer>
						</form>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	)
}

export default App
