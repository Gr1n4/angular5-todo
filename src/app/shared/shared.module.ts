import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  MatFormFieldModule,
  MatInputModule
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
