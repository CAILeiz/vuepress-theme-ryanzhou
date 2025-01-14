module.exports = {
  title: "Welcome To Ryan周 Blog",
  dest: "example/dist",
  plugins: {
    "@vuepress/back-to-top": true,
  },
  theme: require.resolve("../../packages/vuepress-theme-gnas"),
  themeConfig: {
    smoothScroll: true,
    themeMode: {
      enable: true,
      default: "light",
    },
    // 锁定页面默认密码，请使用MD5，4位数MD5加密后的密码
    password: "81dc9bdb52d04dc20036dbd8313ed055",
    // 首屏加载动画
    firstLoading: true,
    firstLoadingDuration: 2000,
    // blog文章所在位置
    blogBase: "/views/blog",
    // blogItem配置
    blogItemCofig: {
      // 日期格式化
      dateFormat: "MM dd,yyyy",
    },
    // 全站访问量
    globalAccess: true,
    // 评论系统 文档：https://valine.js.org/，支持valine所有配置
    valine: {
      enable: true,
      appId: "xxx",
      appKey: "xxx",
    },

    // 加入公益404计划，默认为true
    notFoundPagePublicWelfare: false,
    // 音乐播放器
    music: {
      enable: true,
      autoplay: false,
      list: [
        {
          name: "刀郎 - 罗刹海市",
          href: "/music/刀郎 - 罗刹海市.mp3",
        },
        {
          name: "萧潇 - 爱要坦荡荡",
          href: "/music/萧潇 - 爱要坦荡荡.mp3",
        },
        {
          name: "Fine乐团 - 没有人不比我快乐",
          href: "/music/Fine乐团_没有人不比我快乐.mp3",
        },
        {
          name: "Fine乐团 - 呼吸决定",
          href: "/music/Fine乐团_呼吸决定.mp3",
        },
      ],
    },

    logo: "/img/logo.png",
    home: {
      titleLogo: "/img/titleLogo.gif",
      title: "说说我的生活",
      description: "More Boos. More Think. Enjoy Life",

      bannerList: ["/img/bg1.jpg", "/img/bg2.jpg", "/img/bg3.jpg"],
      authorConfig: {
        enable: true,
        avatar: "/img/avatar.jpg",
        bookmark: true,
        github: "https://github.com/CAILeiz",
        qq: 1912956608,
        wx: "1912956608",
        email: "1912956608@qq.com",
        alipay: "/img/alipay_ercode.jpg",
      },
      loveConfig: {
        enable: true,
        boy: "/img/boy.jpg",
        girl: "/img/girl.jpg",
        startDay: "2022/12/18",
      },
      carouselConfig: {
        enable: true,
        list: [
          {
            title: "日记",
            content: "做一个热爱生活的人，把生活记录下来。",
            bg: "/img/carousel1.jpg",
          },
          {
            title: "学习",
            content: "阶段性学习！！",
            bg: "/img/carousel2.jpg",
          },
        ],
      },
      tagConfig: {
        enable: true,
      },
    },
    // 备案号
    record: "浙ICP备00000000号-0",
    recordLink: "http://beian.miit.gov.cn/",

    // 作者
    author: "Ryan周",

    // 项目开始时间
    startYear: "2022",

    // 导航栏
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "归档",
        link: "/views/Archives",
      },
      {
        text: "标签",
        link: "/views/Tag",
      },
      {
        text: "笔记",
        link: "/views/notes/Web",
      },
      {
        text: "友链",
        link: "/views/Friend",
      },
      {
        text: "GitHub",
        link: "https://github.com/CAILeiz/vuepress-theme-gnas",
      },
    ],
    sidebar: [
      "/views/notes/Web",
      "/views/notes/Test3",
      {
        title: "Test4",
        path: "/views/notes/Test4",
        groupClass: true,
      },
      {
        title: "Group 1",
        collapsable: false,
        path: "/views/notes/TestGroup",
        children: [
          "/views/notes/Test1",
          "/views/notes/Test2",
          {
            title: "测试下拉",
            collapsable: true,
            children: ["/views/notes/Test3", "/views/notes/Test4"],
          },
        ],
      },
    ],
    sidebarDepth: 0,
    activeHeaderLinks: false,

    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    tagList: [
      {
        name: "Test",
        type: "test",
      },
      {
        name: "vue",
        type: "vue",
      },
      {
        name: "css",
        type: "css",
      },
      {
        name: "javascript",
        type: "js",
      },
      {
        name: "小程序",
        type: "applets",
      },
      {
        name: "vuepress",
        type: "vuepress",
      },
      {
        name: "转",
        type: "info",
      },
      {
        name: "music",
        type: "music",
        icon: "gnas-i gnas-i-musicnote",
      },
      {
        name: "奇闻异事",
        type: "anecdote",
      },
      {
        name: "movie",
        type: "movie",
      },
      {
        name: "git",
        type: "git",
      },
      {
        name: "工具",
        type: "tool",
      },
      {
        name: "算法",
        type: "algorithm",
      },
    ],

    live2d: {
      model: "hijiki",
    },
  },
};
