import {Component, Input} from '@angular/core';

import {DefinitionComponent} from './definition.component';

@Component({
  template: `
    <div>
      helloWorld
    </div>
  `
})
export class HelloWorldComponent implements DefinitionComponent {
  @Input() data: any;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
