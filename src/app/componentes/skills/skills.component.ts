import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  hasRoute(route:string){
    return this.router.url.includes(route);
  }
}
