import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogTopComponent } from './dialog-top/dialog-top.component';
import { SnackbarInstallIphoneComponent } from './snackbar-install-iphone/snackbar-install-iphone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Сева Восточный и туберкулез';

  isSplashShown: boolean = false;
  private _splashTimeout: any;
  //private _audio!: HTMLAudioElement;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    if (!this.isSplashShown) {
      // console.log('AppComponent', 'ngOnInit');

      this._splashTimeout = setTimeout(() => {
        // console.log('AppComponent', 'setTimeout');
        this.isSplashShown = true;

        this._snackBar.openFromComponent(SnackbarInstallIphoneComponent, {
          verticalPosition: 'bottom',
          duration: 4000
        });

      }, 6000);

      // Unable to play audio in Chrome on first start. PWA only

      /*
            this._audio = new Audio('/assets/mp3/19.tuberkulyoz.mp3');
            this._audio.autoplay = false;
            this._audio.loop = false;
            this._audio.volume = 1;
            this._audio.muted = true;
      
            this._audio.onended = () => {
              this.isSplashShown = true;
            };
      
            document.body.appendChild(this._audio);
      
            this._splashTimeout = setTimeout(() => {
              // this._audio.play();
            }, 4000);
      
      */
    }
  }

  ngOnDestroy(): void {
    // console.log('AppComponent', 'ngOnDestroy');

    if (this.isSplashShown) {
      clearTimeout(this._splashTimeout);
      // this._audio.remove();
    }
  }

  showDialogTop(): void {
    // console.log('AppComponent', 'showDialogTop');

    const dialogRef = this._dialog.open(DialogTopComponent);
  }

}
