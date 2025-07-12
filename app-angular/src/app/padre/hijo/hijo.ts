import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
    @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    //Emitir el evento con un mensaje (se emite con un string)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre con @output');
  }
  // ! Operador non null assertion
  // confie en que esta propiedad va a ser inicializada posteriormente
  @Input() mensaje!: string;
}
