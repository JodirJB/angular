import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentsService } from '../services/contents.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  public imagesPropertyId: any;
  // public resImagesProperty: any = {};
  public dataImage: any[] = [];

  public properties: any;
  public data: any;

  constructor( private contentsService: ContentsService, private router: Router ) { }

  async ngOnInit() {
    await this.getProperties();

    // this.activatedRoute.params.subscribe(params => {
    //   this.dataImage.push(this.contentsService.getImages(params['id']));
    // });
  }

  async getProperties() {
    this.contentsService.getProperties().subscribe((data:any) => {
      this.properties = data.properties;

      this.properties.forEach(async (element: any) => {
        this.data = element;  
        // console.log('una gorra grasa: ', this.data._id);

        if (this.data._id) {
          let images = await this.getImages(this.data._id);
          
          if (images) {
            console.log('JE mmg: ', this.data._id);

            this.data = {...this.data, images}
            console.log('J', images);
            console.log('::', this.data);
  
            return images; 
          } 
        }

      });
    });
  }

  getImages(id: string) {
    let images: any;
      this.contentsService.getImages(id).subscribe(async (data:any) => {
      images = await data.images;
      
      console.log('data.images: ', data.images);
      console.log('data.propertyId: ', data.propertyId);
    });
    return images;
  }

  showNext() {
    this.getProperties();
  }

}
