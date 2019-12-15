import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as $ from "jquery";
import { WOW } from "wowjs";

@Component({
  selector: "app-vegeterian",
  templateUrl: "./vegeterian.component.html",
  styleUrls: ["./vegeterian.component.scss"]
})
export class VegeterianComponent implements OnInit, AfterViewInit {
  vegTypesTitles = [
    "أولا الحبوب",
    "ثانيا البقوليات",
    "ثالثا الخضراوات",
    "رابعا الفواكه"
  ];
  pills = [
    {
      imgName: "../../../assets/img/vegetarian/rice.jpg",
      title: "الأرز",
      engTitle: "rice",
      shortDesc:
        "يُعد الأرز أحد أقدم الحبوب المستخدمة على وجه الأرض، كما أنَّه يمتلك شعبية واسعة؛ فهو الغذاء الأساسي لأكثر من نصف سكان العالم."
    },
    {
      imgName: "../../../assets/img/vegetarian/wheat.jpg",
      title: "القمح",
      engTitle: "wheat",
      shortDesc:
        "هو نبات حولي من الفصيلة النجيلية، وينتج القمح حبوباً مركبة تعتبر هذه الحبوب الغذاء الرئيسي لكثير من شعوب العالم"
    },
    {
      imgName: "../../../assets/img/vegetarian/corn.jpg",
      title: "الذرة",
      engTitle: "corn",
      shortDesc:
        "الذُرة هي نوع من النباتات، وتعد ثالث أهم المحاصيل في العالم بعد القمح والأرز،  وموطنها الأصلي هو جنوب المكسيك وغواتيمال"
    },

    {
      imgName: "../../../assets/img/vegetarian/barley.jpg",
      title: "الشعير",
      engTitle: "barley",
      shortDesc:
        "نبات عشبي حولي من الفصيلة النجيلية، وتزرع منه أنواع كثيرة منها الشعير الأجرد أو السلت. وهو أقدم مادة استعملها الإنسان في غذائه"
    }
  ];

  legumes = [
    {
      imgName: "../../../assets/img/vegetarian/beans.jpg",
      title: "الفول",
      engTitle: "beans",
      shortDesc:
        "من أقدم المحاصيل الزراعية حول العالم التي تنتمي إلى فصيلة البقوليات، ويعدّ  مصدراً بديلاً للبروتين. يستعمل كثيرًا في المطبخ العربي"
    },
    {
      imgName: "../../../assets/img/vegetarian/lentils.jpg",
      title: "العدس",
      engTitle: "lentils",
      shortDesc:
        "هو نوع من النباتات يتبع جنس العدس من الفصيلة البقولية. وهو أوائل النباتات التي استئنسها الإنسان، قبل حوالي 13000 سنة"
    },
    {
      imgName: "../../../assets/img/vegetarian/chickpeas.jpg",
      title: "الحمص",
      engTitle: "chickpeas",
      shortDesc:
        "هو جنس نباتي يتبع فصيلة البقولية من رتبة الفوليات، ويوجد نوعين منتشرين منه هما حمص دبسي، وحمص كابولي"
    },
    {
      imgName: "../../../assets/img/vegetarian/peas.jpg",
      title: "البازلاء",
      engTitle: "peas",
      shortDesc:
        "تندرج البازلاء أو البسِلّة تحت الخضراوات وهي من الفصيلة الفراشية وثمارها عبارة عن قرون تحتوي بداخلها حبات صغيرة كروية الشكل"
    }
  ];

  vegetables = [
    {
      imgName: "../../../assets/img/vegetarian/lettuce.jpg",
      title: "الخس",
      engTitle: "lettuce",
      shortDesc:
        "يتبع جنس الخس من الفصيلة النجمية أو المركبة، وهو من الخضراوات التي تؤكل أوراقها طازجة أو في السلطات وهي غنية بالمواد الغذائية"
    },
    {
      imgName: "../../../assets/img/vegetarian/parsley.jpg",
      title: "البقدونس",
      engTitle: "parsley",
      shortDesc:
        "هو نبات عشبي ثنائي الحول يتبع الفصيلة الخيمية. له سوق عديدة تنمو جميعها من جذر واحد والسوق قائمة ومدورة ومتفرعة."
    },
    {
      imgName: "../../../assets/img/vegetarian/tomato.jpg",
      title: "الطماطم",
      engTitle: "tomato",
      shortDesc:
        "الطماطم أو البندورة نبات من الفصيلة الباذنجانية أو فصيلة عنب الديب تزرع الطماطم في المناطق المعتدلة والحارة."
    },
    {
      imgName: "../../../assets/img/vegetarian/cucumber.jpg",
      title: "الخيار",
      engTitle: "cucumber",
      shortDesc:
        "الخيار، أو القثد نبتة بستانية متسلقة من الفصيلة القرعية التي تضم القرع والكوسا وجميع أنواع البطيخ، ويتراوح طولها من 2.5-90 سم"
    }
  ];

  fruits = [
    {
      imgName: "../../../assets/img/vegetarian/apple.jpg",
      title: "التفاح",
      engTitle: "apple",
      shortDesc:
        "هو نوع نباتي يتبع جنس التفاح وهو من الفواكه لأنه يحتوي بذور من الفصيلة الوردية. و يُعتَصر من بعض الأصناف شراب يسمى 'سيدر'"
    },
    {
      imgName: "../../../assets/img/vegetarian/orange.jpg",
      title: "البرتقال",
      engTitle: "orange",
      shortDesc:
        "البرتقال هو نوع من أنواع الحمضيات تنتجه شجرة البرتقال، وهو مصدر ممتاز لفيتامين سي ما يساعد على امتصاص الكالسيوم في الجسم."
    },
    {
      imgName: "../../../assets/img/vegetarian/banana.jpg",
      title: "الموز",
      engTitle: "banana",
      shortDesc:
        "هو من فصيلة 'الأعشاب'، ويعود سبب ذلك إلى ساق النبتة الغير خشبي الذي يتألف من أوراق ملتفّة على بعضها .وهو من النباتات ذات الفلقة الواحدة."
    },
    {
      imgName: "../../../assets/img/vegetarian/pomegranate.jpg",
      title: "الرمان",
      engTitle: "pomegranate",
      shortDesc:
        "الرمان من الأشجار المعمرة النفضية انتشرت زراعتها في كثير من البلدان العربية لدفئها. وينتشر في مناطق البحر الأبيض المتوسط"
    }
  ];

  forbidden = [
    {
      imgName: "../../../assets/img/vegetarian/tobacco.jpg",
      title: "التبغ",
      engTitle: "tobacco",
      shortDesc:
        "هو نبات يزرع للحصول علي أوراقه التي يصنع منها السجائر والسيجار والنشوق والمضغة. ويعتبر مخدرا ويسبب الإدمان لوجود مادة النيكوتين به."
    },
    {
      imgName: "../../../assets/img/vegetarian/coca.jpg",
      title: "الكوكا",
      engTitle: "coca",
      shortDesc: "هي من النباتات المعمرة والتى يصل عمرها فى بعض البلدان إلى ما يقرب من العشرين عاما، ويبلغ متوسط ارتفاعها إلى حوالى من 8 : 10 قدم."
    },
    {
      imgName: "../../../assets/img/vegetarian/cannabis.jpg",
      title: "الحشيش",
      engTitle: "cannabis",
      shortDesc: "نبات علاجي له تأثير مخدر من جنس كاسيات البذور من عائلة قنبية. هناك ثلاث أجناس معروفة للنبتة، قنب مزروع وقنب إنديكا، والقنب روديراليس"
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    //new WOW({ live: false }).init();
  }
}
