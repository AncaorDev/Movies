import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'movies';
	menus:any = [
		{icon : 'home', title : 'Dashboard' , link : 'home' , exact : true},
		{icon : 'movie', title : 'Peliculas', link : 'movies' , exact : true},
		{icon : 'loop', title : 'Turnos' , link : 'turns' , exact : true},
		{icon : 'people', title : 'Administradores' , link : 'users' , exact : true},
		{icon : 'person', title : 'Perfil' , link : 'profile' , exact : true},
		{icon : 'input', title : 'Cerrar Sesión', link : 'logout' , exact : true}
	]
	@ViewChild('sidenav', {static : true}) sidenav:MatSidenav;

	constructor() {

	}

	ngOnInit() {
		this.sidenav.open()
	}
}
