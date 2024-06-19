import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from "@clr/angular";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports :[
  ]
})
export class UiModule { }
