import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss']
})
export class QustionsComponent implements OnInit {
  isCollapsed = false;
  showTextFlag = false
  answer: any;
  answers: any;
  showPlus: any
  index: number = 0;
  constructor() { }
  questions = [
    {
      "question": "ماهي مساحة الحزام الأخضر 6 أكتوبر؟", "id": "1", "answer": " فدان1234567 ",
      "plusIcon": "fa-solid fa-plus", "munsIcon": "fa-solid fa-minus"

    },
    {
      "question": "تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id": "2", "answer": "اولا التعاقدات : طرف اول: هيئة المجتمعات العمرانية الجديدة'طرف ثان: شركة 6 أكتوبر الزراعية لاستصلاح وتعمير وتنمية الاراضى تخضع لهيئة الاستثمار",
      "plusIcon": "fa-solid fa-plus", "munsIcon": "fa-solid fa-minus"

    },
    {
      "question": "ما هى جهة الولاية المختصة باراضى منطقة الحزام الاخضر 6 أكتوبر؟", "id": "1", "answer": "جهاز مدينة ٦ أكتوبرـ هيئة المجتمعات العمرانية الجديدة",
      "plusIcon": "fa-solid fa-plus", "munsIcon": "fa-solid fa-minus"
    },
    {
      "question": "ما هو الوضع القانونى لاراضى منطقة الحزام الاخضر 6 أكتوبر؟",
      "id": "2",
      "answer":
        ' تم التقنين من خلال عدة قرارات جمهورية و وزارية و تشمل'
        +'<br/>'+ '\قرار جمهوري رقم 77 بتاريخ  07.02.2017 بضم 8336 فدان غرب  مدينة الشيخ زايد القديمة'
        + '\قرار جمهوري رقم 230 بتاريخ 16.05.2017 بضم 2584 فدان شرق مدينة الشيخ زايد القديمة'
        + 'لتتكون بذلك توسعات مدينة الشيخ زايد بمساحة قدرها 10920 فدان'
        + 'علما بأن مساحة مدينة الشيخ زايد القديمة تبلغ 10600 فدان'
      ,
      "plusIcon": "fa-solid fa-plus", "munsIcon": "fa-solid fa-minus"
    },
    {
      "question": "تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id": "2",
       "answer":"Hello World!\nThis is my string",
      "plusIcon": "fa-solid fa-plus", "munsIcon": "fa-solid fa-minus"
    },
    {
      "question": "تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id": "2", "answer": "lorem",
      "plusIcon": "fa-solid fa-plus", "munsIcon": "fa-solid fa-minus"
    },
  ]
  activeState: boolean[] = [true, false, false];
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
  ngOnInit(): void {
  }
}
