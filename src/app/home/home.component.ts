import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any[]=[]
  img:string='https://image.tmdb.org/t/p/w500'
  
  constructor(private _movies :MoviesService){
     
  }
  ngOnInit(): void {
    this.displayMovies(1)
  }
  displayMovies(pagenum:number){
    this._movies.getmovies(pagenum).subscribe((data)=>{
      // console.log(data);
       this.movies=data.results
    })
  }

}
