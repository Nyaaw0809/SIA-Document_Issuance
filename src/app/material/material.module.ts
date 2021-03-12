import { NgModule } from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  LayoutModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  HttpClientModule,
  MatDialogModule

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
