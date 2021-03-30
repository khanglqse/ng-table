import { Component, OnInit } from '@angular/core';
import { TableSetting } from './table/models/settings.model';
import { SortState } from './table/models/sort-order.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  data = []
  title = 'table';
  settings: TableSetting<any>
  loading: boolean;
  sortState: SortState = new SortState();
  filterModel$ = new BehaviorSubject({})
  ngOnInit(){
    this.getData();
    this.initTableSettings();
  }

  private initTableSettings() {
    this.settings = {
      align: 'text-left',
      header: { title: 'This is title' },
      columns: [
        { title: 'No', prop: m => m.no.subProp, columnDef: 'no',  align: 'text-left', width: '230px'},
        { title: 'Name', prop: m => m.name, width: '150', columnDef: 'name', pinned: true, colSpan: 2, colSpanFunc: (data) => {return 1}},
        { title: 'Age', prop: m => m.age, columnDef: 'age'},
        { title: 'Title', prop: m => m.title, columnDef: 'title'},
        { title: 'Language', prop: m => m.language, columnDef: 'language'},
        { title: 'Language', prop: m => m.language, columnDef: 'language'},
        { title: 'Language', prop: m => m.language, columnDef: 'language'},
        { title: 'Language', prop: m => m.language, columnDef: 'language'},
        { title: 'Language', prop: m => m.language, pinned: true, columnDef: 'language'},
        { title: 'Board date', prop: m => m.joinDate, columnDef: 'joinDate', type: 'datetime', dateTimeFormat: 'long'},
      ],
      rows: {
        trCssFunc: (data) => { return (data.name === 'khang' ? 'handsome-class' : 'not-handsome'); },
        triggerExpand: true
      },
      actionButtons: {
        buttons: [
          { tooltip: 'khang', icon: 'fa', title: 'Edit test',  actionLinkFunc: (data) => this.checkActionLink(data) },
          { tooltip: 'khang', icon: 'fa', title: 'delete test', action: (data) => this.deleteRecord(data) },
          { tooltip: 'khang', icon: 'fa', title: 'disabled button', disableOn: (data) => this.isDisabled(data) }
        ],
      },
      // pagination: false
    };
  }

  isDisabled(data){
    return data.no.subProp === 2
  }

  deleteRecord(data){
    this.data = this.data.filter(i => i.no.subProp !== data.no.subProp);
  }

  checkActionLink(data){
    if(data.name === 'khang'){
      return ['view1', data.name] 
    }
    return ['view2', data.no.subProp]
  }

  sortStateChange(e){
    console.log(e)
  }
  pagingOptionChange(e){
    this.data =  [
      {no: {subProp: 1}, name:'teo', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date()},
      {no: {subProp: 1}, name:'teo', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date()},
      {no: {subProp: 1}, name:'teo', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date()},
      {no: {subProp: 1}, name:'teo', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date()},
      {no: {subProp: 1}, name:'teo', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date()},

    ] 
    console.log(e)
  }
  onHeaderButtonClick(){
    console.log('I am clicked by injected header in template button')
  }
  getData(){
    this.loading = true;
    setTimeout(() => {
      this.data = testData;
      this.loading = false
    }, 1000)
  }
  inputChange(e){
    this.filterModel$.next({name: e.target.value})
  }
  a(aa){
    console.log(aa)
  }
 
}



const testData = [
  {no: {subProp: 1}, name:'khang', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date()},
  {no: {subProp: 2}, name:'a', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date() },
  {no: {subProp: 3}, name:'khang', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date() },
  {no: {subProp: 4}, name:'khang', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date() },
  {no: {subProp: 5}, name:'khang', age: '17', title: 'Senior dev', language: 'C#, Angular, React, Sails js', joinDate: new Date() },
]