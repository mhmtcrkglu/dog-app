import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Breed } from './breed.model';  
import { BreedAnalytics } from './breed-analytics.model';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getBreeds(size: number, page: number): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.baseUrl}/breeds/list/all?size=${size}&page=${page}`)
  }
  

  getBreedDetails(id: string): Observable<Breed> {
    return this.http.get<Breed>(`${this.baseUrl}/breeds/detail/${id}`);
  }

  getAnalytics(): Observable<BreedAnalytics[]> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:password')
    })
    return this.http.get<{ [key: number]: BreedAnalytics }>(`${this.baseUrl}/admin/report/tracking`, { headers })
    .pipe(map(response => Object.values(response)));
  }
}