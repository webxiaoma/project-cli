/**
 *@msg html-webpack-plugin 扩展
 */

class HtmlExtendPlugin {
    constructor(HtmlWebpackPlugin,options){
        this.options = options;
        this.HtmlWebpackPlugin = HtmlWebpackPlugin;
    }
    apply(compiler){
        // var paths = this.options.paths;
        compiler.hooks.compilation.tap('HtmlExtendPlugin', (compilation) => {
           // console.log(compilation)
           this.HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
               "HtmlExtendPlugin",
               async (data,cb)=>{
                    // 增加js
                    if(this.options.addJs){
                        data.assets.js = await this.addJs(data.assets.js)
                    }
                    // 增加css
                    if(this.options.addCss){
                        data.assets.css = await this.addCss(data.assets.css)
                    }
                    cb(null, data)
               }
           )
        })
    }
    addJs(list){ // 添加js
        let js = this.options.addJs || [];
        let jsList = Object.assign([],list)
        if(Array.isArray(js)){
            return js.concat(jsList)// 自动拼接到前面
        }

        if(typeof js === 'function'){
            let jsAry = js(jsList)
            if(Array.isArray(jsAry)){
               return jsAry;
            }else{
               console.log('\x1B[31m%s\x1B[39m', "The return value of the addJs must be an array in the html-extended-webpack-plugin")
               process.exit(1)
            }
        }

        console.log('\x1B[31m%s\x1B[39m', "addJs of value must be an array or a function in the html-extended-webpack-plugin")
        process.exit(1)

        
    }
    addCss(list){ // 添加css
        let css = this.options.addCss || []
        let cssList = Object.assign([],list)
        if(Array.isArray(css)){
            return css.concat(cssList) 
        }

        if(typeof css === 'function'){
            let cssAry = css(cssList)
            if(Array.isArray(cssAry)){
               return cssAry;
            }else{
               console.log('\x1B[31m%s\x1B[39m', "The return value of the addCss must be an array in the html-extended-webpack-plugin")
               process.exit(1)
            }
        }

        console.log('\x1B[31m%s\x1B[39m', "addJs of value must be an array or a function in the html-extended-webpack-plugin")
        process.exit(1)
    }
}


    
module.exports = HtmlExtendPlugin;