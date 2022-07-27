import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Сева Восточный и туберкулез';

  isSplashShown: boolean = false;
  // private _splashTimaout: any;
  private _audio!: HTMLAudioElement;

  ngOnInit(): void {

    if (!this.isSplashShown) {
      console.log('AppComponent', 'ngOnInit');

      /*
      this._splashTimaout = setTimeout(() => {
        console.log('AppComponent', 'setTimeout');
        this.isSplashShown = true;
      }, 4000);
      */

      this._audio = new Audio('/assets/mp3/19.tuberkulyoz.mp3');
      this._audio.autoplay = false;
      this._audio.loop = false;
      this._audio.volume = 1;

      this._audio.onended = () => {
        this.isSplashShown = true;
      };

      this._audio.play();
    }
  }

  ngOnDestroy(): void {
    console.log('AppComponent', 'ngOnDestroy');
    // clearTimeout(this._splashTimaout);

    this._audio.remove();
  }

}
