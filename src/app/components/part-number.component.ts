import { Component, OnInit } from '@angular/core'
import { AuthService } from '../login/auth.service'

import { PartNumber } from './part-number'
import { PartNumberService } from './part-numbers.service'

@Component({
  selector: 'part-numbers',
  templateUrl: './part-number.component.html',
})
export class PartNumberComponent implements OnInit {
  partNumbers: Array<PartNumber> | undefined

  constructor(private pnService: PartNumberService, private authService: AuthService) {}

  ngOnInit(): void {
    this.partNumbers = this.pnService.getPartNumbers()
  }
  logout() {
    this.authService.logout();
  }  
}
