import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.page.html',
  styleUrls: ['./chapter3.page.scss'],
})
export class Chapter3Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChap2pt3() {
    this.router.navigateByUrl('/chap2pt3');
  }

  // Next route
  launchChap3pt2() {
    this.router.navigateByUrl('/chap3pt2');
  }
}
