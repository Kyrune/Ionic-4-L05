import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.page.html',
  styleUrls: ['./chapter1.page.scss'],
})
export class Chapter1Page {

  constructor(private router: Router) { }

  // Go to Table of Contents
  launchToc() {
    this.router.navigateByUrl('/toc');
  }

  // Next route
  launchChap1pt2() {
    this.router.navigateByUrl('/chap1pt2');
  }
}
