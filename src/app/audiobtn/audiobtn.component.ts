import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AudioCoordinatorService } from './audio-coordinator.service';

@Component({
  selector: 'app-audiobtn',
  templateUrl: './audiobtn.component.html',
  styleUrls: ['./audiobtn.component.css']
})
export class AudiobtnComponent implements OnInit, OnDestroy {

  @Input() caption: string = '';
  @Input() audioUrl: string = '';

  spValue: number = 0;
  isPlaying: boolean = false;

  private _audio!: HTMLAudioElement;

  constructor(private readonly _audioCoordService: AudioCoordinatorService) { }

  ngOnInit(): void {
    //console.log('AudiobtnComponent', 'ngOnInit');

    this._audio = new Audio(this.audioUrl);
    this._audio.autoplay = false;
    this._audio.loop = false;
    this._audio.volume = 1;

    this._audio.onplay = () => {
      //console.log('AudiobtnComponent', '1');
      this.isPlaying = true;
    };

    this._audio.onended = () => {
      //console.log('AudiobtnComponent', '2');
      this.spValue = 0;
      this.isPlaying = false;
    };

    this._audio.onpause = () => {
      //console.log('AudiobtnComponent', '3');
      this.isPlaying = false;
    };

    this._audio.onseeked = () => {
      //console.log('AudiobtnComponent', '4');
    };

    this._audio.ontimeupdate = () => {
      //console.log('AudiobtnComponent', '5');
      this._updateSpValue();
    };

    document.body.appendChild(this._audio);

    this._audioCoordService.isAudioStartedObservable.subscribe(x => {
      //console.log('AudiobtnComponent', 'from service');
      if (x) {
        if (this.isPlaying)
          this._stopPlay();
      }
    });
  }

  ngOnDestroy(): void {
    //console.log('AudiobtnComponent', 'ngOnDestroy');
    this._audio.remove();
  }

  private _updateSpValue(): void {
    this.spValue = (this._audio.currentTime + 0) / this._audio.duration * 100;
  }

  togglePlay(): void {
    //console.log('AudiobtnComponent', 'togglePlay');
    if (this.isPlaying)
      this._stopPlay();
    else {
      this._audioCoordService.setAudioStarted();
      this._audio.play();
    }
  }

  private _stopPlay(): void {
    //console.log('AudiobtnComponent', 'stopPlay');
    if (this.isPlaying) {
      this._audio.pause();
      this._audio.currentTime = 0;
    }
  }

}
