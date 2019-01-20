import { NgModule } from "@angular/core";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SharedModule } from "@shared/shared.module";
import { SettingsLayoutComponent } from "./components/layout/settings-layout.component";
import { SettingsMenuComponent } from "./components/settings-menu/settings-menu.component";

@NgModule({
  declarations: [ SettingsLayoutComponent, SettingsMenuComponent ],
  imports: [ SharedModule, SettingsRoutingModule ]
})
export class SettingsModule {}
