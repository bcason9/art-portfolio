import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';


@Component({
  selector: 'app-about',
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})

export class About {}
