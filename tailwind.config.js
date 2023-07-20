/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				skeleton: "skeleton 1s linear infinite alternate",
			},
			keyframes: {
				skeleton: {
					from: {
						background: "hsl(200, 20%, 80%)",
					},
					to: {
						background: "hsl(200, 20%, 95%)",
					},
				},
			},
		},
	},
	plugins: [],
};
