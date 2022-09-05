import { NgModule } from  '@angular/core';
 
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatNativeDateModule} from  '@angular/material/core';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatCheckboxModule} from  '@angular/material/checkbox';
import {MatRadioModule} from  '@angular/material/radio';
import {MatListModule} from  '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

 
 
@NgModule({
imports: [
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule

],
exports: [
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule

]
})
 
export  class  MyMaterialModule { }