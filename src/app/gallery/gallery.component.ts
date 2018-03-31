import {Component, Input} from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {DataService} from '../provider/data.service';

@Component({
 selector: 'gallery',
 templateUrl: './gallery.component.html',
 styleUrls: ['./gallery.component.css']
})
export class GalleryComponent { 
  p: number = 1;
  currentPage: number;
  total:number;
  imageList: any;
  @Input() datasource;
  selectedImage;
  public constructor(private router: Router ,private data:DataService) {
    this.currentPage = 1;
    this.getImageData(this.currentPage);
  }

  getImageData(pageNumber) {
    this.data.getIntialImages(pageNumber).subscribe(data => {
      console.log("data",data);
      this.total = data.totalHits;
      this.imageList = data.hits;
    }, error => {
      console.log("error: ", error);
    });
  }

  setSelectedImage(image){
    this.data.storage = image;
    this.router.navigate(["detail"]);
  }

  getPage(event){
    this.currentPage = event;
    this.getImageData(event);
  }
}