import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-install-iphone',
  templateUrl: './snackbar-install-iphone.component.html',
  styleUrls: ['./snackbar-install-iphone.component.css']
})
export class SnackbarInstallIphoneComponent implements OnInit {

  constructor(private readonly _snackRef: MatSnackBarRef<SnackbarInstallIphoneComponent>) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this._snackRef.dismiss();
  }

}
