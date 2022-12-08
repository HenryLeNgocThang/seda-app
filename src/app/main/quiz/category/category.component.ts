import { Component } from '@angular/core';
import { appModuleAnimation } from '../../../shared/animations/routerTransition';

@Component({
  templateUrl: './category.component.html',
  animations: [appModuleAnimation()]
})
export class CategoryComponent {
  constructor() {
  }
}
