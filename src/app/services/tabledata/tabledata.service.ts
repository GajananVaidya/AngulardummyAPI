import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  tableData: Array<object> = [
    { name: 'Conor McGregor', address: 'Andheri', link: 'view more' },
    { name: 'Tony Ferguson', address: 'Kurla', link: 'view more' },
    { name: 'Max Holloway', address: 'Ghatkopar', link: 'view more' },
    { name: 'Jon Jones', address: 'Bandra', link: 'view more' },
    { name: 'Daniel Cormier', address: 'CST', link: 'view more' },
    { name: 'Brock Lesnar', address: 'Sakinaka', link: 'view more' }
  ];

  tablePersonalData: Array<object> = [
    { name: 'Conor McGregor', contact: '8888888888', email: 'abc@gmail.com' },
    { name: 'Tony Ferguson', contact: '8888888888', email: 'abc@gmail.com' },
    { name: 'Max Holloway', contact: '8888888888', email: 'abc@gmail.com' },
    { name: 'Jon Jones', contact: '8888888888', email: 'abc@gmail.com' },
    { name: 'Daniel Cormier', contact: '8888888888', email: 'abc@gmail.com' },
    { name: 'Brock Lesnar', contact: '8888888888', email: 'abc@gmail.com' }
  ];

  tableAddressData: Array<object> = [
    { name: 'Conor McGregor', area: 'near Andheri', landmark: 'Hanuman mandir' },
    { name: 'Tony Ferguson', area: 'near Kurla', landmark: 'PVR Multiplex' },
    { name: 'Max Holloway', area: 'near Ghatkopar', landmark: 'Kohinoor' },
    { name: 'Jon Jones', area: 'near Bandra', landmark: 'Holycross Church' },
    { name: 'Daniel Cormier', area: 'near CST', landmark: 'Military school' },
    { name: 'Brock Lesnar', area: 'near Sakinaka', landmark: 'PVG College' }
  ];

  tableDocData: Array<object> = [
    { name: 'Conor McGregor', aadhar: '0000-1111-2222', pan: 'ABCD4 9889P' },
    { name: 'Tony Ferguson', aadhar: '0000-1111-2222', pan: 'ABCD4 9889P' },
    { name: 'Max Holloway', aadhar: '0000-1111-2222', pan: 'ABCD4 9889P' },
    { name: 'Jon Jones', aadhar: '0000-1111-2222', pan: 'ABCD4 9889P' },
    { name: 'Daniel Cormier', aadhar: '0000-1111-2222', pan: 'ABCD4 9889P' },
    { name: 'Brock Lesnar', aadhar: '0000-1111-2222', pan: 'ABCD4 9889P' }
  ];

  constructor() { }

  get() {
    return of(this.tableData);
  }

  getPersonalData() {
    return of(this.tablePersonalData);
  }

  getAddressData() {
    return of(this.tableAddressData);
  }

  getDocData() {
    return of(this.tableDocData);
  }
}
