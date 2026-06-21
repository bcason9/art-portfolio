import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';


@Component({
  selector: 'app-galleries',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './galleries.html',
  styleUrl: './galleries.scss',
})
export class Galleries {}
