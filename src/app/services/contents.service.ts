import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Properties, Images } from '../interfaces/interfaces.model';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  // URL que trae la información de las propiedades
  URLProperties: string = `https://rtapi-7h6urepkoq-ue.a.run.app/properties`;

  // URL que trae las imagenes de las propiedades
  URLImage: string = `https://rtapi-7h6urepkoq-ue.a.run.app/images/`;

  constructor( private httpClient: HttpClient ) { }

  // Observable que retorna la información de las propiedades
  public getProperties(): Observable<Properties> {
    return this.httpClient.get<Properties>(this.URLProperties);
  }

  // Observable que retorna las imagenes de las propiedades
  public getImages(id: string): Observable<Images> {
    return this.httpClient.get<Images>(`${this.URLImage}${id}`);
  }

}
