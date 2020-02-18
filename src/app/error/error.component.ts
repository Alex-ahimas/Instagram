import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  //  message = "An unknown error ocurred!";

  // diálogo que es de tipo objeto que contiene un mensaje (string)
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

  ngOnInit() {
  }

}
