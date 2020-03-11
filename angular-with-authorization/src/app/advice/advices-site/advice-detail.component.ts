import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-advice-detail',
  template: `
    <p>
      advice-detail works! ID artykułu: {{myId}}
    </p>
  `,
  styles: []
})
export class AdviceDetailComponent implements OnInit {

  myId = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.articleId);
    // this.myId = this.activatedRoute.snapshot.params.articleId;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.myId = params.articleId;
      // console.log('MEMORY LEAK !');
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('queryParams', params);
    });
  }

}
