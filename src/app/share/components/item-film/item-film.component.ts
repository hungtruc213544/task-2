import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../service/film.service';

@Component({
    selector: 'film-item',
    styleUrls: ['./item-film.component.scss'],
    templateUrl: './item-film.component.html',
})
export class ItemFilmComponent implements OnChanges {
    @Input() valueInput: any;
    dataCompleted: any;
    constructor(private router: Router, private filmService: FilmService) { }

    ngOnChanges(changes: SimpleChanges) {
        const temp = changes.valueInput.currentValue;
        this.dataCompleted = temp;
    }

    goFilmDetail(id: number) {
        this.router.navigateByUrl(`/detail/${id}`);
    }
}
