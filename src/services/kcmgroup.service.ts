import { Injectable } from '@angular/core';
import { KcmGroup } from '../entities/kcmgroup';

@Injectable({
  providedIn: 'root'
})
export class KcmGroupService {

  kcmGroups: KcmGroup[] = [
    {
      id: 1,
      name: 'PROD',
      color: "red"
    },
    {
      id: 2,
      name: 'PREPROD',
      color: "orange"
    },
    {
      id: 3,
      name: 'UAT',
      color: "blue"
    },
    {
      id: 4,
      name: 'ETUDE',
      color: "green"
    },
    {
      id: 5,
      name: 'LOCAL',
      color: "green"
    }
  ];

  constructor() { }

  getKcmGroups() {
    return this.kcmGroups;
  }



}