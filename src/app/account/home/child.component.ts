import { Component, OnInit, Input } from '@angular/core';
import { News } from './news.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input('news') newsItem: News;
  constructor() { }

  ngOnInit(): void {
    /* if (this.newsItem.title) {
      this.newsItem.title = this.newsItem.title.slice(0, 75);
    }
    if (this.newsItem.author) {
      this.newsItem.author = this.newsItem.author.slice(0, 30);
    }

    if (this.newsItem.description) {
      this.newsItem.description = this.newsItem.description.slice(0, 165);
    }

    if (this.newsItem.content) {
      this.newsItem.content = this.newsItem.content.slice(0, 140);
    }*/
    if (!this.newsItem.urlToImage) {
      let random = Math.floor(Math.random() * 100);
      let gender = ['men', 'women'];
      let genderSelection = Math.floor((Math.random() * 100) % 2);
      this.newsItem.urlToImage =
        'https://randomuser.me/api/portraits/' +
        gender[genderSelection] +
        '/' +
        random +
        '.jpg'; //https://randomuser.me/api/portraits/men/55.jpg
    }
    if (this.newsItem.publishedAt) {
      let pastTime = Date.now();
      if (this.newsItem.publishedAt) {
        pastTime = new Date(this.newsItem.publishedAt).getTime();
      }
      let currentTime = Date.now();
      let calmint = Math.floor((currentTime - pastTime) / 1000 / 60);
      let calHour = Math.floor(calmint / 60);
      let calDays = Math.floor(calHour / 24);
      if (calDays > 1) {
        this.newsItem.publishedAt = calDays + ' day ago';
      } else if (calDays == 1) {
        this.newsItem.publishedAt = 'A day ago';
      } else if (calHour > 1) {
        this.newsItem.publishedAt = calHour + ' hours ago';
      } else if (calHour == 1) {
        this.newsItem.publishedAt = 'About an hour ago';
      } else if (calmint > 1) {
        this.newsItem.publishedAt = calmint + ' minutes ago';
      } else if (calmint == 1) {
        this.newsItem.publishedAt = 'Just a minute ago';
      } else if (calmint == 0) {
        this.newsItem.publishedAt = 'Few seconds ago';
      }
    }
  }
}
