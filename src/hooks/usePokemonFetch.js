import { useEffect, useState } from "react";

const pokemon = {
	id: null,
	name: null,
	sprites: {
		front_default: null,
	},
	weight: 0,
};

export const usePokemonFetch = (name) => {
	const [state, setState] = useState(pokemon);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchPokemon = async () => {
		setError(false);
		setLoading(true);

		try {
			const pokemon = await (
				await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			).json();

			setState(pokemon);
		} catch (error) {
			setError(true);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon();
	}, [name]);

	return { state };
};
