import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatListModule,
    MatIconModule, MatButtonModule, MatSidenavModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  menuItems = [
    {label: 'Home', route: '/home'},
    { label: 'Gift Ideas', route: '/gift-ideas' },
    { label: 'Personalized Gifts', route: '/personalized-gifts' },
    { label: 'Indian Decor', route: '/indian-decor' },
    { label: 'Contact Us', route: '/contact-us' }
  ];

  onSelect(item: any) {
    this.router.navigate([item.route]);
  }
}
