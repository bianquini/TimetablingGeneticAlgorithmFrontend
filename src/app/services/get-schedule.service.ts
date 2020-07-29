import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { DTOSchedule } from '../../models/DTOSchedule';

@Injectable({
  providedIn: 'root',
})
export class GetScheduleService {
  constructor(public http: HttpClient) {}

  getSchedule(): Observable<DTOSchedule[]> {
    return this.http
      .get<DTOSchedule[]>(`http://localhost:8080/ga/schedule`)
      .pipe(timeout(1800000));
  }
}
