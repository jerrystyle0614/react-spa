const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	// 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
	entry: [
		'./src/app.jsx',
	],
	// output 是放入產生出來的結果的相關參數
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx','css', '.scss']
	},
	module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
			{ 
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/, 
				use: { 
					loader: 'babel-loader', 
					options: { 
						presets: ['@babel/preset-react', '@babel/preset-env'] 
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
					]
				},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif|jpg|svg)$/,
				use: [
				  {
					loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]',
					options: {
                        limit:50,
                        outputPath:'contents/images/'
                    }
				  }
				]
			}
        ]
    },
	// devServer 則是 webpack-dev-server 設定
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, "public"),
		publicPath: "/",
		compress: true,
		port: 3000
	},
	// plugins 放置所使用的外掛
	plugins: [HTMLWebpackPluginConfig],
};