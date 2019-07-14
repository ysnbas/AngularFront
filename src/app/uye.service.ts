import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UyeService {

  public url = 'http://localhost:8080/uye';

  constructor(public http: HttpClient) {
  }

  getAllUye() {
    return this.http.get(this.url);
  }


}
