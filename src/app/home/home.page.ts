import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TocPage } from '../toc/toc.page';
import { Chapter1Page } from '../chapter1/chapter1.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  launchToc() {
    this.router.navigateByUrl('/toc');
  }
}
