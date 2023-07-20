import { useCardFetch } from "../hooks/useCardFetch";
import PropTypes from "prop-types";

const Card = ({ url }) => {
	const { state, loading } = useCardFetch(url);
	return (
		<div
			className={`w-56 h-40 p-4 bg-white bg-gradient-to-b from-slate-100 to-white rounded-md shadow-md  ${
				loading ? "animate-skeleton" : "animate-none"
			}`}
		>
			<div className={"mx-auto w-24 h-24 mb-2 "}>
				<img
					src={state.sprites.front_default}
					alt={state.name}
					className="mx-auto"
				/>
			</div>

			<h1>{state.name}</h1>
		</div>
	);
};

Card.propTypes = {
	url: PropTypes.string,
};

export default Card;
