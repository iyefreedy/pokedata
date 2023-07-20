import { useEffect, useState } from "react";

const pokemon = {
	name: null,
	sprites: {
		front_default: null,
	},
};

export const useCardFetch = (url) => {
	const [state, setState] = useState(pokemon);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchPokemon = async () => {
		setLoading(true);
		setError(false);

		try {
			const pokemon = await (await fetch(url)).json();

			setState(pokemon);
		} catch (error) {
			setError(false);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { state, error, loading };
};
