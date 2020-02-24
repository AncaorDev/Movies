import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MaterialModule } from '../material/material.module';
import { MdlCreateComponent } from './components/mdl-create/mdl-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [MoviesListComponent, MdlCreateComponent,MdlCreateComponent],
	entryComponents : [MdlCreateComponent],
	imports: [
		CommonModule,
		MoviesRoutingModule,
		MaterialModule,
		ReactiveFormsModule
	]
})
export class MoviesModule { }
