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
  showPlus=true
  constructor() { }
questions=[
  {
    "question":"ماهي مساحة الحزام الأخضر 6 أكتوبر؟", "id":"1","answer":" فدان1234567 "
  },
  {
    "question":"تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id":"2","answer":" فدان1220567 "
  },
  {
    "question":"ماهي مساحة الحزام الأخضر 6 أكتوبر؟", "id":"1","answer":" فدان1234567 "
  },
  {
    "question":"تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id":"2","answer":" فدان1220567 "
  },
  {
    "question":"ما هى جهة الولاية المختصة باراضى منطقة الحزام الاخضر 6 أكتوبر؟", "id":"3"
  },
]
activeState: boolean[] = [true, false, false];
show(){
  this.showPlus=!this.showPlus
}
toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
}

  ngOnInit(): void {
    this.answers={
      1:[{"answer":" فدان1234567 "}],
      2:[{"answer":"1234567"}],
      3:[{"answer":"جهاز مدينة ٦ أكتوبر هيئة المجتمعات العمرانية الجديدة"}]
    }
  }
  showText(id:any){
    this.answer=this.answers[id]

    // this.answer=this.answer[0]
this.showTextFlag= !this.showTextFlag
  }

}
