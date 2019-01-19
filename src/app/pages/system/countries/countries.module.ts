import { NgModule } from '@angular/core';
import { CountriesComponent } from './countries.component';
import { CountriesRoutingModule } from './countries-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    declarations: [ CountriesComponent ],
    imports: [ CountriesRoutingModule, SharedModule ]
})
export class CountriesModule {}
