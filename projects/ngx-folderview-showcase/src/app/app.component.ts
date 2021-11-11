import { Component, ViewChild } from '@angular/core';
import { NgxFolderNode } from 'projects/ngx-folderview/src/lib/models/ngx-folder-node';
import { NgxFolderviewComponent } from 'projects/ngx-folderview/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(NgxFolderviewComponent) folderViewComponent: NgxFolderviewComponent;
  title = 'ngx-folderview-showcase';
  dataSource = new Array<NgxFolderNode>();

  constructor() {
    this.dataSource = [
      {
        id: 1,
        title: 'My Queries',
        children: [
          {
            id: 2,
            title: 'Equality'
          },
          {
            id: 3,
            title: 'Bias',
            children: [
              {
                id: 4,
                title: 'Gender'
              },
              {
                id: 5,
                title: 'Racial'
              },
              {
                id: 6,
                title: 'Social'
              },
            ]
          },
          {
            id: 7,
            title: 'CO2'
          },
          {
            id: 8,
            title: 'Equality'
          },
          {
            id: 9,
            title: 'Light'
          }
        ]
      }
    ]
  }

  getJson() {
    console.log(this.folderViewComponent.dataSource)
  }
}
