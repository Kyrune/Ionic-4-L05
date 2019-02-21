import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chap1pt2',
  templateUrl: './chap1pt2.page.html',
  styleUrls: ['./chap1pt2.page.scss'],
})
export class Chap1pt2Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChapter1() {
    this.router.navigateByUrl('/chapter1');
  }

  // Next route
  launchChap1pt3() {
    this.router.navigateByUrl('chap1pt3');
  }
}
