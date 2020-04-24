import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  brews: Object;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
