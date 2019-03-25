import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreeView } from './tree-view.interface';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  constructor(private http: HttpClient) { }

  getTreeData(): Observable<TreeView[]> {
    return this.http.get<TreeView[]>('http://www.mocky.io/v2/5c9590203600006c15941f78');
  }
}
