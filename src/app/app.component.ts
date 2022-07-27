import { Component, OnInit, OnDestroy } from '@angular/core';

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

  ngOnInit(): void {

    if (!this.isSplashShown) {
      // console.log('AppComponent', 'ngOnInit');

      this._splashTimeout = setTimeout(() => {
        // console.log('AppComponent', 'setTimeout');
        this.isSplashShown = true;
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

}
