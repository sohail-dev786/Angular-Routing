import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  constructor(private router:Router) { }

  courses=[
    {cid:1,cname:"java",trainer:"Kedar Sir"},
    {cid:2,cname:"Angular",trainer:"Kedar Sir"},
    {cid:3,cname:"React",trainer:"Kedar Sir"},
    {cid:4,cname:"NodeJs",trainer:"Kedar Sir"},
    {cid:5,cname:"Python",trainer:"Kedar Sir"},  
  ]

  onSelect(course:any)
  {
    let cid=course.cid;
    console.log(cid)
    this.router.navigate(["courseDetail",cid]);
  }

  ngOnInit(): void {
  }

}
