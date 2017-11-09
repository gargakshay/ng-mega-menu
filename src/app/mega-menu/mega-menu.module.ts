import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MegaMenuComponent } from './mega-menu.component';
import { MaterialModule } from './material-module';

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [MegaMenuComponent],
    declarations: [MegaMenuComponent]
})
export class MegaMenuModule {

}
