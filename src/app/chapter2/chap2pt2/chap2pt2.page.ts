import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chap2pt2',
  templateUrl: './chap2pt2.page.html',
  styleUrls: ['./chap2pt2.page.scss'],
})
export class Chap2pt2Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChapter2() {
    this.router.navigateByUrl('/chapter2');
  }

  // Next route
  launchChap2pt3() {
    this.router.navigateByUrl('/chap2pt3');
  }
}
