import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Hero = () => {
	return (
		<div className="bg-emerald-100 py-24">
			<div className="align-element grid md:grid-cols-2 items-center gap-8">
				<article>
					<h1 className="text-7xl font-bold tracking-wider">
						I'm Yueqin (Amy) Li
					</h1>
					<p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
						Welcome to my personal website
					</p>
					<p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
						made with React & Tailwind
					</p>
					<div className="flex gap-x-4 mt-4">
						<a href="#">
							<FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
						</a>
						<a href="#">
							<FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
						</a>
						<a href="#">
							<FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaTwitterSquare>
						</a>
					</div>
				</article>
				<article className="hidden md:block">
					<img src={heroImg} alt="" className="h-80 lg:h-96" />
				</article>
			</div>
		</div>
	)
}
export default Hero
