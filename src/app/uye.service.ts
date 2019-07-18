import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UyeService {

  public url = 'http://localhost:8080/home';
  public saveUrl = 'http://localhost:8080/kayit';

  constructor(public http: HttpClient) {
  }

  getAllUye() {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Authorization', 'Basic ' + btoa('stajokulu:123456'));
    myHeaders.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url, {headers: myHeaders});

    return this.http.get(this.url);

  }

  postPerson(uye) {
    return this.http.post(this.saveUrl, uye);
  }

}
