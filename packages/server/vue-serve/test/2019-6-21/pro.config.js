
module.exports = {
    // 开发环境下
    dev: {
    },

    // 生产环境
    build: {
        
    },
    public:{
        externals: {// 排除打包库
            "vue":["Vue"],
        },
        webpackConfig(config) {
            // config webpack的配置
        }
    }

  
};