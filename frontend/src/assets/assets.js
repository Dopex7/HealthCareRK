import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import upload_icon from './upload_icon.png'
import chats_icon from './chats_icon.svg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    menu_icon,
    cross_icon,
    dropdown_icon,
    razorpay_logo,
    stripe_logo,
    upload_icon,
    chats_icon,
    contact_image,
    about_image,
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
      _id: 'doc1',
      name: 'Dr. Haruki Tanaka',
      image: doc1,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Haruki Tanaka është një mjek i përgjithshëm i dedikuar me mbi katër vjet përvojë në trajtimin e një gamë të gjerë sëmundjesh akute dhe kronike. I njohur për qasjen e tij miqësore dhe aftësitë e plota diagnostikuese, Dr. Tanaka ndihmon për të ndërtuar marrëdhënie të qëndrueshme me pacientët e tij. Ai thekson kujdesin parandalues dhe i përshtat trajtimet nevojave të individëve. Dr. Tanaka beson në arsimimin e vazhdueshëm dhe ndërgjegjësimin e komunitetit për shëndetin.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc2',
      name: 'Dr. Aiko Nakamura',
      image: doc2,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Vjet',
      about:
        "Dr. Aiko Nakamura është një mjeke gynekologe e përkushtuar që specializohet në shëndetin e gruas, kujdesin prenatal dhe mirëqenien riprodhuese. Me një qasje holistike ndaj kujdesit, ajo mbështet pacientet në çdo fazë të jetës së gruas - nga adoleshenca deri tek menopauza. Ajo është e njohur për praninë e saj qetësuese dhe aftësinë për të komunikuar qartë. Dr. Nakamura merr pjesë shpesh në seminare mjekësore për të qëndruar e përditësuar me teknikat më të fundit në procedurat gynekologjike minimally invazive.",
      fees: 60,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc3',
      name: 'Dr. Rin Suzuki',
      image: doc3,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Vit',
      about:
      'Dr. Rin Suzuki është një dermatolog i ri dhe i motivuar që ka fituar shpejt njohuri për dermatologjinë kozmetike dhe menaxhimin e sëmundjeve të lëkurës. Ai specializohet në trajtimin e akneve, ekzemës, çrregullimeve të pigmentimit dhe ofron zgjidhje anti-plakje duke përdorur praktika të bazuara në dëshmi. Dr. Suzuki beson në fuqizimin e pacientëve përmes edukatës, duke siguruar që individët të kuptojnë gjendjen e lëkurës dhe mundësitë e trajtimit në detaje.',
      fees: 30,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc4',
      name: 'Dr. Tatsuya Mori',
      image: doc4,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Vjet',
      about:
        'Dr. Tatsuya Mori është një pediatër me zemër të ngrohtë që sjell njohuri klinike dhe inteligjencë emocionale në punën e tij me fëmijët dhe familjet e tyre. Ai është i interesuar në kujdesin e zhvillimit të hershëm, vaksinat dhe menaxhimin e sëmundjeve të fëmijërisë. Dr. Mori punon ngushtë me prindërit për të siguruar një qasje bashkëpunuese për shëndetin e fëmijës. Karakteri i tij miqësor ndihmon në ndërtimin e besimit me pacientët e rinj, duke u lehtësuar vizitat në spital.',
      fees: 40,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc5',
      name: 'Dr. Misaki Sato',
      image: doc5,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Misaki Sato është një neurologe me ekspertizë në diagnostikimin dhe menaxhimin e një gamë të gjerë çrregullimesh neurologjike, duke përfshirë epilepsinë, sëmundjen e Parkinsonit dhe sklerozën e shumëfishtë. Ajo ka një background të fortë në neurofiziologji dhe është e angazhuar në mësim dhe kërkime të vazhdueshme. Dr. Sato vlerëson një qasje gjithëpërfshirëse ndaj kujdesit për pacientët, që përfshin shqyrtimin e aspekteve fizike, emocionale dhe stilit të jetës në planifikimin e trajtimit.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc6',
      name: 'Dr. Kenta Fujimoto',
      image: doc6,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Kenta Fujimoto është një neurolog i ekspertuar me një filozofi pacienti në qendër. Ai ka punuar gjerësisht në spitale dhe klinika private, duke trajtuar kushte si migrena, neuropatia dhe rikuperimi nga goditjet. I njohur për mendjen e tij analitike dhe qasjen e tij të qetë, Dr. Fujimoto përshtat çdo plan trajtimi duke përdorur një kombinim të medikamenteve, terapisë fizike dhe ndryshimeve të stilit të jetës për të optimizuar rezultatet për pacientin.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc7',
      name: 'Dr. Daichi Arai',
      image: doc7,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Daichi Arai është një mjek i përgjithshëm me një qasje holistike dhe parandalueshme ndaj mjekësisë. Me përvojë në diagnostikimin e rasteve komplekse dhe sëmundjeve kronike, Dr. Arai e vlerëson dëgjimin dhe kuptimin e shqetësimeve të pacientëve përpara se të sugjerojë trajtime. Ai është veçanërisht i interesuar në lidhjen midis zakoneve të jetesës dhe shëndetit, duke punuar shpesh me pacientët për të zhvilluar strategji të qëndrueshme dhe afatgjata për mirëqenien.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc8',
      name: 'Dr. Yui Takahashi',
      image: doc8,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Vjet',
      about:
      'Dr. Yui Takahashi është një gynekolog shumë i vëmendshëm që përqendrohet në kujdesin e individualizuar për gratë në çdo moshë. Nga shëndeti menstrual deri tek planifikimi familjar dhe menaxhimi i menopauzës, Dr. Takahashi ofron kujdes mjekësor të përkushtuar dhe konfidencial. Ai ka kontribuar gjithashtu në disa fushata ndërgjegjësimi për shëndetin e grave dhe e pëlqen të mentorojë gratë e reja që hyjnë në fushën e mjekësisë.',
      fees: 60,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc9',
      name: 'Dr. Sora Hayashi',
      image: doc9,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Vit',
      about:
        'Dr. Sora Hayashi është një dermatologe entuziaste që beson se lëkura e shëndetshme është një pasqyrë e mirëqenies së brendshme. Ajo trajton një gamë të gjerë kushtesh të lëkurës, përfshirë infeksionet kërpudhore, dermatitin dhe çrregullimet e rralla autoimune të lëkurës. Praktika e saj përfshin gjithashtu shërbime estetike si pastrim kimik dhe procedura jo-invazive të rinovimit. Ajo njihet për konsultimet e saj të sinqerta dhe planet e personalizuara të kujdesit.',
      fees: 30,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc10',
      name: 'Dr. Takumi Ishikawa',
      image: doc10,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Vjet',
      about:
        'Dr. Takumi Ishikawa është një pediatër i gëzuar dhe i përkushtuar që ka krijuar një emër për praktikat miqësore për fëmijët. Ai thekson mjekësinë parandalues dhe ndërgjegjësimin për vaksinat, si dhe vlerësimin e hershëm të sjelljeve. Me një qasje të butë dhe respektuese, ai e bën vizitën në klinikë të këndshme për fëmijët, duke siguruar që prindërit të jenë plotësisht të informuar dhe mbështetur në çdo hap.',
      fees: 40,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc11',
      name: 'Dr. Naomi Shimizu',
      image: doc11,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Naomi Shimizu është një neurologe që bashkon njohuri të thella akademike me kujdesin empatik për pacientët. Ajo është e aftë për menaxhimin e çrregullimeve neurologjike, duke përfshirë terapinë pas goditjes dhe mbështetjen për sëmundje degjeneruese. Dr. Shimizu njihet për shpjegimin e diagnozave komplekse në një mënyrë të qartë dhe me dashamirësi dhe për punën e saj të ngushtë me familjet për të koordinuar kujdesin.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc12',
      name: 'Dr. Ryota Kobayashi',
      image: doc12,
      speciality: 'Gastroenterologist',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Ryota Kobayashi është një gastroenterolog që specializohet në shëndetin e traktit tretës, duke përfshirë çrregullime si IBS, ulçera dhe sëmundje të mëlçisë. Ai përdor një kombinim të mjeteve moderne diagnostikuese dhe këshillave ushqimore për të krijuar plane trajtimi holistike. Pacientët e vlerësojnë ndjekjet e tij të kujdesshme dhe qartësinë me të cilën shpjegon çrregullimet komplekse gastrointestinale.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc13',
      name: 'Dr. Mei Yamamoto',
      image: doc13,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Vjet',
      about:
        'Dr. Mei Yamamoto është një mjeke e përgjithshme me interes të veçantë në mjekësinë e stilit të jetës dhe çrregullimet metabolike. Ajo kombinon vlerësime të hollësishme mjekësore me caktimin e objektivave nga pacientët për të menaxhuar kushte të tilla si hipertensioni, diabeti dhe obeziteti. Karakteri i saj miqësor dhe pa gjykim bën që pacientët të ndihen të qetë dhe të sigurt në përputhje me planet e shëndetit afatgjata.',
      fees: 50,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc14',
      name: 'Dr. Hiroshi Matsuda',
      image: doc14,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Vjet',
      about:
        'Dr. Hiroshi Matsuda është një gynekolog i aftë dhe i respektuar, i njohur për saktësinë në diagnostikimin dhe trajtimin e çrregullimeve hormonale, problemeve me ciklin menstrual dhe çështjeve të fertilitetit. Prania e tij qetësuese dhe praktika e bazuar në prova e kanë fituar besimin e pacientëve të tij. Ai gjithashtu është një kontribues i rregullt në iniciativa lokale shëndetësore që përqendrohen në mirëqenien e grave.',
      fees: 60,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
    {
      _id: 'doc15',
      name: 'Dr. Hana Kurosawa',
      image: doc15,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Vit',
      about:
        'Dr. Hana Kurosawa është një dermatologe e ndritur dhe entuziaste me një sy të mprehtë për detaje dhe estetikën. Puna e saj përfshin trajtimin e infeksioneve të lëkurës, shenjave dhe kushteve alergjike, si dhe ofrimin e shërbimeve estetike të avancuara. Pacientët e vlerësojnë qasjen e saj moderne dhe gatishmërinë për t’i udhëzuar ata në çdo aspekt të rrugëtimit të kujdesit të tyre.',
      fees: 30,
      address: {
        line1: 'Rruga e Dajti, Prishtinë',
        line2: 'Kosovë',
      },
    },
  ];
  