import { Routes } from '@angular/router';
import { GiftIdeasComponent } from './gift-ideas/gift-ideas.component';
import { PersonalizedGiftsComponent } from './personalized-gifts/personalized-gifts.component';
import { HeaderComponent } from './header/header.component';
import { IndianDecorComponent } from './indian-decor/indian-decor.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  {path:'home', component: HomeComponent},
  { path: 'gift-ideas', component: GiftIdeasComponent },
  { path: 'personalized-gifts', component: PersonalizedGiftsComponent },
  { path: 'indian-decor', component: IndianDecorComponent },
  { path: 'contact-us', component: ContactUsComponent }
];
