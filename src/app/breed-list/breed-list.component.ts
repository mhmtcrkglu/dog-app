import { BreedService } from '../breed.service';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'detail'];
  dataSource = new MatTableDataSource<any>();
  expandedElement: any | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private breedService: BreedService) { }

  ngOnInit() {
    this.loadData(0, 10);
  }

  loadData(page: number, size: number) {
    this.breedService.getBreeds(size, page).subscribe({
      next: (data) => {
        debugger;
        this.dataSource.data = data;
        this.paginator.pageIndex = page;
        this.paginator.length = 100;
      }
    });
  }

  onPageChange(event: any) {
    this.loadData(event.pageIndex, event.pageSize);
  }

  toggleDetails(element: any) {
    debugger;
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
