import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
    /* //.pipe(map(response => response.json()))
    .pipe(map(response => response.results))
    .pipe(map(users => {
        return users.map(u => {
            return {
                name: u.name.first + ' ' + u.name.last,
                geo: u.location.city,
                image: u.picture.large
            }
        })
    }) */
  }

  users = [
    {name: 'Carl'},
    {name: 'John'},
    {name: 'Sylvian'},
    {name: 'Bob'},
    {name: 'Bob'},
    {name: 'Jackie'}
  ]

}
