import { useEffect, useState } from "react";

const initialState = {
	count: 0,
	previous: null,
	next: null,
	results: [],
};

export const useHomeFetch = () => {
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [current, setCurrent] = useState("https://pokeapi.co/api/v2/pokemon/");
	console.log(current);

	const fetchPokemons = async () => {
		try {
			setError(false);
			setLoading(true);

			const pokemons = await (await fetch(current)).json();

			setState(pokemons);
		} catch {
			setError(true);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchPokemons();
	}, [current]);

	return { state, loading, error, setLoading, setError, setCurrent };
};
