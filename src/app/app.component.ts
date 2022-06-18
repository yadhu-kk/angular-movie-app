import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmdbserviceService } from './omdbservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'omdb_project';
  movieName: string ='';
  movieData: any

  constructor(private omdb:OmdbserviceService) { }

  ngOnInit(){
    this.omdb.getMovieData('').subscribe(data => {
      this.movieData= data.Search;
    })
  }
  onClick() {
    this.omdb.getMovieData(this.movieName).subscribe(data =>{
      this.movieData = data.Search;
    })
  }
}

  

