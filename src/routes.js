import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import Table from './pages/nav1/Table.vue'
import Form from './pages/nav1/Form.vue'
import user from './pages/nav1/user.vue'
import Page4 from './pages/nav2/Page4.vue'
import Page5 from './pages/nav2/Page5.vue'
import Page6 from './pages/nav3/Page6.vue'
import echarts from './pages/charts/echarts.vue'
import printpage from "./pages/print/index.vue"
import firstpage from "./pages/print/firstpage.vue"
let routes = [{
    path: '/login',
    component: Login,
    name: '',
    hidden: true
},
{
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
},
//{ path: '/main', component: Main },
{
    path: '/',
    component: Home,
    name: '工作台',
    iconCls: 'ios-home', //图标样式class
    children: [
        { path: '/main', component: Main, name: '主页', hidden: true },
        {
            path: '/print', component: printpage, name: '打印证件',
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched
                { path: 'page0', name: '打印首页', component: firstpage },
                {
                    path: 'page1', name: '打印第2页', component: function (resolve) {
                        require(["./pages/print/secondpage.vue"], resolve)
                    }
                },
                { path: 'page2', name: '打印第3页', component: function (resolve) {
                        require(["./pages/print/thirdpage.vue"], resolve)
                    } },
                { path: 'page3', name: '打印第4页', component: function (resolve) {
                        require(["./pages/print/fourthpage.vue"], resolve)
                    } },
                { path: 'page4', name: '打印末页', component: function (resolve) {
                        require(["./pages/print/endpage.vue"], resolve)
                    } },
            ]
        },
        // { path: '/table', component: Table, name: '表格' },
        // { path: '/form', component: Form, name: '表单' },
        // { path: '/user', component: user, name: '列表' },
    ]
},
// {
//     path: '/',
//     component: Home,
//     name: '导航二',
//     iconCls: 'ios-paw',
//     children: [
//         { path: '/page4', component: Page4, name: '页面4' },
//         { path: '/page5', component: Page5, name: '页面5' }
//     ]
// },
// {
//     path: '/',
//     component: Home,
//     name: '',
//     iconCls: 'social-freebsd-devil',
//     leaf: true, //只有一个节点
//     children: [
//         { path: '/page6', component: Page6, name: '证书打印' }
//     ]
// },
{
    path: '/',
    component: Home,
    name: '报表',
    iconCls: 'stats-bars',
    children: [
        { path: '/echarts', component: echarts, name: 'echarts' }
    ]
},
{
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
}
];

export default routes;