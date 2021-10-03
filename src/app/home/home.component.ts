import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Hoàng Đặng';
  public age = 25;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Xoài'];
  public traiCay2 = [
    {ten: 'Tao', gia: 12, haGia: true},
    {ten: 'Nho', gia: -3.321, haGia: false},
    {ten: 'Cam', gia: 34.32, haGia: false},
    {ten: 'Quýt', gia: 32.31, haGia: true},
    ];

  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay =', this.traiCay2)
   }

  public resetName(): void{
    console.log('resetName()');
    this.name = '';
  }
 

}
