import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes-app';

  curso: string = 'Curso Spring 5 con Angular 12';
  profesor: string = 'Mariano J. Villalba';
}
