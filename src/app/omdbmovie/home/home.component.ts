import { Component, OnInit } from '@angular/core';
import { OmdbserviceService } from 'src/app/omdbservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
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
