import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
	{ path: '', redirectTo: 'movies', pathMatch: 'full' },
	{ path : 'movies' , loadChildren : './movies/movies.module#MoviesModule'},
	{ path : '**' , component : NotFoundComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
