import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chap3pt2',
  templateUrl: './chap3pt2.page.html',
  styleUrls: ['./chap3pt2.page.scss'],
})
export class Chap3pt2Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Back route
  launchChapter3() {
    this.router.navigateByUrl('/chapter3');
  }

  // Next route
  launchHome() {
    this.router.navigateByUrl('/home');
  }
}
