import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }
task:object[]=[{task:"complete the project-1",date:"24-01-2019"},
{task:"complete the project-2",date:"24-02-2019"},
{task:"complete the project-3",date:"24-03-2019"},
{task:"complete the project-4",date:"24-04-2019"},
{task:"complete the project-5",date:"24-05-2019"},
{task:"complete the project-6",date:"24-06-2019"},
{task:"complete the project-7",date:"24-07-2019"},
{task:"complete the project-8",date:"24-08-2019"},
{task:"complete the project-9",date:"24-09-2019"},
{task:"complete the project-10",date:"24-10-2019"}]

  ngOnInit(): void {
  }

}
