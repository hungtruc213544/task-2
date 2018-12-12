import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/share/service/film.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'film-detail',
    templateUrl: 'film-detail.component.html',
    styleUrls: ['film-detail.component.scss']
})

export class FilmDetailComponent implements OnInit, OnDestroy {
    paramId: string;
    dataCompleted: any = [];
    dataCharacters: any = [];
    dataPlanets: any = [];
    dataSpecies: any = [];
    dataVehicles: any = [];
    dataStarships: any = [];
    idPlanets: number;
    idSpecies: number;
    idCharacters: number;
    idVehicles: number;
    idStarships: number;

    private subscriptions = new Subscription();

    constructor(private route: ActivatedRoute, private filmService: FilmService) {
        this.paramId = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.subscriptions = this.filmService.getFilmDetail(this.paramId).subscribe(val => {
            this.dataCompleted = val;

            //Get Characters
            for (const character of this.dataCompleted.characters) {
                this.idCharacters = character.split('/')[5];
                this.filmService.getCharacters(this.idCharacters).subscribe(data => {
                    this.dataCharacters.push(data);
                })
            }
            //Get Planets
            for (const planet of this.dataCompleted.planets) {
                this.idPlanets = planet.split('/')[5];
                this.filmService.getPlanets(this.idPlanets).subscribe(data => {
                    this.dataPlanets.push(data);
                });
            }
            //Get Starships
            for (const starship of this.dataCompleted.starships) {
                this.idStarships = starship.split('/')[5];
                this.filmService.getStarships(this.idStarships).subscribe(data => {
                    this.dataStarships.push(data);
                })
            }
            //Get Vehicles
            for (const vehicle of this.dataCompleted.vehicles) {
                this.idVehicles = vehicle.split('/')[5];
                this.filmService.getVehicles(this.idVehicles).subscribe(data => {
                    this.dataVehicles.push(data);
                })
            }
            //Get Species
            for (const specie of this.dataCompleted.species) {
                this.idSpecies = specie.split('/')[5];
                this.filmService.getSpecies(this.idSpecies).subscribe(data => {
                    this.dataSpecies.push(data);
                })
            }

        })
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

}
