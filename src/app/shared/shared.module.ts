import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule} from '@angular/material';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCardModule
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [],
  exports: [
    ...modules
  ]
})
export class SharedModule {}
