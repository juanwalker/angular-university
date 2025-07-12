import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  imports: [],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.css'
})
export class Viewchild {

  @ViewChild('referenciaInput') inputElemento!: ElementRef;

  cambiarTexto() {
    this.inputElemento.nativeElement.value = "Texto cambiado"
  }

}
