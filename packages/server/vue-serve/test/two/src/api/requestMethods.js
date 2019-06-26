import { request  } from "@/utils";
import apis from './apis'


export default {
    cityList() {  // 获取城市
        return request(apis.GET_CITY_LIST)
    },
    newsList(obj) {  // 新闻列表
        return request(apis.NEWS_LIST, {
            data: obj
        })
    },
    newsDetial(obj) {  // 新闻详情
        return request(apis.NEWS_DETIAL, {
            data: obj
        })
    },
    teacherList(obj) {  // 获取教师列表
        return request(apis.TEACHER_LIST, {
            data: obj
        })
    },
    branchSchool(obj) {  // 获取分校
        return request(apis.GET_BRANCH_SCHOOL, {
            data: obj
        })
    },
    caseList(obj) {  // 成功案例列表
        return request(apis.CASE_LIST, {
            data: obj
        })
    },
    caseDetial(obj) {  // 成功案例详情
        return request(apis.CASE_DETIAL, {
            data: obj
        })
    },
}