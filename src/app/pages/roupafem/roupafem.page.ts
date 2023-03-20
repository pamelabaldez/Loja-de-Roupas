import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupafem',
  templateUrl: './roupafem.page.html',
  styleUrls: ['./roupafem.page.scss'],
})
export class RoupafemPage implements OnInit {

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
