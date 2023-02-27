import { Component } from '@angular/core';

@Component({
  selector: 'root-directive',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-app';
  name: string = "Oisin";
  age: number = 20;
}
