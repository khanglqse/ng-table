import { Component, OnInit } from '@angular/core';
import { TableSetting } from './table/models/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  data = [
    {no: {sub: 1}, name: 'khang'},
    {no: {sub: 1}, name: 'luyen'}
  ]
  title = 'table';
  settings: TableSetting<any>
  ngOnInit(){
    this.settings = {
      header: {title : 'This is title'},
      columns: [
        {title: 'No', data: x =>x.no.sub, columnDef: 'no', align: 'text-left'},
        {title: 'Name', data: x =>x.name, columnDef: 'name'},
      ],
      rows: {
        trCssFunc: (data) => {return (data.name === 'khang' ? 'handsome-class' : 'not-handsome')}
      },
      actionButtons: {
        title: 'Test title',
        align: 'text-center',
        buttons: [
          { tooltip: 'khang', icon: 'fa', title: 'Edit test', actionLinkFunc: (data) => this.checkActionLink(data) },
          { tooltip: 'khang', icon: 'fa', title: 'delete test', actionLinkFunc: (data) => this.checkActionLink(data) }
        ],
      }
    }
  }
  checkActionLink(data){
    if(data.name === 'khang'){
      return ['view1', data.name] 
    }
    return ['view2', data.no.sub]
  }
  sortStateChange(e){
    console.log(e)
  }
  pagingOptionChange(e){
    console.log(e)
  }
}
