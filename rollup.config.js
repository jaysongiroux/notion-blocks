import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
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
			resolve({
				browser: true,
			}),
			commonjs({
				include: /node_modules/,
				requireReturnsDefault: "auto",
			}),
			babel({
				exclude: "node_modules/**",
			}),
			postcss(),
			json(),
			typescript({ tsconfig: "./tsconfig.json" }),
			terser(),
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		external: [/\.css$/u],
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()],
	},
];
