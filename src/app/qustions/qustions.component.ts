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
  linebreak = '\n';
  constructor() { }
  questions = [
    {
      "question": "ماهي مساحة الحزام الأخضر 6 أكتوبر؟", "id": "1", "answer":
        '15614.93 فدان'
        + '<br>' + ''
        + '<br>' + 'و تشمل المساحة الحالية 12494 فدان + مساحة 3120 فدان شرق السكة قامت الدولة بسحبها فى 2014'
    },
    {
      "question": "تسلسل ملكية اراضى الحزام الاخضر 6 أكتوبر؟", "id": "1",
      "answer":
        'اولا التعاقدات:'
        + '<br>' + ''
        + '<br>' + 'طرف اول: هيئة المجتمعات العمرانية الجديدة'
        + '<br>' + 'طرف ثان: شركة 6 أكتوبر الزراعية لاستصلاح وتعمير وتنمية الاراضى•'
        + '<br>' + '27.11.1997 	تم شراء 14021.23 فدان'
        + '<br>' + '19.04.2008 	عقد بيع جديد لمساحة 10758 فدان'

        + '<br>' + ''
        + '<br>' + ''
        + '<br>' + 'ثانيا مراحل التسليم:'
        + '<br>' + ''
        + '<br>' + '1995.11.14		2336.63 فدان'
        + '<br>' + '2002.01.21		 10158 + 3120.30 فدان '
        + '<br>' + 'لمساحة اجماليها 15614.93 فدان'
        + '<br>' + ''
        + '<br>' + ''
        + '<br>' + 'ثالثا القرارات و التحركات:'
        + '<br>' + ''
        + '<br>' + '2009.04.26 قبول طلب تسجيل شهر عقارى'
        + '<br>' + '2010.10.14		الموافقة على رفع نسبة المبانى الى ٧٪'
        + '<br>' + '2011.07.09		سحب 3120 فدان '
        + '<br>' + '2012.07.11		لجنة معاينة لاثبات الجدية (قرار بعدم الجدية لمساحة 12494 فدان خلال يومين فقط)'
        + '<br>' + '2012.08.14		قرار بسحب باقى مساحة الحزام الاخضر 12494 فدان'
        + '<br>' + '2014.09.25		سحب (دون حكم قضائي) لمساحة 3120 فدان'
        + '<br>' + '2014.10.13		قرار بتجميد اى اجراأت على الارض من الهيئة العامة للاستثمار'
        + '<br>' + '2014.11.23		خطاب تأكيد لتجميد الوضع من جهاز ٦ اكتوبر'
        + '<br>' + '2016.02.25		كسر قرار التجميد و البدء فى بناء وحدات سكنية على مساحة 3120 فدان'
    },
    {
      "question": "ما هى جهة الولاية المختصة باراضى منطقة الحزام الاخضر 6 أكتوبر؟",
      "id": "2",
      "answer": "جهاز مدينة ٦ أكتوبر التابع لهيئة المجتمعات العمرانية الجديدة"
    },
    {
      "question": "ما هو الوضع القانونى لاراضى منطقة الحزام الاخضر 6 أكتوبر؟", "id": "2",
      "answer": 'تم التقنين من خلال عدة قرارات جمهورية و وزارية و تشمل'
      + '<br>' + ''
        + '<br>' + 'قرار جمهوري رقم 77 بتاريخ  07.02.2017 بضم 8336 فدان غرب مدينة الشيخ زايد القديمة '
        + '<br>' + ''
        + '<br>' + 'قرار جمهوري رقم 230 بتاريخ 16.05.2017 بضم 2584 فدان شرق مدينة الشيخ زايد القديمة '
        + '<br>' + ''
        + '<br>' + 'لتتكون بذلك توسعات مدينة الشيخ زايد بمساحة قدرها 10920 فدان'
        + '<br>' + ''
        + '<br>' + 'علما بأن مساحة مدينة الشيخ زايد القديمة تبلغ 10600 فدان'
        + '<br>' + ''
        + '<br>' + 'و كذا قرار مجلس ادارة هيئة المجتمعات العمرانية الجديدة بجلسته رقم (103) بتاريخ 26/2/2017'
        + '<br>' + ''
        + '<br>' + 'روابط ذات صلة'
        + '<br>' + ''
        + '<br>' + 'http://www.newcities.gov.eg/about/Decisions/dispdec.aspx?ID=274'





    },
    {
      "question": "ما هي البدائل المطروحة لتغيير النشاط من زراعى الى سكنى لمن هم لم يتقدموا بعد بطلبات لجهة الاختصاص ؟", "id": "2", "answer":
        'بديل نقدى و يقوم المالك بسداد مبلغ 816 جنيهاً للمتر المربع مقابل تغيير النشاط وتوصيل المرافق والنسبة البنائية 15%'
        + '<br>' + ''
        + '<br>' + 'وحددت الهيئة قيمة العلاوة المستحقة لتغيير النشاط من أراضى استصلاح زراعى إلى سكنى بواقع 435 جنيه للمتر المربع '
        + '<br>' + ''
        + '<br>' + 'بالإضافة إلى مد شبكات المرافق الرئيسية حتى رأس القطعة بتكلفة 381 جنيه للمتر'
        + '<br>' + ''
        + '<br>' + 'وحددت «المجتمعات العمرانية» ثلاثة أساليب للسداد وتشمل'
        + '<br>' + ''
        + '<br>' + 'نقدى 25% مقدم و الباقى على أقساط سنوية لمدة 3 سنوات بدون فوائد'
        + '<br>' + ''
        + '<br>' + 'أو 15% مقدم و 3 سنوات سماح و الباقى على 7 أقساط سنوية محملة بالأعباء'
        + '<br>' + ''
        + '<br>' + 'أو بديل السداد العينى بالتنازل للهيئة عن 50% من مساحة القطعة'



    },
    {
      "question": "ما هى الانشطة و نسب البناء و الارتفاعات و الكثافة السكانية آلمسموح بها بالمنطقة؟", "id": "2", "answer":
      'الانشطة هى اسكان فاخر مع امكانية تحويل النشاط الى خدمى مقابل دفع رسوم اضافية تحددها الهيئة'
      + '<br>' + ''
        + '<br>' + 'نسب البناء 15%'
        + '<br>' + ''
        + '<br>' + 'بدروم + ارضى + علوى + روف يمثل 25% من مساحة الدور الارضى'
        + '<br>' + ''
        + '<br>' + 'الكثافة السكانية هى 45 شخص للفدان'
        + '<br>' + ''
        + '<br>' + ' اى فى انه حالة فدان واحد يتم ضرب'
        + '<br>' + '1x45'
        + '<br>' + ''
        + '<br>' + 'ثم يقسم الناتج على 4.3 و هو عدد الافراد المفترض ان يشغلوا كل وحدة سكنية'
    },
    {
      "question": "ما هى الردود المسوح بها ؟", "id": "2", "answer":
       '4 متر امامى'
       + '<br>' + ''
        + '<br>' + '6 متر خلفى'
        + '<br>' + ''
        + '<br>' + '3 متر جانبي'
        + '<br>' + ''
        + '<br>' + 'الردود الخارجية مع الطرق 6 متر'
    },
    {
      "question": "ما هى قواعد انشاء اسوار تحيط بالمشروع ؟", "id": "2", "answer":
         'تم وضع ضوابط لشكل الاسوار في الحزام عباره عن سمل خرساني او طوب بارتفاع 50 سم يعلوه مصبعات من الخشب او الحديد و يمكن كسو هذه المصبعات بزراعات'
         + '<br>' + ''
        + '<br>' + 'و بيتم تجليد السمل باحجار طبيعيه او طوب فرعوني او اي تجليد يعطى الشكل الجمالى المطلوب'

    },
    {
      "question": "فى حالة تغيير النشاط الى خدمى ما هى نسب البناء المسموح بها و ما هى رسوم التغيير ؟", "id": "2", "answer":
       'يحق للمالك تغييرالنشاط جزءيا على مساحة 12% من اجمالى مساحة القطعة و يسمح بالبناء على 30% من ال12%'
       + '<br>' + ''
        + '<br>' + 'و يتم تحصيل رسسوم اضافية تتراوح ما بين 2500 الى 3000 جنيه مصرى عن كل متر مربع من المساحة الخدمية '

    },
    {
      "question": "ما هو العرض المقرر للشوارع الداخلية و الارصفة ؟", "id": "2", "answer":
       'عرض الشارع الاتجاهين 9 متر + 2 متر رصيف لكل جانب'
       + '<br>' + ''
        + '<br>' + 'فى حالة وجود فيلات على جانب واحد فقط يكون الرصيف الملاصق للسور 1 متر '
        + '<br>' + ''
        + '<br>' + 'فى حالة شارع اتجاه واحد يجب الا يقل العرض عن 7 متر + الارصفة'
    },
    {
      "question": "ما قيمة رسوم القرار الوزارى و تكلفته الاجمالية؟", "id": "2", "answer":
  '17200 جنيه هى قيمة رسوم القرار الوزارى عن كل فدان تسدد لهيئة المجتمعات العمرانية الجديدة'
        + '<br>' + ''
        + '<br>' + 'يضاف اليها اتعاب المكتب الهندسى لعمل التصميمات الهندسية'
        + '<br>' + ''
        + '<br>' + 'و يستغرق استخراج القرار شهرين تقريبا'
    },
  ]
  activeState: boolean[] = [true, false, false];
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
  ngOnInit(): void {
  }
}
