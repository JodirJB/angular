import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Properties, Images } from '../interfaces/interfaces.model';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  URLProperties: string = `https://rtapi-7h6urepkoq-ue.a.run.app/properties`;
  URLImage: string = `https://rtapi-7h6urepkoq-ue.a.run.app/images/`;

  constructor( private httpClient: HttpClient ) { }

  public getProperties(): Observable<Properties> {
    return this.httpClient.get<Properties>(this.URLProperties);
  }

  public getImages(id: string): Observable<Images> {
    return this.httpClient.get<Images>(`${this.URLImage}${[id]}`);
  }

  // async getImages(id: string): Promise<any> {
  //   await this.httpClient.get(`${this.URLImage}${id}`).subscribe((subs:any) => {
  //     return subs.images;
  //   });
  // }
}
