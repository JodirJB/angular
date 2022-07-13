import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';
import { Properties, Images } from '../interfaces/interfaces.model';
import { ContentsService } from '../services/contents.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  // Variable donde se almacenan las imagenes
  public images: Images[] = [];
  
  // Variable donde se almacenan las propiedades
  public properties: Properties[] = [];

  // Variable donde se encuentra una propiedad en especifico
  public currentProperties: any;

  // Variable donde se encuentra las propiedades a recorrer
  public countProperty: number = 1;

  // Elemento que me permite renderizar el mapa
  @ViewChild('mapDiv') mapDivElement?: ElementRef;

  constructor( private contentsService: ContentsService ) { }

  ngOnInit() {
  // Método que inicializa la app
    this.getProperties();
  }

  // Método donde obtenemos las informaciones de las propiedades
  // Cargamos las imagenes y mapa
  getProperties(): void {
    this.contentsService.getProperties().subscribe((data:any) => {
      this.properties = data.properties;

      this.currentProperties = this.properties[0];

      this.getImages(this.currentProperties._id);

      this.loadMap();
    });
  }

  // Método donde obtenemos las images de las propiedades
  // le pasamos un id por parametro en cual viene del servicio
  getImages(id: string): void {
      this.contentsService.getImages(id).subscribe((data:any) => {
      this.images = data.images;
    });
  }

  // Estrutura de la construcción del mapa
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

  // Método que me permite cambiar de una propiedad a otra
  showNext(): void {
    if (this.countProperty < this.properties.length) {
      this.nextProperties(this.countProperty);
      this.countProperty ++;
    } else {
      this.countProperty = 1;
      this.nextProperties(0); 
    }
  }

  // Método que me permite saber en cual propiedad me encuentro.
  nextProperties(value:number): void {
    this.currentProperties = this.properties[value];
    this.getImages(this.currentProperties._id);
      this.loadMap();
  }
}
