import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  isUserMenuOpen = false;
  //isSidebarOpen: boolean = false;
  constructor() { 
  }
  ngOnInit(): void {
  }
 /* toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }*/
  toggleUserMenu(open: boolean) {
    this.isUserMenuOpen = open;
  }
  
}
