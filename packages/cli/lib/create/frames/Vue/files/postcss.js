const answerVue = require("../../../../options.js").answerVue
const formattingStr = require("../../../../utils").formattingStr;

let postcssStr =
`/**
 * @msg postcss 配置 
 * @http https://www.postcss.com.cn/
 */

module.exports = {
    plugins: {
        autoprefixer: {},
        ${answerVue.platform === 2
        ?`"postcss-pxtorem": {
            rootValue: 37.5,
            propList: ['*'],
        }`:"placeholder-mxx"}
    }
}
`



module.exports = formattingStr(postcssStr, "placeholder-mxx");;