import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from "@angular/core";
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  @Input() value: string = "";

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

}
