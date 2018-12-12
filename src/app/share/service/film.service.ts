import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiClient } from './api-client.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FilmService {
    constructor(private apiClient: ApiClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        })
    };

    private dataToogle = new Subject<any>();
    loadDataToogle = this.dataToogle.asObservable();

    private dataFilmDetail = new Subject<any>();
    loadDataFilmDetail = this.dataFilmDetail.asObservable();

    setDataToogle(value: any) {
        this.dataToogle.next(value);
    }

    setDataFilmDetail(value: any) {
        this.dataFilmDetail.next(value);
    }

    getAllFilm(): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/films`, undefined, this.httpOptions);
    }

    getFilmDetail(id): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/films/${id}`, undefined, this.httpOptions);
    }

    getCharacters(id): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/people/${id}`, undefined, this.httpOptions);
    }

    getPlanets(id): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/people/${id}`, undefined, this.httpOptions);
    }

    getVehicles(id): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/vehicles/${id}`, undefined, this.httpOptions);
    }

    getStarships(id): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/starships/${id}`, undefined, this.httpOptions);
    }

    getSpecies(id): Observable<any> {
        return this.apiClient.get(`${environment.AUTH_SERVICE_ENDPOINT}/species/${id}`, undefined, this.httpOptions);
    }
}