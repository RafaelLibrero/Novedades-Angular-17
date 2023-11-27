import { Routes } from '@angular/router';
import { CondicionalesComponent } from './components/condicionales/condicionales.component';
import { HomeComponent } from './components/home/home.component';
import { BucleforComponent } from './components/buclefor/buclefor.component';
import { DeferComponent } from './components/defer/defer.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'condicionales', component: CondicionalesComponent},
    {path: 'for', component: BucleforComponent},
    {path: 'defer', component: DeferComponent}
];
