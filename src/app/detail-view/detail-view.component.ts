import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from '../provider/data.service';
import {FileSizePipe} from '../utils/file-size.pipe';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  public ImageDetail: any;
  public ImageSize: any;
  public constructor(private route: ActivatedRoute,private data:DataService) {
    this.ImageDetail = this.data.storage;
  }

  ngOnInit() {
  }

}
