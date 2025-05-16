// ..........................................................
let cardProduct = document.getElementById("cart-product");
let btnCart = document.getElementById("btn-cart");
let indexProduct = document.getElementById("index-product");
let whatsappBuyBtn = document.getElementById("whatsapp-buy");
let allData = [
  {
    id: 0,
    title: "DQ HAIR+",
    dec: ". تعزيز نمو الشعر وكثافته فعال للصلع الوراثي منع تساقط الشعر",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/DQHAIR+.jpg",
  },
  {
    id: 1,
    title: "EGF GENESIS",
    dec: " خلاية جزعية يحتوي على عامل نمو البشرة  شد البشرة وتقويته",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/EGFGENESIS.jpg",
  },
  {
    id: 2,
    title: "SUPREALL",
    dec: "محلول تذويب الدهون   تأثير مضاد للسيلوليت  تقليل الدهون الموضعية",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/SUPREALL.webp",
  },
  {
    id: 3,
    title: "GSH + C1000",
    dec: "محلول تبييض البشرة  يعالج فرط التصبغ بقع الشمسمضاد قوي للاكسدة",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/GSHC1000.webp",
  },
  {
    id: 4,
    title: "REJUVEYES",
    dec: "ازالة الهالات السوداء ازالة الانتفاخات تحت العين تحسين الخطوط الدقيقة والتجاعيد اعادة بناء الكولاجين والايلاستين",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/REJUVEYES.webp",
  },
  {
    id: 5,
    title: "DERMAECLAT",
    dec: " يحسن لون البشرة تحت الابط والبكيني فعال ولايسبب تحسس",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/DERMAECLAT.webp",
  },
  {
    id: 6,
    title: " MESO GLOW",
    catg: "DERMAQUAL",
    price: 20,
    dec: "يعيد الكولاجين المفقود  يضيئ لون البشرة يعزز مرونة الجلد وشدته يرفع ويرطب البشر",
    img: "./images/MESOGLOW.webp",
  },
  {
    id: 7,
    title: "TRANEXPLUS",
    dec: "حمض الترانيكساميك الغلوتاثيون اسكوربيل جلوكوزيد(فياتامين C) حمض الهيالورنيك الجزيئي العالي والمنخفض.",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/Tranex.webp",
  },
  {
    id: 8,
    title: "DQ HA35",
    dec: " تجديد مكثف للبشرة معزز الترطيب تقليل الخطوط الدقيقة والتجاعيد",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/DQ-HA35.webp",
  },
  {
    id: 9,
    title: "NEFERTTITI LIFT",
    dec: "شد الرقبة خط الفك تجديد العنق",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/NEFERTITI.webp",
  },
  {
    id: 10,
    title: "DQ EXOCELL",
    dec: ". يجعل البشرة اكثر امتلاء ويخفف من ظهورالخطوط الدقيقة تعزيز تماسك البشرة ونعومتهاتعزيز الرطوبة المفقودة و توحد لون البشرة",
    price: 20,
    catg: "DERMAQUAL",
    img: "./images/Exocell.webp",
  },
  {
    id: 11,
    title: "Skin Repair",
    dec: ` كوكتيل السيلوليت هو حل فعال لتقليل الدهون العنيدة والسيلوليت. يحتوي المزيج الغني من L-Carnitine و Caffeine و Organic Silicon و Asian Centella على خصائص تحلل الدهون وتقليل السيلوليت ، مما يوفر متانة ومرونة ونعومة للبشرة.`,
    price: 20,
    catg: "MCCM",
    img: "./images/SkinRepair.jpg",
  },
  {
    id: 12,
    title: "Whitening",
    dec: `كوكتيل التبييض يجمع بين الجلوتاثيون وفيتامين ج وحمض البيروفيك
وهو مزيج قوي مضاد للأكسدة ومضاد للشيخوخة لعلاجات إزالة التصبغ
ويوفر خصائص تبييض البشرة التي تساعد على تقليل الشوائب الناتجة عن التعرض لأشعة الشمس والعمر.`,
    price: 20,
    catg: "MCCM",
    img: "./images/Whitening.jpg",
  },
  {
    id: 13,
    title: "Hair Cocktail",
    dec: `كوكتيل الشعر  تم تصميمه ليطبق على فروة الرأس.
 يوفر مزيج الجلوتاثيون والبانثينول والبيوتين والسيليكون العضوي وتعتبر هذه العناصر الغذائية التي تقوي بصيلات الشعر وتغذيها وتعزز نمو شعر الجديد.`,
    price: 20,
    catg: "MCCM",
    img: "./images/HairCocktail.jpg",
  },
  {
    id: 14,
    title: "MELANOout",
    dec: `ميلانو اوت كوكتيل هي تركيبة قوية وغنية من مضادات الأكسدة
 تعمل بشكل خاص على تقليل فرط تصبغ من أصل ميلاني بسبب التعرض لأشعة الشمس ، كبقع داكنة ، وكذلك علامات حب الشباب والبقع العمرية. 
يمنع الشيخوخة الضوئية ويوحد لون البشرة ويمنحها مظهرًا أكثر شبابًا.`,
    price: 20,
    catg: "MCCM",
    img: "./images/MELANOout.jpg",
  },
  {
    id: 15,
    title: " Out Countour",
    dec: `يعمل على وجه التحديد لعلاجات حول منطقة العين، مثل أكياس العين والهالات السوداء والخطوط الدقيقة والتجاعيد.
 يعزز شد البشرة ، ويزيد من الرطوبة ، ويصفي الأكياس تحت العينين ويحسن لون الهالات السوداء.`,
    price: 20,
    catg: "MCCM",
    img: "./images/OutCountour.jpg",
  },
  {
    id: 16,
    title: "DNA",
    dec: `هو مكون نشط بيولوجيًا يتمتع بخصائص تجديد عالية.
يعزز إعادة هيكلة أنسجة البشرة. يزيد من لمعان البشرة ومرونتها ، مما يساهم في ظهور الشباب.`,
    price: 20,
    catg: "MCCM",
    img: "./images/DNA.jpg",
  },
  {
    id: 17,
    title: " CLH Lipas",
    dec: `يعمل هذا المنتج على التمثيل الغذائي للدهون الثلاثية كما يساعد على إذابة الدهون المترجمة المتراكمة. تعمل الإنزيمات النشطة لـ CLH Lipase (Collagenase و Lipase و Hyaluronidase) معًا لخلق تأثير تخسيس وشد كبير على الجسم.`,
    price: 20,
    catg: "MCCM",
    img: "./images/CLHLipase.jpg",
  },
  {
    id: 18,
    title: "Cellulite",
    dec: `كوكتيل السيلوليت هو حل فعال لتقليل الدهون العنيدة والسيلوليت. يحتوي المزيج الغني من L-Carnitine و Caffeine و Organic Silicon و Asian Centella على خصائص تحلل الدهون وتقليل السيلوليت ، مما يوفر متانة ومرونة ونعومة للبشرة.`,
    price: 20,
    catg: "MCCM",
    img: "./images/Cellulite.jpg",
  },
  {
    id: 19,
    title: "Deoxycholic",
    dec: ` هو مكون نشط مبتكر,
 يستخدم في مستحلب الدهون لامتصاص الأمعاء.`,
    price: 20,
    catg: "MCCM",
    img: "./images/Deoxycholic.jpg",
  },
  {
    id: 20,
    title: "Lipo firming",
    dec: ` يعمل كعلاج قوي مضاد للرطوبة ،
 يحفز نشاط الخلايا الليفية التي تشارك بشكل مباشر في تخليق الكولاجين والإيلاستين.
 كما أنه يعمل على الجذور الحرة ويمنع الأكسدة الخلوية ويقوي ويشد بشرة الوجه والجسم.
`,
    price: 20,
    catg: "MCCM",
    img: "./images/Lipofirming.jpg",
  },
  {
    id: 21,
    title: "Antiaging",
    dec: ` كوكتيل مضاد للشيخوخة غني بالمكونات المنشطة المستخدمة لتجديد شباب البشرة ، مثل البانثينول ، DMAE ، السيليكون العضوي ، الكينتيللا الآسيوي وحمض الهيالورونيك.
يساعد هذا المزيج الاستثنائي على تقليل علامات الشيخوخة ، مما يوفر بشرة رطبة ومغذية وأكثر نعومة وحيوية.`,
    price: 20,
    catg: "MCCM",
    img: "./images/Antiaging.jpg",
  },
  {
    id: 22,
    title: "Hyaluronic Acid 3.5",
    dec: ` يساعد في تقليل ظهور الخطوط الدقيقة والتجاعيد التي تحافظ على رطوبة الجلد ، مما يخلق تأثيرًا ممتلئًا. عندما يكون الجلد محميًا ومرطبًا ، يمكن أن يحدث زيادة في إنتاج خلايا الجلد. 
بالإضافة إلى ذلك ، يوفر Hyaluronic Acid النقي  مرونة أكبر للبشرة ويحفز تكوين الكولاجين.`,
    price: 20,
    catg: "MCCM",
    img: "./images/HyaluronicAcid3.5.jpg",
  },
  {
    id: 23,
    title: "HYALURONIDASE",
    dec: `يتصرف مثل مزيل البلمرة من الجليكوزامينوجليكان. له نشاط إنزيمي عالي ويعمل كعامل ناشر للمكونات الأخرى. 
يعمل على القضاء على احتباس الماء وتقليل السمنة.
 يمارس عملاً معاد هيكلته على النسيج الضام ويعيد توازن الجلد المصاب بـ الحثل الشحمي المائي.`,
    price: 20,
    catg: "MCCM",
    img: "./images/HYALURONIDASE.jpg",
  },
  {
    id: 24,
    title: "AEC",
    dec: `
   c وفيتامين EوفيتامينAتمنع الترهل والشيخوخة الجلدية بسبب مكوناته النشطة القائمة على فيتامين
    `,
    price: 20,
    catg: "MCCMS",
    img: "./images/AEC.jpg",
  },
  {
    id: 25,
    title: "Clutathione",
    dec: `الجلوتاثيون هو أحد مضادات الأكسدة القوية  مكون أساسي لتفتيح البشرة والكلف وعلاجات إزالة التصبغ ، وذلك لقدرته على تثبيط تكوين الميلانين.`,
    price: 20,
    catg: "MCCMS",
    img: "./images/Clutathione.jpg",
  },
  {
    id: 26,
    title: " Vitamin C",
    price: 20,
    dec: `فيتامين سي له خصائص مضادة للأكسدة ومزيلات التصبغ تحمي البشرة. 
يقلل هذا المكون من ظهور التجاعيد ويساعد في إنتاج الكولاجين.
 ويعزز تماسك البشرة ويمنحها مظهرًا متوهجًا. تتلاشى علامات تفاوت لون البشرة والبقع مع تطبيقه.`,
    catg: "MCCMS",
    img: "./images/VitaminC.jpg",
  },
  {
    id: 27,
    title: "Organic silicon",
    price: 20,
    dec: `السيليكون العضوي هو منتج عضوي مشتق من الأعشاب البحرية التي تحبس الرطوبة في البشرة وبالتالي تعمل على تقوية البشرة وتقويتها وتوحيد لونها. 
إنه فعال في علاج السيلوليت ، والجلد التالف. إنه مُجدد ممتاز ومكون فعال مرطب ، مع مضادات الأكسدة وخصائص إزالة السموم`,
    catg: "MCCMS",
    img: "./images/Organicsilicon.jpg",
  },
  {
    id: 28,
    title: "B_complex",
    price: 20,
    catg: "MCCMS",
    dec: `هو مركب فيتامينات يحتوي على فيتامينات   
 مجمع يساعد في تجديد البشرةB12 و B1 و B3 و B6 وB9 .
  عن طريق تكوين خلايا جديدة ، ويمد الجسم و
 الجلد بالأحماض الدهنية الأساسية ويمنع تلف الخلايا.
`,
    img: "./images/B_complex.jpg",
  },
  {
    id: 29,
    title: "Biotin",
    dec: `يعمل بمثابة قابض طبيعي للجلد وفروة الرأس. يساعد في إنتاج خلايا جديدة ويساعد على توازن الوظيفة الدهنية ، مما يؤدي إلى بشرة أكثر صحة. البيوتين هيدريكسين أثبت فعاليته في محاربة تساقط الشعر وتحفيز نمو الشعر الجديد.`,
    price: 20,
    catg: "MCCMS",
    img: "./images/Biotin.jpg",
  },
  {
    id: 30,
    title: " Colagen pyruvat",
    dec: `كولاجين بيروفات له خصائص تجديد وشفاء ، وتحسين مرونة وترطيب طبقات الجلد العميقة والسطحية.`,
    price: 20,
    catg: "MCCMS",
    img: "./images/Colagenpyruvat.jpg",
  },
  {
    id: 31,
    title: ".Vitamin A",
    price: 20,
    dec: ` يحفز تكوين الكولاجين ويعكس علامات الشيخوخة الضوئية المبكرة
مما يزيد من مرونة الجلد مع تعزيز رطوبته. يخترق المكون النشط الطبقات الخارجية من الجلد ، ويرمم الطبقات السفلية.`,
    catg: "MCCMS",
    img: "./images/VitaminA.jpg",
  },
  {
    id: 32,
    title: "Dr.pen A1",
    dec: `
يساعد في ادخال المواد تحت الجلد.
يمكن علاج جميع أنواع البشرة تقريبًا
يعالج ندبات حب الشباب
يعالج الندبات الجراحية وعلامات تمدد الجلد
يعالج التصبغ والمسام الكبيرة.
يتميز بتعديل السرعة الذكي(5سرعات)
`,
    price: 20,
    catg: "ElectronicTools",
    img: "https://www.dr-pen.co.uk/wp-content/uploads/2021/07/1b4f0a518f.jpg",
  },
  {
    id: 33,
    title: "Dr.pen A6",
    price: 20,
    dec: `
يساعد في ادخال المواد تحت الجلد.

يمكن علاج جميع أنواع البشرة تقريبًا
يعالج ندبات حب الشباب
يعالج الندبات الجراحية وعلامات تمدد الجلد
يعالج التصبغ والمسام الكبيرة.
يتميز بتعديل السرعة الذكي(5سرعات)
2 × بطارية قابلة للشحن
نطاق تعديل الإبرة من 0 مم إلى 2.5 مم
زيادة معدل امتصاص العناية بالبشرة بنسبة 300%`,
    catg: "ElectronicTools",
    img: "https://fyaestheticboutique.co.uk/wp-content/uploads/2021/11/a6666-1.jpg",
  },
  {
    id: 34,
    title: "Plasma pen",
    price: 20,
    catg: "ElectronicTools",
    dec: `يعمل على إزالة الزوائد الجلدية والشامات والثآليل وغيرها
تحسين التجاعيد والندبات.
شد الاجفان.  
آمن ولا يظهر أي آثار جانبية`,
    img: "./images/Plasmapen.jpg",
  },
  {
    id: 35,
    title: "Diamond Derma brasion",
    dec: ` Diamond Dermabrasion إنه تحسن إبداعي في الكشط الجلدي البلوري الدقيق. يوفر 
    إجراء إعادة تسطيح الجلد غير الجراحي باستخدام رؤوس الماس المعقمة للتقشير. وافرك الخلايا الميتة في طبقة الجلد العلوية متبوعة بتنظيف
 Blackhead شفط الجسيمات مع أي أوساخ وجلد ميت. تتضمن وظائف هذه الماكينة المذهلة رذاذ الوجه / تجديد الجلد / مكافحة الشيخوخة / إزالة حب الشباب 
  كما هو الحال مع أي تقنية ، يجب استخدامها باعتدال.`,
    price: 20,
    catg: "ElectronicTools",
    img: "https://i5.walmartimages.com/asr/b50001d5-f2d3-4b7a-a637-3d0c9652b92b.927cce766b94679b41cec78c3149c041.jpeg",
  },
  {
    id: 35,
    title: "Oxygen Machine Facial 7 in 1 Hydra Dermabrasion",
    price: 20,
    catg: "ElectronicTools",
    dec: `جهاز الهايدروفيشال - جهاز التقشير بالاحماض
وفر المساحة والمال مع ماكينة العناية بالبشرة متعددة الوظائف 7 في 1. 
 فهو يحسن الدورة الدموية ويعزز إنتاج الكولاجين ويزيل الجلد الميت والرؤوس السوداء والتجاعيد.  يقلص المسام، ويزيل الهالات السوداء حول العينين، ويزيل الاحمرار وأكياس العين.  تبييض وشد ورفع وشد الجلد`,
    img: "./images/Dermabrasionjpg.jpg",
  },
  {
    id: 36,
    title: "جهاز بخار 2 ب 1",
    price: 20,
    catg: "ElectronicTools",
    dec: `جهاز بخار احترافي 2 في 1 للوجه مع رذاذ ساخن وبارد، جهاز بخار للوجه للتنظيف العميق للوجه، جهاز بخار للوجه للمنزل وصالونات التجميل والمنتجعات الصحية`,
    img: "https://m.media-amazon.com/images/I/61hrhwsE8GL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: 37,
    title: "PINK GLOW",
    price: 20,
    catg: "Other",
    dec: `
 يوصى باستخدام علاج التوهج الوردي بشكل خاص للبشرة المتعبة والمتغيرة اللون،
 يعمل بشكل رائع في مكافحة البقع العمرية والالتهابات وتفاوت لون البشرة والكلف، أي تغير اللون بسبب الشمس أو الحمل أو الهرمونات.

 يساعد على تفتيح المناطق المتغيرة اللون من الجلد ويحارب الجذور الحرة - بمساعدة الببتيدات، وهو مزيج من العديد من الفيتامينات ومضادات الأكسدة القوية.`,
    img: "./images/PINKGLOW.jpg",
  },
  {
    id: 38,
    title: "REVOLAX",
    price: 20,
    catg: "Other",
    dec: ` عبارة عن حشو حمض عالي النقاء وقابل للتحلل الحيوي يحتوي على حمض الهيالورونيك (HA) بتركيز 24 ملجم/مل، مع إضافة ليدوكائين بتركيز 0.3%، يعمل ريفولاكس كفلتر في الحياة الواقعية، مما يعزز ملامح الوجه من خلال  التضخيم.`,
    img: "./images/REVOLAX.jpg",
  },
  {
    id: 39,
    title: "Bonetta",
    price: 20,
    catg: "Other",
    dec: `عبارة عن مجموعة من الحشوات الجلدية التي توفر نتائج طويلة الأمد ومكثفة.  تبقى هذه الحشوات لفترة أطول من الحشوات التقليدية، والتي تدوم عادةً ما بين ثلاثة وستة أشهر.`,
    img: "https://fillerskorea.wpenginepowered.com/wp-content/uploads/2020/10/2019112014451798.jpg",
  },
  {
    id: 40,
    title: "ELASTY",
    price: 20,
    catg: "Other",
    dec: "عبارة عن حشو جلدي يحتوي على حمض الهيالورونيك (HA) بتركيز 24 ملغ/مل، مع إضافة ليدوكائين بتركيز 0.3%.",
    img: "https://elasty.co.kr/eng/_img/main/main_sec01_img1.jpg",
  },
  {
    id: 41,
    title: "Hyaron",
    price: 20,
    catg: "Other",
    dec: `
ابرة النضارة هيارون 
 هيه معزز للبشرة تتكون في المقام الاول من هيالورونات الصوديوم وهوة الشكل الملحي لحمض الهيالورنيك 
مصمم لتعزيز ترطيب البشرة 
تعزيز ملمسها 
تخليق الكولاجين والايلاستين
مما يؤدي الى مظهر اكثر تماسكا وشبابا.`,
    img: "./images/Hyaron.jpg",
  },
  {
    id: 42,
    title: "Kiara Reju",
    price: 20,
    catg: "Other",
    dec: `ابرة النضارة كيارا ريجو
هو حل مبتكر لتجديد شباب البشرة يسخر القوة المشتركة لـ بولي ديوكسي ريبونوكليوتيد (PDRN)، حمض الهيالورونيك (HA)، والنياسيناميد. في عالم العناية المتقدمة بالبشرة، يحتل هذا الثلاثي الديناميكي مركز الصدارة، ويعمل لرفع بشرتك إلى مستويات جديدة من الإشراق والحيوية.`,
    img: "https://images.shopcdn.co.uk/b2/01/b201060c0f599da46b379983ac541e56/1024x1024/webp/fit?force=true&quality=80&compression=80",
  },
  {
    id: 43,
    title: "Ejal40",
    price: 20,
    catg: "Other",
    dec: `برة النضارةإيجال 40 الايطالية.
بهذه التركيبة المثالية يحفز بشكل أفضل مستقبلات حمض الهيالورونيك الموجودة في الجلد، مما يقلل ويزيل علامات الشيخوخة الطبيعية بسرعة.
`,
    img: "https://www.medixasrl.com/wp-content/uploads/2024/06/ejal40.png",
  },
  {
    id: 44,
    title: "PROFHILO",
    price: 20,
    catg: "Other",
    dec: ` Profhilo H+L هو علاج معزز للبشرة ومضاد للشيخوخة مصنوع من حمض الهيالورونيك المستقر (HA).  يهدف بروفايلو إلى علاج تراخي الجلد ومرونته وشدّه، وليس فقط لتقليل الخطوط والتجاعيد.  بفضل تقنية NAHYCO الحاصلة على براءة اختراع، يعمل علاج Profhilo على تحفيز الخلايا الليفية، وبالتالي زيادة إنتاج الكولاجين والإيلاستين.  كما أنه يرطب البشرة ويحسن لون البشرة وملمسها وإشراقها بشكل عام مع تأثير شد ورفع دقيق.`,
    img: "https://www.ibsaderma.com/wp-content/uploads/2020/06/Profhilo.png",
  },
];
let showdata = allData.slice(0, 6);
const temCard = (price, img, title, dec, id) => {
  return `
  <div class="col-12 col-md-6 col-lg-4">
  <div class="card card-Product">
            <span class="price btn-success">${price}$</span>
              <img class="card-img-top" src="${img}" alt="Title" loading="lazy" />
              <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">
                  ${dec}
                </p>
                <a name="" id="${id}" class="btn btn-primary buy-now"  role="button"
                  >buy now</a
                >
              </div>
            </div>
            </div>
`;
};
let productBuy = [];
// ..............................................................................
let renderBuy = () => {
  let buynow = document.querySelectorAll(".buy-now");
  buynow.forEach((element) => {
    element.onclick = (e) => {
      productBuy.push(allData[e.target.id]);
      indexProduct.innerHTML = productBuy.length;
    };
  });
};
// .........................................................................
// render show product
indexProduct.innerHTML = productBuy.length;
btnCart.onclick = () => {
  cardProduct.innerHTML = "";
  productBuy.forEach((element) => {
    cardProduct.innerHTML += ` <li class="d-flex " style="justify-content: space-evenly; align-items:center;">
                                        <div class="">${element.title}</div>
                                        <div class="">${element.price}</div>
                                        <button class="btn text-danger" onclick="renderDelete(${element.id})"
                                        )}>X</button>
                                </li>
                                <hr>`;
  });
};
// ..................................................................
let renderDelete = (id) => {
  productBuy = productBuy.filter((ele) => ele.id !== id);
  indexProduct.innerHTML = productBuy.length;
  productBuy.forEach((element) => {
    cardProduct.innerHTML += ` <li class="d-flex " style="justify-content: space-evenly; align-items:center;">
                                        <div class="">${element.title}</div>
                                        <div class="">${element.price}</div>
                                        <button class="btn text-danger" onclick="renderDelete(${element.id})"
                                        )}>X</button>
                                </li>
                                <hr>`;
  });
};
// ..................................................................
let renderWhatsapp = (product) => {
  let totelPrice = 0;
  let phonenumber = "+963988201797";
  let productmove = product.map((ele) => {
    totelPrice += ele.price;
    return { name: ele.title, price: ele.price };
  });
  let messsage = JSON.stringify(productmove);
  messsage += `theTotle is ${totelPrice}`;
  let url = "https://wa.me/" + phonenumber + "?text=" + messsage;
  productBuy = [];
  cardProduct.innerHTML = "";
  indexProduct.innerHTML = productBuy.length;

  window.open(url, "_blank").focus();
};
whatsappBuyBtn.onclick = () => {
  renderWhatsapp(productBuy);
};

// ..................................................................
// product-pages item
const productPage = () => {
  app.innerHTML = `
    <div class="product mb-5" >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-aboutUs" style="margin: 50px 0">
              <h2>product</h2>
            </div>
          </div>
        </div>
        <div class="row mb-5 g-3" >
            <div class="col-4 col-md-2"><div class="btn btn-sty w-100" id="btn-All">All</div></div>
            <div class="col-4 col-md-2"><div class="btn btn-sty w-100" id="DERMAQUA">DERMAQUAL</div></div>
            <div class="col-4 col-md-2"><div class="btn btn-sty  w-100" id="MCCM">MCCM</div></div>
            <div class="col-4 col-md-2"><div class="btn btn-sty w-100" id="MCCMS">MCCMS</div></div>
            <div class="col-4 col-md-2"><div class="btn btn-sty  w-100" id="ElectronicTools">Tools</div></div>
            <div class="col-4 col-md-2"><div class="btn btn-sty w-100" id="Other">Other</div></div>
            </div>
        <div id="product-pages" class="row justify-content-center g-2">
        </div>
        <div id="more" class=" d-flex justify-content-center"></div>
      </div>
    </div>
`;
  let btnMore = `<button id="btn-more" class="btn mt-2" style="  color: #fff;
  background-color: #213555 !important;">more product</button>`;
  let btnAll = document.getElementById("btn-All");
  let parentproduct = document.getElementById("product-pages");
  let btnDERMAQUA = document.getElementById("DERMAQUA");
  let btnMCCM = document.getElementById("MCCM");
  let btnMCCMS = document.getElementById("MCCMS");
  let btnElectronicTools = document.getElementById("ElectronicTools");
  let btnOther = document.getElementById("Other");
  let moreProduct = document.getElementById("more");
  let indexProduct = 12;
  const renderPages = (items) => {
    parentproduct.innerHTML = "";
    items.forEach((ele) => {
      parentproduct.innerHTML += temCard(
        ele.price,
        ele.img,
        ele.title,
        ele.dec,
        ele.id
      );
    });
    renderBuy();
  };
  renderPages(showdata);
  moreProduct.innerHTML = btnMore;
  btnAll.onclick = productPage;

  btnDERMAQUA.onclick = () => {
    let filter = allData.filter((ele) => {
      return ele.catg.includes("DERMAQUAL");
    });
    renderPages(filter);
    moreProduct.innerHTML = ``;
  };
  btnMCCM.onclick = () => {
    let filter = allData.filter((ele) => {
      return ele.catg === "MCCM";
    });
    renderPages(filter);
    moreProduct.innerHTML = ``;
  };
  btnMCCMS.onclick = () => {
    let filter = allData.filter((ele) => {
      return ele.catg === "MCCMS";
    });
    renderPages(filter);
  };
  btnElectronicTools.onclick = () => {
    let filter = allData.filter((ele) => {
      return ele.catg === "ElectronicTools";
    });
    renderPages(filter);
    moreProduct.innerHTML = ``;
  };
  btnOther.onclick = () => {
    let filter = allData.filter((ele) => {
      return ele.catg === "Other";
    });
    renderPages(filter);
    moreProduct.innerHTML = ``;
  };
  let btnshow = document.getElementById("btn-more");
  let MoreProduct = () => {
    let newData = [];
    newData = allData.slice(0, indexProduct);
    indexProduct += 6;
    if (indexProduct >= allData.length) {
      indexProduct = allData.length;
    }
    renderPages(newData);
    console.log("good");
  };
  btnshow.onclick = MoreProduct;
  let search = document.getElementById("search-product");
  search.onsubmit = (e) => {
    e.preventDefault();
    let productName = searchProductTitle.value;
    let outData = allData.filter((item) => {
      return item.title.toLowerCase().includes(productName.toLowerCase());
    });
    renderPages(outData);
  };
  searchProductTitle.onchange = () => {
    let productName = searchProductTitle.value;
    let outData = allData.filter((item) => {
      return item.title.toLowerCase().includes(productName.toLowerCase());
    });
    renderPages(outData);
  };
};

// .............................................................................................
let text =
  "We are dedicated to achieving stunning results that enhance our clients' confidence.".split(
    ""
  );
let itemText = document.getElementById("title-text");
let renderText = () => {
  let index = 0;
  itemText.innerHTML = "";
  let a = setInterval(() => {
    itemText.innerHTML += text[index];
    index++;
    if (index === text.length) {
      itemText.classList.remove("text");
      clearInterval(a);
    }
  }, 100);
};
// .........................................................................
// button
let linkRouterProduct = document.getElementById("link-router-product");
let linkRouterHome = document.getElementById("link-router-Home");
let linkRouterAbout = document.getElementById("link-router-About");
let linkRouterContent = document.getElementById("link-router-contact");
let app = document.getElementById("App");
// Home page
let HomePage = app.innerHTML;
// product page
// link
linkRouterProduct.onclick = productPage;
linkRouterHome.onclick = () => {
  app.innerHTML = HomePage;
  renderdata();
  renderText();
};
linkRouterAbout.onclick = () => {
  app.innerHTML = HomePage;
  renderdata();
  renderText();
};
linkRouterContent.onclick = () => {
  app.innerHTML = HomePage;
  renderdata();
  renderText();
};
// .............................................................
let renderdata = () => {
  let mainproduct = document.getElementById("product");
  showdata.forEach((ele) => {
    mainproduct.innerHTML += temCard(
      ele.price,
      ele.img,
      ele.title,
      ele.dec,
      ele.id
    );
  });
  renderBuy();
};
// ...................................................................
let addProductBtn = document.getElementById("add-product-btn");
let formAddProduct = document.querySelector(".form-add-product");
addProductBtn.onclick = () => {
  formAddProduct.classList.toggle("show");
};
clear.onclick = () => {
  formAddProduct.classList.remove("show");
};
