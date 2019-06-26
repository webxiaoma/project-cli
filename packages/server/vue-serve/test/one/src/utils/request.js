import fly from 'flyio'

// import { Notification } from 'element-ui'


// 响应拦截
fly.interceptors.response.use(res => {

    return res.data;
},error =>{
        // console.log(error.response.status)
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

    // if(error.response.status == 500){ // 服务器发生错误
    //     Notification({
    //         title: '错误',
    //         message: '服务器出错啦！',
    //         type: 'error'
    //     })
    // }

    // if(error.response.status == 504){ // 服务器发生错误
    //     Notification({
    //         position:"bottom-right",
    //         title: '信息提示',
    //         message: '请求超时啦！',
    //         type: 'error'
    //     })
    // }

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
            url = url.replace(`{${i}}`,patterns[i])
        }
    }

    return fly.request(url,data,{
        baseURL:process.env.NODE_ENV === "production"?"":"/api",//请求基地址
        method: methods.toLowerCase(),
        headers: header,
        timeout:5000 //超时设置为5s
    })
}

