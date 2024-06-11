import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		typography,
		forms,
		daisyui,
	],
	daisyui: {
		themes: false,
		darkTheme: "dark",
		base: false, 
		styled: true,
		utils: true, 
		rtl: false,
		prefix: "",
		logs: true, 
	},
};
export default config;
