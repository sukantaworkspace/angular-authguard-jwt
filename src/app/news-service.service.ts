import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from './account/home/news.model';
import { map } from 'rxjs/operators';
import { User } from './account/auth/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  search(url: string): Observable<News[]> {
    let apiURL = url;

    return this.http.get<any>(apiURL).pipe(
      map((data) =>
        data['articles'].map((obj) => {
          return new News(
            obj.source.name,
            obj.author,
            obj.title,
            obj.description,
            obj.url,
            obj.urlToImage,
            obj.publishedAt,
            obj.content
          );
        })
      )
    );
  }
}
