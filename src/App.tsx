import * as Dialog from '@radix-ui/react-dialog'
import { Hero } from './_components/hero'
import { Invitation } from './_components/invitation'
import { InvitationModal } from './_components/invitation-modal'

{
	/* <h1 className="font-extrabold text-[#7D74DE]">ESports Web</h1> */
}

function App() {
	return (
		<div className="max-w-336 mx-auto flex flex-col items-center justify-center my-20">
			<Hero />
			<Dialog.Root>
				<Invitation />
				<InvitationModal />
			</Dialog.Root>
		</div>
	)
}

export default App
