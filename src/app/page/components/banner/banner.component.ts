import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/share/service/film.service';


@Component({
  selector: 'film-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss']
})

export class BannerComponent implements OnInit {
    dataFilm: any;

    constructor(private filmService: FilmService) {}

    ngOnInit() {
        this.filmService.getAllFilm().subscribe(val => {
            this.dataFilm = val.results;
        })
    }
}
