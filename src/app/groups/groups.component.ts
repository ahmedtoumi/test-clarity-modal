import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ClarityModule, ClrModal, fade } from '@clr/angular';
import { KcmGroupService } from '../../services/kcmgroup.service';
import { KcmGroup } from '../../entities/kcmgroup';
import { CommonModule, NgFor } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [ClarityModule, NgFor, CommonModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent implements OnInit{
  kcmGroups : KcmGroup[];
  deleteGroupModalOpen: boolean = false;
  skipAnimation: string = "true";

  constructor(private menuService : MenuService, private kcmGroupService : KcmGroupService) {
    this.kcmGroups = this.kcmGroupService.getKcmGroups();
    console.log("load from construct !");
   }

  ngOnInit() {
    this.menuService.seHideMenu(true);
    this.kcmGroups = this.kcmGroupService.getKcmGroups();
    console.log("load from ngOnInit !");
  }

  getLabelStyle(color: string) : string{
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
