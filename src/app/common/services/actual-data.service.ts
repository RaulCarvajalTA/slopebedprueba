import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BLEDevice, Characteristic } from '../interfaces/device.interface';
import { Program } from '../interfaces/program.interface';

@Injectable({
  providedIn: 'root'
})
export class ActualDataService {

  constructor() { }

  private actualDevice: BehaviorSubject<BLEDevice | null> = new BehaviorSubject<BLEDevice | null>(null);
  public actualDevice$ = this.actualDevice.asObservable();

  private actualCharacteristics: BehaviorSubject<Characteristic[]> = new BehaviorSubject<Characteristic[]>([]);
  public actualCharacteristics$ = this.actualCharacteristics.asObservable();

  actualProgram$: BehaviorSubject<Program | null> = new BehaviorSubject<Program | null>(null);
  working$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  angle$: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);

  setActualDevice(data: BLEDevice | null) {
    this.actualDevice.next(data);
  }

  setActualCharacteristic(data: Characteristic[]) {
    this.actualCharacteristics.next(data);
  }

}
