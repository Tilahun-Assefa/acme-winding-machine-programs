import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PartNumber } from './part-number'
import { PartNumberService } from './part-numbers.service'

@Component({
  selector: 'part-details',
  templateUrl: './partNo-detail.component.html',
})
export class PartDetailComponent implements OnInit {
  item!: PartNumber;

  constructor(private partNoService: PartNumberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const part_num = this.route.snapshot.params['partNo'];
    this.item = this.partNoService.getItem(part_num);
  }
}
