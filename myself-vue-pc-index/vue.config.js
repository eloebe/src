const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	pages: {
		index: 'src/modules/index/index.js',
		
	    console: {
	        // 应用入口配置，相当于单页面应用的main.js，必需项
	        entry:  'src/modules/index/index.js',
	
	        // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
	        template: 'public/index.html',
	
	        // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
	        filename: 'index.html',
	
	        // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
	        // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	        title: '易融互联电子保函系统',
			
	        // 包含的模块，可选项
			chunks: ['chunk-vendors', 'chunk-common', 'console']
	    }
	    // 只有entry属性时，直接用字符串表示模块入口
	    // client: 'src/modules/client/client.js'
	},
	publicPath: './', // 根路径
	outputDir: 'dist',
	assetsDir: 'assets',
	lintOnSave: true,
	chainWebpack: (config) => { //路径配置
		config.resolve.alias
			.set('src', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('static', resolve('src/static'))
	},
	devServer: {
		 proxy: {
            //配置跨域
            '/api': {
                target: "https://api.it120.cc/4d5c85aa214e44192ef7672ed624541b",
               changeOrigin: true,
               pathRewrite: {
                   '^/api': ''
               }
            }
        }
	}
	/* css: {
		loaderOptions: {
			css: {},
			postcss: {
				plugins: [require('postcss-px2rem')({
					remUnit: 75
				})]
			}
		}
	} */   //postcss-px2rem 插件配置模块
}
