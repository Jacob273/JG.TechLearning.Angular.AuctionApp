import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advices-site',
  templateUrl: './advices-site.component.html',
  styles: []
})
export class AdvicesSiteComponent implements OnInit {

  router: Router;
  activatedRoute: ActivatedRoute;

  constructor(router: Router, activatedRoute: ActivatedRoute) { 
    this.router = router;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
  }

  handleButtonClick(id: number) {
    this.router.navigate(['article', id], {relativeTo: this.activatedRoute});
  }

}
