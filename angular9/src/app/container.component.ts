import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';
import {ComponentDirective} from './component.directive';
import {DefinitionComponent} from './definition.component';
import {HelloWorldComponent} from './hello-world.component';
import {ComponentService} from './component.module';

@Component({
  selector: 'app-root',
  template: `
    <ng-template isComponent></ng-template>
  `
})
export class ContainerComponent implements OnInit, OnDestroy {
  @ViewChild(ComponentDirective, {static: true}) isComponent: ComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private CS: ComponentService) {
  }

  ngOnInit() {
    this.loadComponent(this.CS.componentOptions);
  }

  ngOnDestroy() {
  }

  loadComponent(componentOptions) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentOptions.component);

    const viewContainerRef = this.isComponent.viewContainerRef;
    viewContainerRef.clear();

    // @ts-ignore
    const componentRef = viewContainerRef.createComponent<DefinitionComponent>(componentFactory);
    componentRef.instance.data = componentOptions.data;
  }
}
