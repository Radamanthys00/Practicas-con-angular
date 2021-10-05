import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interface/task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'

})

export class TaskService {

  private api = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
  
  constructor(private http: HttpClient) { }


  getAllTasks():Observable<Task>{
    const path =`${this.api}`;

      let headers = new HttpHeaders();
      headers = headers.set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com'). 
      set('x-rapidapi-key', 'ed3d4657b2mshe599a0ce342e942p153c9cjsnbc53efd14995');

      return this.http.get<Task>(this.api,{
        headers:headers
      });
  }

  getTask(id: string){
    const path =`${this.api}/${id}`;
    return this.http.get<Task>(path);
  }
}
