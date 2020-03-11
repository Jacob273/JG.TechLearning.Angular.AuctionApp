import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-advice-detail',
  template: `
    <section>

    <div class="alert alert-info" *ngIf="id === 0"> Wyberz artykuł po lewej aby zobaczyć szczegóły </div>
      <div *ngIf="id !== 0">
        Ładuję id: {{id}}
      </div>
    </section>
  `,
  styles: []
})
export class AdviceDetailComponent implements OnInit {

  id = 0;
  activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = Number(params.id);
    });

   }

  ngOnInit(): void {
  }

}
