import { Component, OnInit } from '@angular/core';
import Swal  from 'sweetalert2';

@Component({
  selector: 'lib-jhemtzy-lib',
  template: `
    
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <style>
    .mid{
      width: 500px;
      height: 170px;
      position: absolute;
      top: 30%;
      left: 30%;
      background-color: lightblue;
      text-align: center;
    }
    h1{
      margin-top: 15px;
      text-align: center;
      margin-bottom: 10px;
    }
    button{
      margin: 5px;
    }
  </style>
  <div class="mid">
    <h1>Alerts</h1>
    <button id="btn1" type="button" class="btn btn-info" (click)="simpleAlert()">Simple Alert</button>
    <button id="btn2" type="button" class="btn btn-success" (click)="alertWithSuccess()">Submit</button>
    <button id="btn3" type="button" class="btn btn-danger" (click)="confirmBox()">Delete</button>
  </div>
  `,
  styles: [
  ]
})
export class JhemtzyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  simpleAlert() {
    Swal.fire('Hello world!');
  }
 
  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }
 
  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove this file?',
      text: 'You will not be able to recover the file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}

