module.exports = {
    title: "vuepress-theme-gnas",
    dest: 'example/public',
    theme: require.resolve('../../packages/vuepress-theme-gnas'),
    themeConfig: {
        themeMode: {
            enable: true,
            default: 'light'
        },
        // blog文章所在位置
        blogBase: '/views/blog',
        // blogItem配置
        blogItemCofig: {
            // 日期格式化
            dateFormat: 'MM dd,yyyy',
        },
        // 评论系统 文档：https://valine.js.org/，支持valine所有配置
        valine:{
            enable:true,
            appId:'xxx',
            appKey:'xxx'
        },

        logo: '/img/logo.png',
        home: {
            titleLogo: '/img/titleLogo.gif',
            title: '说说我的生活',
            description: 'Think twice before you do.',

            bannerList: [
                '/img/bg1.jpg',
                '/img/bg2.jpg',
                '/img/bg3.jpg',
            ],
            authorConfig: {
                enable: true,
                avatar: '/img/avatar.jpg',
                bookmark: true,
                github: 'https://github.com/ShnHz',
                qq: 123456789,
                wx: '123456789',
                email: '123456789@qq.com',
                alipay: '/img/alipay_ercode.jpg'
            },
            loveConfig: {
                enable: true,
                boy: '/img/boy.jpg',
                girl: '/img/girl.jpg',
                startDay: '2019/06/29'
            },
            carouselConfig: {
                enable: true,
                list: [{
                        title: '日记',
                        content: '做一个热爱生活的人，把生活记录下来。',
                        bg: '/img/carousel1.jpg',
                    },
                    {
                        title: '学习',
                        content: '阶段性学习！！',
                        bg: '/img/carousel2.jpg',
                    },
                ]
            },
            tagConfig: {
                enable: true,
            }
        },
        // 备案号
        record: '浙ICP备00000000号-0',
        recordLink: 'http://beian.miit.gov.cn/',

        // 作者
        author: '野宁新之助',


        // 项目开始时间
        startYear: '2022',

        // 导航栏
        nav: [{
                text: '首页',
                link: '/',
            },
            {
                text: '归档',
                link: '/views/file/',
            },
            {
                text: '标签',
                link: '/views/tag/'
            },
            {
                text: '友链',
                link: '/views/friend/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/ShnHz/vuepress-theme-gnas'
            }
        ],
        friendLink: [{
            "name": "野宁新之助",
            "href": "https://www.sanghangning.cn",
            "icon": "https://cdn.chenyingshuang.cn/index/avatar.jpg",
            "description": "说说我的生活"
        }],

        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    }
}