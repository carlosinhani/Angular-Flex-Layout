import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({

  imports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],

  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ]
})

export class MaterialModule { }
