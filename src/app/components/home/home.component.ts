import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  public displayColums: string[] = ['id', 'name', 'status', 'species'];
  public dataSource: any= []


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  async llenarData() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      console.table(this.data);
      this,this.dataSource = data;
    });
  }
}
