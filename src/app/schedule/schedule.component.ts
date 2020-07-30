import { Component, OnInit } from '@angular/core';
import { GetScheduleService } from '../services/get-schedule.service';
import { DTOSchedule } from 'src/models/DTOSchedule';
import { ScheduleSubjects } from 'src/models/ScheduleSubjects';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  schedule: DTOSchedule[] = [];
  selectedValue: string;
  periodSubjects: ScheduleSubjects[] = [];
  hasLoaded: boolean;
  displayedColumns: string[] = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
  ];
  constructor(private service: GetScheduleService) {}

  ngOnInit(): void {}

  getSchedule(position): ScheduleSubjects[] {
    this.periodSubjects = [];
    this.schedule.forEach((element) => {
      if (element.courseName == this.selectedValue) {
        element.subjects.forEach((subjects) => {
          if (subjects.subjectPeriod == position - 1) {
            this.periodSubjects.push(subjects);
          }
        });
      }
    });
    return this.periodSubjects;
  }

  callService() {
    this.service.getSchedule().subscribe((res: DTOSchedule[]) => {
      res.forEach((element) => {
        this.schedule.push(element);
      });

      this.hasLoaded = true;
      alert('Horário gerado, selecione uma turma.');
    });
  }
}
