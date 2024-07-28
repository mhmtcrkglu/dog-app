import { Component, OnInit, ViewChild } from '@angular/core';
import { BreedService } from '../breed.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreedAnalytics } from '../breed-analytics.model';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  isAuthenticated = false;
  password: string = '';
  userName: string = '';
  displayedColumns: string[] = ['breed-id', 'breed-name', 'click-count'];
  dataSource = new MatTableDataSource<BreedAnalytics>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private breedService: BreedService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.breedService.getAnalytics(this.userName, this.password).subscribe(data => {
      if(data != null){
        this.dataSource.data = data;
        this.isAuthenticated = true
      }
    });
  }
}
