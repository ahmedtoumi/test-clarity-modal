import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { ClarityModule, ClrModal } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, shieldIcon, homeIcon, angleIcon,cogIcon, dashboardIcon, hostGroupIcon,
plusCircleIcon, pencilIcon, trashIcon, deployIcon } from '@cds/core/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent, ClarityModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    ClarityIcons.addIcons(userIcon,shieldIcon, angleIcon, cogIcon, homeIcon,dashboardIcon, hostGroupIcon, plusCircleIcon,
      pencilIcon, trashIcon, deployIcon);
  }
  
  title = 'kcm-angular';
}
