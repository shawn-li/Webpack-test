var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry: './src/app.js',
	
	output:{
		path: __dirname+'/dist/',
		filename:'js/[name].bundle.js'
	},

	module:{
		loaders:[
			{
				test: /\.js$/, 
				//exclude: /node_modules/, 
				loader: "babel-loader",
				exclude: __dirname +"./node_modules/",
				include: __dirname +"./src/",
				query:{ 
					presets:['latest']
				} 
			}
		]
	},

	plugins:[
		new htmlWebpackPlugin({
			filename:'index.bundle.html',
			template:'index.html',
			inject:'body'
		})
	]


}
