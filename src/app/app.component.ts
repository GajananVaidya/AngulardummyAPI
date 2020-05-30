import { Component } from '@angular/core';
import { TabledataService } from './services/tabledata/tabledata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  tableData: Array<object>;
  tablePersonalData: Array<object>;
  tableAddressData: Array<object>;
  tableDocData: Array<object>;

  constructor(private tableDataService: TabledataService) {}

  getData() {
    this.tableDataService.get().subscribe(res => {
      this.tableData = res;
    });
  }

  getDetails(tblData) {
    // console.log(tblData.name);
    this.tableDataService.getPersonalData().subscribe(res => {
      this.tablePersonalData = res.filter(personalData => personalData['name'] == tblData.name);
    });

    this.tableDataService.getAddressData().subscribe(res => {
      this.tableAddressData = res.filter(addrData => addrData['name'] == tblData.name);
    });

    this.tableDataService.getDocData().subscribe(res => {
      this.tableDocData = res.filter(docData => docData['name'] == tblData.name);
    });
  }
}

