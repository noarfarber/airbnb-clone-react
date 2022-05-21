import star from "../images/pink-star.png"

const Card = (props) => {
	console.log(props.image)
	return (
		<div className="card">
			<img src={`../images/${props.image}`} className="card--image" alt="image of swimmer katie zaferes" />
			<div className="card--info">
				<img src={star} className="card--star" />
				<span> {props.rating}  </span>
				<span>({props.reviewCount})  </span>
				<span>{props.country}</span>
			</div>
			<p>{props.title}</p>
			<p>From ${props.price} / person</p>
		</div>
	)
}

export default Card;