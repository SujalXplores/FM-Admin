import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { wallet } from './wallet';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WalletdataService } from './walletdata.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private _walletdata: WalletdataService, public _router: Router) {
    this.dataSource = new MatTableDataSource();
   }

  walletarr: wallet[] = [];
  displayedColumns: string[] = ['u_name', 'fk_u_email_id', 'wallet_amount'];
  dataSource: MatTableDataSource<wallet>;
  selection = new SelectionModel<wallet>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator  : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this._walletdata.getwallet().subscribe(
      (data: wallet[]) => {
        console.log(data);
        this.walletarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
