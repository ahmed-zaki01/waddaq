import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.scss"]
})
export class AnimalComponent implements OnInit {
  aniTypesTitles = ["أولا البرية", "ثانيا البحرية", "ثالثا الطيور", "ثانيا الطيور"];

  wildAnimals = [
    {
      imgName: "../../../assets/img/animal/camel.jpg",
      title: "الإبل",
      engTitle: "camel",
      shortDesc: "هو حيوان من رتبة شفعيات الأصابع، من فصيلة الجمليات. يشتهر بالكتلة الدهنية على ظهره التي تسمى السنام، ويسمى شعر الجمل بالوبر"
    },
    {
      imgName: "../../../assets/img/animal/cow.jpg",
      title: "البقر",
      engTitle: "cow",
      shortDesc: "البقرة حيوان ثديي مجتر، وقد وُجدت أصلا في الطبيعة سائبة بشكل وحشي، وتم استئناسها منذ زمن طويل، ويؤكل لحمها ويشرب حليبها."
    },
    {
      imgName: "../../../assets/img/animal/sheep.jpg",
      title: "الغنم",
      engTitle: "sheep",
      shortDesc: "هي من الثدييات المدجنة ونباتية من عائلة البقاريات والعائلة الفرعية الماعز. ويربي الإنسان الغنم من أجل لحومها، وحليبها، صوفها وجلدها"
    },
    {
      imgName: "../../../assets/img/animal/rabbit.jpg",
      title: "الأرنب",
      engTitle: "rabbit",
      shortDesc: "الأرنب هو حيوان ثدي مستأنس يربيه الناس من أجل لحومه وفرائه الناعم، كما أنه يربى أحياناً كحيوان أليف لم يكن شأنه شأن القطط والكلاب."
    }
  ];

  seaAnimals = [
    {
      imgName: "../../../assets/img/animal/fish.jpg",
      title: "السمك",
      engTitle: "fish",
      shortDesc: "السمكة هي أي عضو من تلك المجموعة من الكائنات الحية الشبه شعبوية التي تضم جميع الحيوانات المائية القحفية ذات الخياشيم."
    },
    {
      imgName: "../../../assets/img/animal/octopus.jpg",
      title: "الأخطبوط",
      engTitle: "octopus",
      shortDesc: "هي رتبة من طائفة الرأسقدميات، له ثمانية مجسات طويلة تتخذ هيئة لوامس مليئة بالماصات، وهو يصنف ضمن مجموعة الرخويات"
    },
    {
      imgName: "../../../assets/img/animal/shrimp.jpg",
      title: "الجمبرى",
      engTitle: "shrimp",
      shortDesc: "هو الروبيان الكبير، حيوان مائي لافقاري قشري يتنوع إلى حوالي ألفي نوع. ينتشر في أنحاء العالم، ويعيش في الماء المالح والعذب."
    },
    {
      imgName: "../../../assets/img/animal/squid.jpg",
      title: "الحبار",
      engTitle: "squid",
      shortDesc: "يتبع طائفة رأسيات الأرجل، له صدفة كلسية داخلية تمتلئ فراغاتها بغاز وبتغيير كمية الغاز يستطيع الحبار أن يتحكم بالطفو والغوص."
    }
  ];

  birds = [
    {
      imgName: "../../../assets/img/animal/chicken.jpg",
      title: "الدجاج",
      engTitle: "chicken",
      shortDesc: "هو حيوان مستأنس، ويعد من الطيور الدواجن، قصير الجناحين والذَّنب، ذكره يسمى ديكاً، ويستخدمه الإنسان أساسا من أجل بيضه ولحمه."
    },
    {
      imgName: "../../../assets/img/animal/pigeon.jpg",
      title: "الحمام",
      engTitle: "pigeon",
      shortDesc: "هو جنس من الطيور المنتشرة على نطاق واسع وتضم مجموعة من الحمام ذو جسم سمين متوسط إلى كبير الحجم."
    },
    {
      imgName: "../../../assets/img/animal/rooster.jpg",
      title: "الديك الرومى",
      engTitle: "rooster",
      shortDesc: "تتواجد هذه الطيور في البرية في شمال ووسط أمريكا، وحاليا يتم تربيتها في حقول كبيرة من أجل لحومها أساسآ وربما بيضها الكبير."
    },
    {
      imgName: "../../../assets/img/animal/goose.jpg",
      title: "الأوز",
      engTitle: "goose",
      shortDesc: "الأوز هو العضو الأكبر حجما من عائلة البط ويتميز عن اقرانه بالعائله بطول رقبته. الأوز من أكبر الطيور التي تستطيع الطيران."
    }
  ];


  wildForbidden = [
    {
      imgName: "../../../assets/img/animal/pig.jpg",
      title: "الخنزير",
      engTitle: "pig",
      shortDesc: " جنس من الثدييات ذوات الظلف غير المجترة، ومنشأه العالم القديم في قارات آسيا وأفريقيا لا سيما في المناطق الموحلة ومناطق السافانا."
    },
    {
      imgName: "../../../assets/img/animal/donkey.jpg",
      title: "الحمار",
      engTitle: "donkey",
      shortDesc: "الحمار هو حيوان من جنس الحصان، وهو حيوان أليف، ويوجد نوع يعيش بصورة برية في وديان و صحاري أفريقيا وآسيا وبراريها ويسمى بالحمار الوحشي."
    },
    {
      imgName: "../../../assets/img/animal/lion.jpg",
      title: "الأسد",
      engTitle: "lion",
      shortDesc: "حيوان من الثدييات من فصيلة السنوريات وأحد السنوريات الأربعة الكبيرة المنتمية لجنس النمر، ويُعد ثاني أكبر السنوريات في العالم بعد الببر."
    },
    {
      imgName: "../../../assets/img/animal/dog.jpg",
      title: "الكلب",
      engTitle: "dog",
      shortDesc: "حيوان من الثدييات من فصيلة الكلبيات من اللواحم. عادة ما يتم وصف هذا الحيوان بالوفاء، ويطلق عليه لقب 'أفضل صديق للإنسان'."
    }
  ];


  birdForbidden = [
    {
      imgName: "../../../assets/img/animal/falcon.jpg",
      title: "الصقر",
      engTitle: "falcon",
      shortDesc: "من فصيلة الصقريات. توجد على الكرة الأرضية في مختلف المناطق والنطاقات المناخية عدة أنواع من الصقور تتعدى العشرات."
    },
    {
      imgName: "../../../assets/img/animal/eagle.jpg",
      title: "العقاب",
      engTitle: "eagle",
      shortDesc: "هو أكبر طائر من الجوارح، يتميز بأجنحته الطويلة التي تحركها عضلات قوية مما يجعله قادراً على الطيران عالياً لمسافات طويلة."
    },
    {
      imgName: "../../../assets/img/animal/owl.jpg",
      title: "البومة",
      engTitle: "owl",
      shortDesc: "ينشط بصورة رئيسية ليلا. وهو يستعين بحاسة سمعه القوية وعينيه الكبيرتين اللتين توفران رؤية ليلية جيدة للإصطياد."
    }
  ];



  constructor() {}

  ngOnInit() {}
}
