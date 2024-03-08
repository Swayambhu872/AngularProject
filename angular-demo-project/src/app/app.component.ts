import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDosComponent } from './myComponents/to-dos/to-dos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo-project';

  constructor(){
    setTimeout(() => {
        this.title =  "Welcome to Angular!";
      }, 2000);
    }
  }

