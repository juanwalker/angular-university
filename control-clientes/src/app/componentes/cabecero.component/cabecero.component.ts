import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-cabecero',
  imports: [RouterModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  isLoggedIn: boolean = false;
  loggedInUser: string | null = null;

  constructor(
    private loginService: LoginService,
    private route: Router
  
  ){

  }
  
  ngOnInit(){
    this.loginService.getAuthState().subscribe(usuario => {
      if (usuario != null){
        this.isLoggedIn = true;
        this.loggedInUser = usuario.email;
      } else{
        this.isLoggedIn = false;
      }
    })
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.route.navigate(['/login']);
  }

}
