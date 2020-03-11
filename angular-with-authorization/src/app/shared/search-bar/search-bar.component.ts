import { Component, OnInit, EventEmitter, /*ViewChild, ElementRef*/ Output, Input} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="input-group mb-3">
      <div class="input-group-prepend" >
        <span (click)="searchInput.focus()" class="input-group-text"><i class="fa fa-search"></i></span>
      </div>
      <input
        #searchInput
        type="text"
        name="title"
        class="form-control"
        (input)="handleInputChange($event)"
        [placeholder]="placeholderMessage"
      />
    </div>
  `,
  styles: []
})
export class SearchBarComponent implements OnInit {

  // @ViewChild('searchInput') searchInput: ElementRef
  @Output() whenSearch = new EventEmitter<string>();
  @Input() placeholderMessage = 'Wyszukaj...';

  constructor() { }

  ngOnInit(): void {}

  handleInputChange(ev: any) {
    // const value = ev.target.value;
    const {value} = ev.target;
    this.whenSearch.emit(value);
  }
}
