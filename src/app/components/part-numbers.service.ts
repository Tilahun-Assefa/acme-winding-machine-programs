import { Injectable } from '@angular/core'

import { PartNumber } from './part-number'

@Injectable({
  providedIn: 'root',
})
export class PartNumberService {
  partNumbers = [
    { id: 1, partNo: "26-5859-12", wireType: "49-0321-38", description: 'Coil Winding', customerId: 'moog' },
    { id: 2, partNo: "26-5859-13", wireType: "49-0321-38", description: 'Coil Winding', customerId: 'moog' },
    { id: 3, partNo: "26-5859-24", wireType: "49-0321-38", description: 'Coil Winding', customerId: 'moog' },
    { id: 4, partNo: "26-5859-31", wireType: "49-0321-38", description: 'Coil Winding', customerId: 'moog' },
    { id: 5, partNo: "26-5859-41", wireType: "49-0321-38", description: 'Coil Winding', customerId: 'moog' },
  ]

  getPartNumbers(): Array<PartNumber> {
    return this.partNumbers
  }

  getItem(part_num: string): PartNumber {
    return this.partNumbers.filter((pn) => pn.partNo === part_num)[0]
  }
}
