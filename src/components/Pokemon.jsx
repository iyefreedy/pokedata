import { useParams } from "react-router-dom";
import { usePokemonFetch } from "../hooks/usePokemonFetch";

const Pokemon = () => {
	const params = useParams();

	const { state } = usePokemonFetch(params.name);
	return <div className="w-12 p-4 bg-slate-200">{state.id}</div>;
};

export default Pokemon;
