import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ScheduleSubjects } from 'src/models/ScheduleSubjects';
import { DTOSchedule } from 'src/models/DTOSchedule';

@Component({
  selector: 'app-dialog-schedule',
  templateUrl: './dialog-schedule.component.html',
  styleUrls: ['./dialog-schedule.component.css'],
})
export class DialogScheduleComponent implements OnInit {
  periodSubjects: ScheduleSubjects[] = [];
  schedule: DTOSchedule[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.schedule = data.schedule;
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getSchedule(position, course: DTOSchedule): ScheduleSubjects[] {
    this.periodSubjects = [];
    course.subjects.forEach((subjects) => {
      if (subjects.subjectPeriod == position - 1) {
        this.periodSubjects.push(subjects);
      }
    });
    return this.periodSubjects;
  }
}
