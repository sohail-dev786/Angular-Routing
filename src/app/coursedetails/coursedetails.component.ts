import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor( private router:ActivatedRoute,private route:Router) { }

  cid:any;

  ngOnInit(): void {
  this.cid=(this.router.snapshot.paramMap.get('cid'));
  }

  onClickbtn()
  {
  this.route.navigate(["/courses"]);
  }

}
