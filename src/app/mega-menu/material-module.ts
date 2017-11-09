import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';


const MODULE_ARRAY = [BrowserAnimationsModule, MatButtonModule, MatMenuModule, FlexLayoutModule, MatListModule];
@NgModule({
    imports: MODULE_ARRAY,
    exports: MODULE_ARRAY
})
export class MaterialModule { }
