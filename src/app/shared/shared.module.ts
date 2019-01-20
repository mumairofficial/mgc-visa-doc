import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/component.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [CommonModule, RouterModule, ComponentsModule, ReactiveFormsModule]
})
export class SharedModule {}
