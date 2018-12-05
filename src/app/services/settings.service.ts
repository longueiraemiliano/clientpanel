import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: true
  }
  
  constructor() { 
    if (localStorage.getItem("clientpanel-settings") != null) {
      this.settings = JSON.parse(localStorage.getItem("clientpanel-settings"));
    }
  }

  getSettings() : Settings {
    return this.settings;
  }

  changeServiceSettings(settings: Settings) {
    this.settings = settings;
    localStorage.setItem("clientpanel-settings", JSON.stringify(this.settings));
  }
}
