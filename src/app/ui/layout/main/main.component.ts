import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons } from '@cds/core/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, ClarityModule,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
