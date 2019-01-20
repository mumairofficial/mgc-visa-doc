import { Injectable } from "@angular/core";
import { BreadCrumb } from "@shared/models";

@Injectable()
export class SettingsService {
  public breadCrumb: Array<BreadCrumb> = [];
  
  constructor() {
    console.log('setting service')
  }
}
