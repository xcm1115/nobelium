import BLOG from '@/blog.config';

const lang = {
  en: {
    NAV: {
      INDEX: 'Posts',
      // RSS: 'RSS',
      // SEARCH: 'Search',
      ABOUT: 'About',
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next',
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top',
    },
  },
  'zh-CN': {
    NAV: {
      INDEX: '博客',
      // RSS: '订阅',
      // SEARCH: '搜索',
      ABOUT: '关于',
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页',
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部',
    },
  },
};

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
      return lang['zh-CN'];
    case 'en':
    case 'en-us':
    default:
      return lang.en;
  }
};
