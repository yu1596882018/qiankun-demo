import {enableProdMode, NgZone} from '@angular/core';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Router} from '@angular/router';
import {AppModule} from './app/app.module';
import {ComponentModule} from './app/component.module';
import {environment} from './environments/environment';
import {singleSpaAngular, getSingleSpaExtraProviders} from 'single-spa-angular';
import {singleSpaPropsSubject} from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

const {bootstrap, mount, unmount} = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    console.log('singleSpaProps', singleSpaProps);
    singleSpaPropsSubject.next(singleSpaProps);
    // 判断是否引入单个组件为微应用
    // @ts-ignore
    if (!singleSpaProps.isComponentContainer) {
      return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
    } else {
      return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(ComponentModule);
    }
  },
  template: '<app-root />',
  Router,
  NgZone,
});

export async function bootstrapExt(options, props) {
  console.log('bootstrapExt', arguments);
  // @ts-ignore
  return await bootstrap(options, props);
}

export async function mountExt(options, props) {
  if (!options.isComponentContainer) {
    if (options.container) {
      const containerComponent = options.container.querySelector('container-component');
      if (containerComponent) {
        containerComponent.parentElement.removeChild(containerComponent);
      }
    }
  } else {
    if (options.container) {
      const appRoot = options.container.querySelector('app-root');
      if (appRoot) {
        appRoot.parentElement.removeChild(appRoot);
      }
    }
  }

  console.log('mountExt', arguments);
  // @ts-ignore
  return await mount(options, props);
}

export async function unmountExt(options, props) {
  console.log('unmountExt', arguments);
  // @ts-ignore
  return await unmount(options, props);
}

export {bootstrapExt as bootstrap, mountExt as mount, unmountExt as unmount};
