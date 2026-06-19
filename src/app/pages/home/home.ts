import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';


@Component({
  selector: 'app-home',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
