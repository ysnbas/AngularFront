import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  try(email: any, password: any) {
    const loginControl: any = {
      email: email,
      password: password
    };
    return this.http.post(this.url, loginControl);
  }
}
