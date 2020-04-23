import { Injectable } from '@angular/core';
/*Para http */
import { HttpClient } from '@angular/common/http';
/*Para http externo */
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  /*Http externa */
  public url: string
  constructor(
    /*Http interna */
    private http : HttpClient
  ) {
    // this.url = "https://gist.githubusercontent.com/davidcp22/d1967026b327ce66af7371725cea4c8a/raw/6fc6ca5f1eb5d9f0118b948362bc1d844f424c6b/animales.json";
    this.url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
  }
  obtener(): Observable <any>{
    return this.http.get(this.url);
  }
}
