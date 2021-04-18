import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private initialAPi="assets/tabledata.json";
  constructor(
    private https: HttpClient,
  ) { 

  }

  getTableData(){
    return this.https.get<any>(`${this.initialAPi}`)
  }
}
