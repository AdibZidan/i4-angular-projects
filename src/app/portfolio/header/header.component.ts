import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void { }

  public setTitle(newTitle: string): void { this.titleService.setTitle(newTitle); }

}
