import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';


@Component({
  selector: 'app-contact',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
