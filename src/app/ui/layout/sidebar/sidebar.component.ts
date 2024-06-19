import { CommonModule, NgClass } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component, OnDestroy } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@clr/core/icon';
import '@cds/core/icon/register.js';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { Subscription } from 'rxjs';
ClarityIcons.addIcons(homeIcon);

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ClarityModule, CommonModule, NgClass, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnDestroy {

  activeIndex: number = 0
  disabled: boolean = false;
  collapsed : boolean = false;
  hideMenuSubscription: Subscription;

  constructor(private menuService: MenuService) {
    this.hideMenuSubscription = this.menuService.hideMenu$.subscribe(hideMenu => {
      this.disabled = hideMenu;
      this.collapsed = hideMenu;
    });
  }

  ngOnDestroy() {
    this.hideMenuSubscription.unsubscribe();
  }
}
