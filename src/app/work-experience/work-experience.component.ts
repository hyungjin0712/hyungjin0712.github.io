import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

  let work1 = {
    fecha : "2017-2020",
    ubicacion : "Monterrey, Nuevo León, Mexico",
    puesto : "Estudiante",
    empresa : "Prepa Tec Santa Catarina", 
    logro : "Buscar mi carrera de interés",
  };

  let work2 = {
    fecha : "2020-2023",
    ubicacion : "Monterrey, Nuevo León, Mexico",
    puesto : "Estudiante de ITC",
    empresa : "Tec de Monterrey", 
    logro : "Desarrollar mi nivel de tecnologias y computacion",
  };

  this.workExperience.push(work1);
  this.workExperience.push(work2);
  }
}
