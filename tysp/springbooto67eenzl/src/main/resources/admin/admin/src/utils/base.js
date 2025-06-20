const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto67eenzl/",
            name: "springbooto67eenzl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto67eenzl/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot体育商品推荐设计与实现"
        } 
    }
}
export default base
