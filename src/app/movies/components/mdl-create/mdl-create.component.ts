import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { movieList } from '../../pages/movies-list/movies-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-mdl-create',
  templateUrl: './mdl-create.component.pug',
  styleUrls: ['./mdl-create.component.scss']
})
export class MdlCreateComponent implements OnInit {
	formMovie:any;
	formStatus:any = { change : false };
	states:any = [
		{ codigo : 'Activo', name : 'Activo' },
		{ codigo : 'Inactivo', name : 'Inactivo' }
	]
	title:string;
	constructor(public dialogRef: MatDialogRef<MdlCreateComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any,
			private formBuilder: FormBuilder,
			private moviesSrv : MoviesService) { }

	ngOnInit() {
		this.title = this.data && this.data.movie ? 'Editar película' : 'Nueva película';
		this.formMovie = this.buildForm(this.data && this.data.movie ? this.data.movie : null);
	}

	buildForm(movie?:movieList) :FormGroup {
		let id   		= movie ? movie.id : null,
			name 		= movie ? movie.name : '',
			date_push 	= movie ? movie.date_push : '',
			state      	= movie ? movie.state : '';

        const form = this.formBuilder.group({
			id : [ id ],
            name : [ name , [Validators.required]],
			date_push : [ date_push , [Validators.required, Validators.maxLength(10)]],
			state : [ state , [Validators.required]]
        });
        form.valueChanges.subscribe(() => {
            this.formStatus.change = true;
        })
        return form;
	}

	registerMovie(): void {
		this.moviesSrv.moviesChange.next(this.formMovie.value);
		// console.log(this.formMovie.value);
	}

	onNoClick() {
		this.dialogRef.close();
	}
}
