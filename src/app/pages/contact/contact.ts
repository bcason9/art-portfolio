import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';


@Component({
  selector: 'app-contact',
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
