import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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
    {ten: 'Táo', gia: 12, haGia: true},
    {ten: 'Nho', gia: -3.321, haGia: false},
    {ten: 'Cam', gia: 34.32, haGia: false},
    {ten: 'Quýt', gia: 32.31, haGia: true},
    ];
  public districts: string[] = ['Quận/Huyện'];
  public vietnamData = [
    {city: 'Chọn thành phố', district: ['Quận/Huyện']},
    {
      city: 'An Giang',
      district:[
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
      ], 
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district:[
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
      ], 
    },
    {
      city: 'Bạc Liêu',
      district:[
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
      ], 
    },
    {
      city: 'Bắc Kạn',
      district:[
        'Thành phố Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
      ], 
    },
  ];

  public counter = 0;
  public counterBinhPhuong = 0; 

  constructor(private common: CommonService) { }

  public ngOnInit(): void {
    // console.log('trai cay =', this.traiCay2)
    console.log('HomeComponent ngOnInit =', this.common.counter)
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
   }

  public resetName(): void{
    console.log('resetName()');
    this.name = '';
  }
  public changeCity(event: any): void{
    const city = event.target.value;
    if(!city){
      return;
    }

    //Cách 1
    const search = this.vietnamData.filter(data => data.city === city);
    console.log('search', search);
    if(search && search.length > 0){
      this.districts = search[0].district;
    }

    //Cách 2
    // this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }
 

}
