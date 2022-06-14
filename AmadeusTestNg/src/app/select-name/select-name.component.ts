import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss']
})
export class SelectNameComponent implements OnInit {
  filters = [
    {name: 'name'},
    {name: 'target'},
  ];

  form = new FormGroup({
    filter: new FormControl(this.filters),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
