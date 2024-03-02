import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

export const About = () => {
	return (
		<section className="bg-white py-20" id="about">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutSvg} className="w-full h-64" alt="" />
				<article>
					<SectionTitle text="About me" />
					<p className="text-sltate-600 mt-8 leading-loose">
						USC 22Fall MSCS student. Expected graduation time: Dec, 2024.
						<p>Love designing.</p>
					</p>
				</article>
			</div>
		</section>
	)
}
export default About
