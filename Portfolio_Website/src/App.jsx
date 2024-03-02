import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
	// return <h1 className="text-7xl font-bold underline">Tailwind Portfolio</h1>
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
		</>
	)
}
export default App
