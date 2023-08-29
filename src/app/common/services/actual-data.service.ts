import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BLEDevice } from '../interfaces/device.interface';
import { Program } from '../interfaces/program.interface';

@Injectable({
  providedIn: 'root'
})
export class ActualDataService {

  constructor() { }

  private actualDevice: BehaviorSubject<BLEDevice | null> = new BehaviorSubject<BLEDevice | null>(null);
  public actualDevice$ = this.actualDevice.asObservable();

  actualProgram$: BehaviorSubject<Program | null> = new BehaviorSubject<Program | null>(null);
  working$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  angle$: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);

  setActualDevice(data: BLEDevice | null) {
    this.actualDevice.next(data);
  }

}
