const answerVue = require("../../../options.js").answerVue
const formattingStr = require("../../../../../utils").formattingStr;

let requestName;

switch (answerVue.request) {
    case 1:
      requestName = "axios"
      break;
    case 2:
        requestName = "fly"
        break;

}


let requestStr =
`/**
 * @msg 请求简单封装 配置 
${answerVue.request === 1 ? "* @axios.js  https://github.com/axios/axios" : "placeholder-mxx"}
${answerVue.request === 2 ? "* @fly.js https://github.com/wendux/fly" : "placeholder-mxx"}
 */

${answerVue.request === 1 ? "import axios from 'axios'" : "placeholder-mxx"}
${answerVue.request === 2 ?"import fly from 'flyio'" : "placeholder-mxx"}



// 响应拦截
${requestName}.interceptors.response.use(res => {

    return res.data;
},error =>{
    // if(error.response.status == 401){}// 登录已过期
    // if(error.response.status == 403){} // 无权访问
    // if(error.response.status == 404){} // 访问的页面不存在
    // if(error.response.status == 500){} // 服务器发生错误
    // if(error.response.status == 504){} // 服务器发生错误

    return  Promise.reject(error.response)
})

export default function request(api,config = {}){

  const { method, headers ,patterns, data} = config;
  //patterns匹配路径参数（数组）， params GET请求参数（对象）, data

  return createRequestConfig(api,{method, headers, patterns,data})
}

function createRequestConfig(api,{method, headers,patterns,data}){
    let url  = api;
    let methods = method || 'post'; // 默认get请求
    let header = headers || {};
    // 解析路径匹配参数
    if(patterns && patterns.length){
        for(let i=0; i < patterns.length; i++){
            url = url.replace("{"+i+"}",patterns[i])
        }
    }

    ${answerVue.request === 2 ? 
    `// fly 请求配置
    return fly.request(url,data,{
        baseURL:"",//请求基路径
        method: methods.toLowerCase(),
        headers: header,
        timeout:5000 //超时设置为5s
    })
    ` : "placeholder-mxx"}

    ${answerVue.request === 1 ?
    `// fly 请求配置
    return  axios.request({
        baseURL:"",//请求基路径
        url: url,
        method: methods.toLowerCase(),
        params: params, // GET 请求 (需要注意的是在登录post请求是时使用了)
        data: JSON.stringify(data),
        headers: header,
    });
    ` : "placeholder-mxx"}
   
}
`

module.exports = formattingStr(requestStr, "placeholder-mxx");;