import image from "../images/experiences-photos.png"

const Hero = () => {
	return (
		<section className="hero">
			<img src={image} className="hero--photos" alt="experiences images grid" />
			<h1 className="hero--header">Online Experiences</h1>
			<p className="hero--text">Join unique activities led by one-of-a-kind hosts without leaving home</p>
		</section>
	)
}

export default Hero;