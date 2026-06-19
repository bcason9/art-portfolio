import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';


@Component({
  selector: 'app-about',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
