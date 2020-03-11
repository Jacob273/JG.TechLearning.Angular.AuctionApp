import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advices-site',
  templateUrl: './advices-site.component.html',
  styles: []
})
export class AdvicesSiteComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('HELLLO FROM NG ON INIT ---------------------------------')
  }

  handleArticleClick(ev: MouseEvent, id: number) {
    ev.preventDefault();
    console.log(id);
    // this.router.navigate(['advices', 'article', id]);
    this.router.navigate(['article', id], { relativeTo: this.activatedRoute });
  }

}
