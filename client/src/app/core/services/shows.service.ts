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
  baseUrl = environment.apiUrl;
  paginatedResult: PaginatedResult<Show[]> = new PaginatedResult<Show[]>();

  constructor(private http: HttpClient) { }

  getShows(showType: string, page?: number, itemsPerPage?: number, searchParameters?: string){
    let params = new HttpParams();

    if(page !== null && itemsPerPage !== null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
      params = params.append('searchParams', searchParameters === "" ? null : searchParameters);
    }
    return this.http.get<PaginatedResult<Show[]>>(this.baseUrl + 'media/' + showType, {observe: 'response', params}).pipe(
      map(response => {
        this.paginatedResult.data = response.body.data;
        this.paginatedResult.pagination = response.body.pagination;

        return this.paginatedResult;
      })
    );
  }
  addRating(rating: Rating){
    return this.http.post<Show[]>(`${this.baseUrl}rating/${rating.showId}/rate`, { score: rating.score });
  }
}
