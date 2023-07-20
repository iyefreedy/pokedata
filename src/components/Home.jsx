import { useHomeFetch } from "../hooks/useHomeFetch";
import Card from "./Card";
import PropTypes from "prop-types";

const Home = () => {
	const { state, loading, error, setCurrent } = useHomeFetch();
	const { previous, next } = state;

	if (error) return <div>Something went wrong!</div>;

	return (
		<div
			className={
				"flex items-center p-4 bg-red-400 bg-gradient-to-br from-red-400 to-red-300"
			}
		>
			<button
				type="button"
				className="bg-indigo-500 p-2 rounded text-white"
				onClick={() => setCurrent(previous)}
			>
				Prev
			</button>

			<div className="flex gap-4 flex-wrap items-center justify-between py-4 px-8">
				{state.results.map((e) => (
					<Card url={e.url} key={e.name} />
				))}
			</div>

			<button
				type="button"
				className="bg-indigo-500 p-2 rounded text-white"
				onClick={() => setCurrent(next)}
			>
				Next
			</button>
		</div>
	);
};

Home.propTypes = {
	state: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	setCurrent: PropTypes.func,
};

export default Home;
