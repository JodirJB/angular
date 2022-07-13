import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { Properties, Images } from '../interfaces/interfaces.model';
import { ContentsService } from '../services/contents.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  public images: Images[] = [];
  public properties: Properties[] = [];
  public currentProperties: any;
  public countProperty: number = 1;

  @ViewChild('mapDiv') mapDivElement?: ElementRef;

  constructor( private contentsService: ContentsService ) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    this.contentsService.getProperties().subscribe((data:any) => {
      this.properties = data.properties;

      this.currentProperties = this.properties[0];

      this.loadMap();

      this.getImages(this.currentProperties._id);
    });
  }

  getImages(id: string): void {
      this.contentsService.getImages(id).subscribe((data:any) => {
      this.images = data.images;
    });
  }

  loadMap(): void {
    const map = new Map({
      container: this.mapDivElement?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [this.currentProperties.location.longitude as number, this.currentProperties.location.latitude as number], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });
        
      new Marker({ color: 'red'})
      .setLngLat([this.currentProperties.location.longitude as number, this.currentProperties.location.latitude as number])
      .addTo( map )
  }

  showNext(): void {
    if (this.countProperty < this.properties.length) {
      this.nextProperties(this.countProperty);
      this.countProperty ++;
    } else {
      this.countProperty = 1;
      this.nextProperties(0); 
    }
  }

  nextProperties(value:number): void {
    this.currentProperties = this.properties[value];
    this.getImages(this.currentProperties._id);
      this.loadMap();
  }
}
