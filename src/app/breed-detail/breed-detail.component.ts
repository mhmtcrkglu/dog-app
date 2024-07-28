import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {
  breedId: string | null = null; 
  element: any;

  constructor(private breedService: BreedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.breedId = params.get('id');
      if (this.breedId) {
        this.breedService.getBreedDetails(this.breedId).subscribe(data => {
          debugger;
          this.element = data;
        });
      }
    });
  }
}
