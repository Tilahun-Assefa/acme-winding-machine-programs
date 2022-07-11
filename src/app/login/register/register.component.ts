import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  wires: any = ['49-0321-38', '49-0321-37', '49-0321-36'];

  constructor() { }

  ngOnInit(): void {
  }

}
