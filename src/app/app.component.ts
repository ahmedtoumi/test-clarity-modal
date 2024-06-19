import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule, ClrModal } from '@clr/angular';
import '@cds/core/icon/register.js';
import {
  ClarityIcons, userIcon, shieldIcon, homeIcon, angleIcon, cogIcon, dashboardIcon, hostGroupIcon,
  plusCircleIcon, pencilIcon, trashIcon, deployIcon
} from '@cds/core/icon';
import { KcmGroupService } from '../services/kcmgroup.service';
import { KcmGroup } from '../entities/kcmgroup';
import { CommonModule, NgClass, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClarityModule, NgClass, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  deleteGroupModalOpen: boolean = false;
  title = 'kcm-angular';
  kcmGroups: KcmGroup[];

  constructor(private kcmGroupService: KcmGroupService) {
    ClarityIcons.addIcons(userIcon, shieldIcon, angleIcon, cogIcon, homeIcon, dashboardIcon, hostGroupIcon, plusCircleIcon,
      pencilIcon, trashIcon, deployIcon);
    this.kcmGroups = this.kcmGroupService.getKcmGroups();
  }

  getLabelStyle(color: string): string {
    switch (color) {
      case 'red':
        return 'label label-danger';
      case 'orange':
        return 'label label-warning';
      case 'blue':
        return 'label-info';
      case 'green':
        return 'label label-success';
      default:
        return 'label';
    }
  }
}
