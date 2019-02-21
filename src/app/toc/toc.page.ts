import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage {

  constructor(private router: Router) { }

  // Go to Home/front page
  launchHome() {
    this.router.navigateByUrl('/home');
  }

  // Go to Chapter 1
  launchChapter1() {
    this.router.navigateByUrl('/chapter1');
  }

  // Go to Chapter 2
  launchChapter2() {
    this.router.navigateByUrl('/chapter2');
  }

  // Go to Chapter 3
  launchChapter3() {
    this.router.navigateByUrl('/chapter3');
  }
}
