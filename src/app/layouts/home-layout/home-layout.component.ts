import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {

  public pages = [
    { title: 'Home', url: 'SideMenuPage', icon: 'ios-home' },
    { title: 'Auctions', url: 'SideMenuPage', icon: 'ios-wallet' },
    { title: 'Buy & Pay Later', url: 'SideMenuPage', icon: 'ios-cart' },
    { title: 'Buy New Phones', url: 'SideMenuPage', icon: 'ios-cash' },
    { title: 'Logistic Repair', url: 'SideMenuPage', icon: 'ios-cog' },

  ];
  constructor() { }

  ngOnInit() {}

}
