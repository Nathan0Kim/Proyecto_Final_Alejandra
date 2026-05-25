import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: false
})
export class SplashPage implements OnInit {
windowWidth: string='';
showSplash: boolean = true;

  constructor(private router:Router) {
    setTimeout(()=>this.router.navigate(['/home']),1500);
    

   }

  ngOnInit() {
  }

}
