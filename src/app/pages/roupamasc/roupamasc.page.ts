import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupamasc',
  templateUrl: './roupamasc.page.html',
  styleUrls: ['./roupamasc.page.scss'],
})
export class RoupamascPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dropdownVisible: boolean = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }


}
