import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatChipsModule,
];

@NgModule({
  imports: [CommonModule, materialModules],
  exports: [materialModules],
  declarations: [],
})
export class MaterialModule {}
