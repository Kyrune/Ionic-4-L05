import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage {

  constructor(private router: Router) { }

  launchHome() {
    this.router.navigateByUrl('/home');
  }

  launchChapter1() {
    this.router.navigateByUrl('/chapter1');
  }

  launchChapter2() {
    this.router.navigateByUrl('/chapter2');
  }

  launchChapter3() {
    this.router.navigateByUrl('/chapter3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }
}
