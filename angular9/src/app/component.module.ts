import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ContainerComponent} from './container.component';
// import {HelloWorldComponent} from './hello-world.component';
import {ComponentDirective} from './component.directive';

export class ComponentService {
  componentOptions = {
    // @ts-ignore
    component: require('./hello-world.component').HelloWorldComponent,
    data: {name: 'Dr IQ', bio: 'Smart as they come'}
  };
}

@NgModule({
  declarations: [
    ContainerComponent,
    // HelloWorldComponent,
    ComponentDirective
  ],
  imports: [BrowserModule],
  providers: [ComponentService],
  // entryComponents: [HelloWorldComponent],
  bootstrap: [ContainerComponent],
})
export class ComponentModule {
}
