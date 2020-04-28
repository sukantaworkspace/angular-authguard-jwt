import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../account/auth/services/auth.service';
import { User } from '../account/auth/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  isLoading$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.isLoading$ = this.authService.isLoading;

    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
