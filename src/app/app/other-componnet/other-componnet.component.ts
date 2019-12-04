import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-other-componnet',
  templateUrl: './other-componnet.component.html',
  styleUrls: ['./other-componnet.component.sass']
})
export class OtherComponnetComponent implements OnInit {

  @Input() name
  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }

}
