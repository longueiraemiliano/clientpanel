import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((res, rej) => {
      this.afauth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => res(userData))
        .catch(err => rej(err));
    });
  }

  getAuth() {
    return this.afauth.authState.pipe(map(auth => auth));
  }

  logout() {
    return this.afauth.auth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((res, rej) => {
      this.afauth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => res(userData))
        .catch(err => rej(err));
    });
  }
}
