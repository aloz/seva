import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioCoordinatorService {

  private _isAudioStartedSubject = new Subject<boolean>();
  isAudioStartedObservable: Observable<boolean> = this._isAudioStartedSubject.asObservable();

  constructor() { }

  setAudioStarted(): void {
    //console.log('AudioCoordinatorService', 'setAudioStarted');
    this._isAudioStartedSubject.next(true);
  }
}
