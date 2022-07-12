import { Component, OnInit } from '@angular/core';
import { ContentsService } from '../services/contents.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // imagesPropertyId: string = '';
  // resImagesProperty: any;
  // dataImage:any[] = [];

  constructor(private contentsService: ContentsService) { }

  ngOnInit(): void {
    // this.getImages();
  }

  // async getImages() {
  //   await this.contentsService.getImages(this.imagesPropertyId).subscribe((data:any) => {
  //     this.resImagesProperty = data;
  //     console.log('Imges: ', this.resImagesProperty);

  //     this.resImagesProperty.images.forEach((element:any) => {
  //       this.dataImage.push(element);
  //       console.log('Images element: ', this.dataImage);
  //     });
  //   });
  // }
}
