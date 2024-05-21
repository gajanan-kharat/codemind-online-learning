import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-left',
  templateUrl: './login-left.component.html',
  styleUrls: ['./login-left.component.css']
})
export class LoginLeftComponent implements OnInit {
  carouselOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };
  

  constructor() { }

  ngOnInit(): void {
  }

}
