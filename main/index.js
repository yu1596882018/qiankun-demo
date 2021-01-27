import 'zone.js'; // for angular subapp
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import './index.less';

/**
 * 主应用 **可以使用任意技术栈**
 */
import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = loading => render({ loading });

/**
 * Step2 注册子应用
 */
const isProduction = location.port === '80'

registerMicroApps(
  [
    {
      name: 'app-vue',
      entry: `${isProduction ? '' : '//' + location.hostname + ':7101'}/child/vue-history/`,
      container: '#subapp-viewport',
      loader,
      activeRule: '/app-vue',
    },
    {
      name: 'angular9',
      entry: '//' + location.hostname + (isProduction ? '/angular9' : ':7103'),
      container: '#subapp-viewport',
      loader,
      activeRule: '/angular9',
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/app-vue');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
