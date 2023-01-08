import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  @Input() years: any;
  @Output() onYearChangeEmitter = new EventEmitter();

  onSelectionChange(event: any) {
      this.onYearChangeEmitter.emit(event.value);
  }
}
