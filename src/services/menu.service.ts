import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private hideMenu = new Subject<boolean>();
  hideMenu$ = this.hideMenu.asObservable();

  seHideMenu(data: boolean) {
    this.hideMenu.next(data);
  }
}