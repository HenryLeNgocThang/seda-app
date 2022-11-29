import { Component } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/routerTransition';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [appModuleAnimation()]
})
export class HomeComponent {

}
