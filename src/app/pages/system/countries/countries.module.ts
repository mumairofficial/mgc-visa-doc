import { NgModule } from "@angular/core";
import { CountriesComponent } from "./countries.component";
import { CountriesRoutingModule } from "./countries-routing.module";

@NgModule({
    declarations: [ CountriesComponent ],
    imports: [ CountriesRoutingModule ]
})
export class CountriesModule {}
