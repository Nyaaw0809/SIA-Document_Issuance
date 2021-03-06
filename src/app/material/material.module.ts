import { NgModule } from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';


const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  LayoutModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule

]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents

  ]
})
export class MaterialModule { }
