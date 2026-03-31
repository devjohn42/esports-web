import { Hero } from './_components/hero'
import { Invitation } from './_components/invitation'

{
	/* <h1 className="font-extrabold text-[#7D74DE]">ESports Web</h1> */
}

function App() {
	return (
		<div className="max-w-336 mx-auto flex flex-col items-center my-20">
			<Hero />
			<Invitation />
		</div>
	)
}

export default App
