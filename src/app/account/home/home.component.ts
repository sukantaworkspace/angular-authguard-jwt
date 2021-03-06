import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../news-service.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { News } from './news.model';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  results: Observable<News[]>;
  isLoading$: Observable<boolean>;
  newsObservable: BehaviorSubject<News[]> = new BehaviorSubject<News[]>(null);
  constructor(
    private newsService: NewsServiceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.startLoading();
    this.results = this.newsService.search(
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=put your api key here from newsapi.org'
    );
    this.results.subscribe((object: News[]) => {
      this.newsObservable.next(object);
      this.stopLoader();
    });
  }
  stopLoader() {
    this.authService.stopLoading();
  }
}
