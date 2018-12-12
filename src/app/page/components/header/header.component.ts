import { Component } from '@angular/core';
import { FilmService } from 'src/app/share/service/film.service';
import { Router } from '@angular/router';


@Component({
    selector: 'film-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    isOpen: boolean = false;

    constructor(private route: Router) { }

    toogleMenu() {
        this.isOpen = !this.isOpen;
    }

    backtoHome() {
        this.toogleMenu();
        this.route.navigate(['/']);
    }
}
