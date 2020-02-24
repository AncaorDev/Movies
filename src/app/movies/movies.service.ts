import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class MoviesService {
	moviesChange:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  	constructor() { }
}
