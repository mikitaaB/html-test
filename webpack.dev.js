import * as path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFolder = path.resolve(__dirname, "src");
const buildFolder = path.resolve(__dirname, "build");

const webpackConfig = {
	mode: "development",
	entry: [
		`${srcFolder}/scripts/app.js`,
		`${srcFolder}/styles/style.scss`
	],
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
				options: {
					minimize: true
				}
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							url: false
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext]"
				}
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "styles/style.bundle.css"
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: `${srcFolder}/fonts`, to: `${buildFolder}/fonts` }
			]
		})
	],
	optimization: {
		minimize: false
	},
	performance: {
		maxAssetSize: 5000000,
		maxEntrypointSize: 5000000,
		hints: "error"
	}
};

export default webpackConfig;