import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chap1pt3',
  templateUrl: './chap1pt3.page.html',
  styleUrls: ['./chap1pt3.page.scss'],
})
export class Chap1pt3Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChap1pt2() {
    this.router.navigateByUrl('/chap1pt2');
  }

  // Next route
  launchChapter2() {
  this.router.navigateByUrl('/chapter2');
  }
}
