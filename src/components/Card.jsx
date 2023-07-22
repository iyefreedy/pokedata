import { Link } from "react-router-dom";
import { useCardFetch } from "../hooks/useCardFetch";
import PropTypes from "prop-types";

const Card = ({ url }) => {
	const { state, loading } = useCardFetch(url);
	const { name, sprites } = state;
	return (
		<Link to={`/pokemon/${name}`}>
			<div
				className={`w-56 h-40 p-4 bg-white bg-gradient-to-b from-slate-200 to-slate-100 rounded-md shadow-md  ${
					loading ? "animate-skeleton" : "animate-none"
				}`}
			>
				<div className={"mx-auto w-24 h-24 mb-2 "}>
					<img src={sprites.front_default} alt={name} className="mx-auto" />
				</div>

				<h1 className="font-semibold first-letter:uppercase">{name}</h1>
			</div>
		</Link>
	);
};

Card.propTypes = {
	url: PropTypes.string,
};

export default Card;
