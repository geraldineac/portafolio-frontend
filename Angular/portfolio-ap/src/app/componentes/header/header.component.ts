import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  //este metodo sera utilizado para la condicional de los botones login, logout y edicion
  hasRoute(route:string){
    return this.router.url.includes(route);
  }

// boton de logout
  onClick(){
    this.userService.logout()
    .then(()=> {
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }

}
