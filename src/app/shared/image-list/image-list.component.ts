import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  @Input() imageData;
  @Output() compareImageEvent =  new EventEmitter();

  page = 1;
  itemsPerPage = 4;

  constructor() { }

  ngOnInit(): void {
  }

  compareImg(image) {
    this.compareImageEvent.emit(image);
  }

}
