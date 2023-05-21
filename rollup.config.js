import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

const dts = require("rollup-plugin-dts");

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			postcss(),
			json(),
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		external: [/\.css$/u],
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
	},
];
