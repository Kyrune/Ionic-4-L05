import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chap2pt3',
  templateUrl: './chap2pt3.page.html',
  styleUrls: ['./chap2pt3.page.scss'],
})
export class Chap2pt3Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChap2pt2() {
    this.router.navigateByUrl('/chap2pt2');
  }

  // Next route
  launchChapter3() {
    this.router.navigateByUrl('/chapter3');
  }
}
