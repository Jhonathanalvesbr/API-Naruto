import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  novos(): void{
    location.reload();
  }
}