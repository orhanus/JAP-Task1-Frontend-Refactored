import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PaginatedResult } from '../models/paginations';
import { Rating } from '../models/rating';
import { Show } from '../models/show';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  url = environment.apiUrl + 'shows/';
  paginatedResult: PaginatedResult<Show[]> = new PaginatedResult<Show[]>();

  constructor(private http: HttpClient) { }

  getShows(showType: string, page?: number, itemsPerPage?: number, searchParameters?: string){
    let params = new HttpParams();

    if(page !== null && itemsPerPage !== null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
      params = params.append('searchParams', searchParameters === "" ? null : searchParameters);
    }
    return this.http.get<Show[]>(this.url + showType, {observe: 'response', params}).pipe(
      map(response => {
        this.paginatedResult.result = response.body;
        if(response.headers.get('Pagination') !== null){
          this.paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return this.paginatedResult;
      })
    );
  }
  addRating(rating: Rating){
    return this.http.post<Show[]>(`${this.url}${rating.showId}/rate`, { score: rating.score });
  }
}
