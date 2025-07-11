import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'calculadora';
  valorA:number = 0;
  valorB:number = 0;
  total:number = 0;

  sumar() {
    this.total = this.valorA + this.valorB
  }
}
