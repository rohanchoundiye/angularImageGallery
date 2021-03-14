import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  imageData: any = [];
  compareList: any = [];
  page = 1;

  // tslint:disable-next-line:variable-name
  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.getImageData();
  }

  getImageData() {
    this._appService.getData().subscribe((apiResponse) => {
      this.imageData = apiResponse;
    }, (error) => {
      console.log('Server Side Error occured');
    });
  }

  compareImage(image) {
    image.compare = !image.compare;
    const index = this.compareList.findIndex(img => img.id === image.id);
    if (index === -1) {
      this.compareList.push(image);
    } else {
      this.compareList.splice(index, 1);
    }
  }
}
