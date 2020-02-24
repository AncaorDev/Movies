import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdlCreateComponent } from '../../components/mdl-create/mdl-create.component';
import { MoviesService } from '../../movies.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
export interface movieList {
    id: number;
    name:string;
    date_push:string;
    state:string
}


const ELEMENT_DATA: movieList[] = [
    {
        id : 1,
        name : 'Prueba',
        date_push : '12/12/1995',
        state : 'Activo'
    }
];
@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.pug',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'date_push', 'state', 'actions'];
    dataSource = ELEMENT_DATA;
    sub_movies = new Subscription();
    dialog_create:any;

    constructor(public dialog: MatDialog,
                private moviesSrv : MoviesService) { }

	ngOnInit() {
        this.dataSource = ELEMENT_DATA;
        this.sub_movies = this.moviesSrv.moviesChange.pipe(filter(a => a != null)).subscribe((a:movieList) => {
            if(a.id) {
                this.dataSource.map((b, i) => {
                    (b.id == a.id) && (this.dataSource[i] = a)
                })
            } else {
                if(this.dataSource.length > 0) {
                    let ids = this.dataSource.map(a => a.id);
                    let max = Math.max(...ids);
                    a.id = max + 1;
                } else {
                    a.id = 1;
                }
                this.dataSource.push(a)
            }
            this.dataSource = [...this.dataSource];
            if( this.dialog_create) this.dialog_create.close();
        })
    }
    createEditMovie(movie?:movieList) {
        this.dialog_create = this.dialog.open(MdlCreateComponent, {
			maxWidth 	: '720px',
			minWidth    : '320px',
			data		: movie ? {movie} : null,
			hasBackdrop : true
        });

    }
    deleteMovie(movie:movieList) {
        this.dataSource = this.dataSource.filter(a => a.id != movie.id);
    }

    ngOnDestroy() {
        this.sub_movies.unsubscribe()
    }
}