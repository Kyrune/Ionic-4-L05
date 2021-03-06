import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChap1pt3() {
    this.router.navigateByUrl('chap1pt3');
  }

  // Next route
  launchChap2pt2() {
    this.router.navigateByUrl('/chap2pt2');
  }
}
