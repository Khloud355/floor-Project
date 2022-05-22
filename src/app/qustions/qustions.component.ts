import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss']
})
export class QustionsComponent implements OnInit {
  isCollapsed = false;
  showTextFlag=false
  answer: any;
  answers: any;
  constructor() { }
questions=[
  {
    "question":"ماهي مساحة الحزام الأخضر 6 أكتوبر؟", "id":"1"
  },
  {
    "question":"تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id":"2"
  },
]


  ngOnInit(): void {
    this.answers={
      1:[{"answer":" فدان1234567 "}],
      2:[{"answer":"1234567"}],
      3:[{"answer":""}]
    }
  }
  showText(id:any){
    this.answer=this.answers[id]
    this.answer=this.answer[0]
this.showTextFlag= !this.showTextFlag
  }

}
