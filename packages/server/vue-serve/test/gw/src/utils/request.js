import fly from 'flyio'
import { Toast } from 'vant'


// 响应拦截
fly.interceptors.response.use(res => {
    if(res.data){
        if (res.data.result.code !== 200){
            Toast(res.data.result.msg)
        }
        if (res.data.result.data){
            res.data.result.data = JSON.parse(res.data.result.data)
        }
    }

    return res.data.result;
},error =>{
    // if(error.response.status == 401){ // 登录已过期
    //     sessionStorage.clear();
    //     router.push({path:'/login',query:{msg:'登录已过期'}})
    // }

    // if(error.response.status == 403){ // 无权访问
    //     router.push({path:'/error/403'})
    // }

    // if(error.response.status == 404){ // 访问的页面不存在
    //     router.push({path:'/error/404'})
    // }

    if(error.response.status == 500){ // 服务器发生错误
        Toast("请求数据出错")
    }
    return  Promise.reject(error.response)
})




// fly.config.headers = { "Content-type": " application/json; charset=utf-8" }
function createRequestConfig(api,{method, headers,patterns,data}){
    let url  = api;
    let methods = method || 'GET'; // 默认POST请求
    let header = headers || {};
    // 解析路径匹配参数
    if(patterns && patterns.length){
        for(let i=0; i < patterns.length; i++){
            url = url.replace(`{${i}}`,patterns[i])
        }
    }

    return fly.request(url,data,{
        baseURL:"api/gw",//请求基础路径
        method: methods.toLowerCase(),
        headers: header,
        timeout:5000 //超时设置为5s
    })
}



export default function request(api, config = {}) {

    const { method, headers, patterns, data } = config;
    //patterns匹配路径参数（数组）， params GET请求参数（对象）, data


    return createRequestConfig(api, { method, headers, patterns, data })

}