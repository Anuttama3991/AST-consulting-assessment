import { NewsArticle, Section } from '@/types';

// News sections for the portal
export const sections: Section[] = [
  { id: 's1', title: 'राष्ट्रीय', slug: 'national', themeColor: '#2563eb' },
  { id: 's2', title: 'अंतर्राष्ट्रीय', slug: 'international', themeColor: '#7c3aed' },
  { id: 's3', title: 'प्रदेश', slug: 'state', themeColor: '#059669' },
  { id: 's4', title: 'क्रीड़ा', slug: 'sports', themeColor: '#ea580c' },
  { id: 's5', title: 'सिनेमा', slug: 'entertainment', themeColor: '#db2777' },
  { id: 's6', title: 'व्यापार', slug: 'business', themeColor: '#0891b2' },
  { id: 's7', title: 'तकनीक', slug: 'tech', themeColor: '#4f46e5' },
  { id: 's8', title: 'वाहन', slug: 'automobile', themeColor: '#c026d3' },
];

// Hindi news articles data
export const newsArticles: NewsArticle[] = [
  {
    id: 'n1',
    headline: 'लोकसभा में विपक्ष का जोरदार प्रदर्शन, सरकार से जवाब की मांग',
    description: 'संसद के शीतकालीन सत्र में विपक्षी दलों ने सरकार पर जमकर हमला बोला। सदन में हंगामे के बीच कार्यवाही बाधित रही।',
    body: `आज संसद के शीतकालीन सत्र में विपक्षी दलों ने सरकार के खिलाफ जोरदार प्रदर्शन किया। लोकसभा में विपक्ष ने नारेबाजी की और सरकार से विभिन्न मुद्दों पर स्पष्टीकरण की मांग की।

विपक्षी नेताओं ने कहा कि सरकार जनता के सवालों का जवाब देने से बच रही है। उन्होंने सदन के बाहर भी धरना प्रदर्शन किया।

अध्यक्ष ने सदस्यों से शांति बनाए रखने की अपील की, लेकिन हंगामा जारी रहा। अंत में सदन की कार्यवाही कल तक के लिए स्थगित कर दी गई।`,
    imageUrl: null,
    section: 'राष्ट्रीय',
    sectionSlug: 'national',
    writer: 'सुनील वर्मा',
    datePublished: '2025-11-29T08:00:00Z',
    minutesToRead: 4,
    slug: 'lok-sabha-opposition-protest-winter-session',
    isPrimary: true,
    isUrgent: true,
  },
  {
    id: 'n2',
    headline: 'भारत ने ऑस्ट्रेलिया को टेस्ट सीरीज में 2-0 से पछाड़ा, ऐतिहासिक जीत दर्ज की। यह एक अविस्मरणीय क्षण है भारतीय क्रिकेट इतिहास में जब टीम ने विदेशी सरजमीं पर इतनी शानदार जीत हासिल की है।',
    description: 'टीम इंडिया ने ऑस्ट्रेलिया में शानदार प्रदर्शन करते हुए टेस्ट सीरीज 2-0 से अपने नाम कर ली। गेंदबाजों ने जमकर कहर बरपाया।',
    body: `भारतीय क्रिकेट टीम ने इतिहास रच दिया है। ऑस्ट्रेलिया की धरती पर टेस्ट सीरीज 2-0 से जीतकर टीम इंडिया ने दुनिया को दिखा दिया कि वे किसी भी परिस्थिति में जीत सकते हैं।

तेज गेंदबाजों ने कमाल की गेंदबाजी की और ऑस्ट्रेलियाई बल्लेबाजों को परेशान कर दिया। स्पिनरों ने भी अहम विकेट चटकाए।

कप्तान ने कहा कि यह जीत पूरी टीम की मेहनत का नतीजा है। हर खिलाड़ी ने अपना शत प्रतिशत दिया।`,
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=500&fit=crop',
    section: 'क्रीड़ा',
    sectionSlug: 'sports',
    writer: 'विकास सिंह',
    datePublished: '2025-11-29T07:30:00Z',
    minutesToRead: 5,
    slug: 'india-beats-australia-test-series-historic-win',
    isPrimary: true,
    isUrgent: false,
  },
  {
    id: 'n3',
    headline: 'शेयर बाजार में भारी गिरावट, निवेशकों के डूबे लाखों करोड़',
    description: 'वैश्विक संकेतों के चलते भारतीय शेयर बाजार में भारी बिकवाली देखी गई। सेंसेक्स 800 अंक टूटा।',
    body: `आज शेयर बाजार में जबरदस्त गिरावट देखने को मिली। वैश्विक बाजारों में कमजोरी और विदेशी निवेशकों की बिकवाली के चलते भारतीय बाजार धड़ाम हो गए।

बीएसई सेंसेक्स 800 अंकों से ज्यादा गिरकर बंद हुआ, जबकि निफ्टी भी 250 अंक नीचे आ गया। बैंकिंग और आईटी सेक्टर में सबसे ज्यादा नुकसान हुआ।

विशेषज्ञों का कहना है कि यह गिरावट अस्थायी है और लंबी अवधि के निवेशकों के लिए खरीदारी का मौका है।`,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    section: 'व्यापार',
    sectionSlug: 'business',
    writer: 'अंकित जैन',
    datePublished: '2025-11-29T06:45:00Z',
    minutesToRead: 3,
    slug: 'stock-market-crash-investors-lose-crores',
    isPrimary: false,
    isUrgent: true,
  },
  {
    id: 'n4',
    headline: 'नई दिल्ली में प्रदूषण का स्तर खतरनाक, स्कूल बंद करने का आदेश',
    description: 'राजधानी में वायु गुणवत्ता सूचकांक 450 के पार पहुंचा। सरकार ने आपातकालीन उपाय लागू किए।',
    body: `दिल्ली में वायु प्रदूषण ने एक बार फिर खतरनाक स्तर छू लिया है। एक्यूआई 450 के पार जाने के बाद सरकार ने कई आपातकालीन कदम उठाए हैं।

प्राथमिक विद्यालयों को बंद करने का आदेश दिया गया है। निर्माण कार्य पर भी रोक लगा दी गई है। ऑड-ईवन योजना लागू करने पर विचार हो रहा है।

डॉक्टरों ने लोगों को घर में रहने और मास्क पहनने की सलाह दी है।`,
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop',
    section: 'राष्ट्रीय',
    sectionSlug: 'national',
    writer: 'प्रिया शर्मा',
    datePublished: '2025-11-29T05:00:00Z',
    minutesToRead: 4,
    slug: 'delhi-pollution-emergency-schools-closed',
    isPrimary: false,
    isUrgent: true,
  },
  {
    id: 'n5',
    headline: 'बॉलीवुड की नई फिल्म ने तोड़े सारे रिकॉर्ड, पहले दिन 50 करोड़ की कमाई',
    description: 'साल की सबसे बड़ी फिल्म ने बॉक्स ऑफिस पर धमाल मचा दिया। दर्शकों ने उत्साह से भरे हॉल में फिल्म का लुत्फ उठाया।',
    body: `बॉलीवुड की बहुप्रतीक्षित फिल्म ने रिलीज के पहले ही दिन 50 करोड़ रुपये की कमाई कर इतिहास रच दिया। यह इस साल की सबसे बड़ी ओपनिंग है।

फिल्म में स्टार कास्ट का अभिनय शानदार है। दर्शकों ने फिल्म को पांच में से चार स्टार दिए हैं। थिएटर्स में हाउसफुल का बोर्ड लगा है।

ट्रेड एनालिस्ट्स का मानना है कि फिल्म लाइफटाइम में 500 करोड़ का आंकड़ा पार कर सकती है।`,
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop',
    section: 'सिनेमा',
    sectionSlug: 'entertainment',
    writer: 'नेहा कपूर',
    datePublished: '2025-11-28T18:00:00Z',
    minutesToRead: 3,
    slug: 'bollywood-blockbuster-record-breaking-opening',
    isPrimary: true,
    isUrgent: false,
  },
  {
    id: 'n6',
    headline: 'यूपी में नई मेट्रो लाइन का उद्घाटन, लाखों यात्रियों को मिलेगी राहत',
    description: 'मुख्यमंत्री ने नई मेट्रो लाइन का उद्घाटन किया। इससे शहर की यातायात व्यवस्था में सुधार होगा।',
    body: `उत्तर प्रदेश के मुख्यमंत्री ने आज नई मेट्रो लाइन का उद्घाटन किया। यह लाइन शहर के दो प्रमुख क्षेत्रों को जोड़ती है।

इस नई लाइन से प्रतिदिन लाखों यात्रियों को लाभ मिलेगा। यात्रा का समय आधा हो जाएगा और सड़कों पर भीड़ भी कम होगी।

मेट्रो प्राधिकरण ने बताया कि शुरुआती दो महीने तक किराए में 20% की छूट दी जाएगी।`,
    imageUrl: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop',
    section: 'प्रदेश',
    sectionSlug: 'state',
    writer: 'राकेश गुप्ता',
    datePublished: '2025-11-28T16:30:00Z',
    minutesToRead: 4,
    slug: 'up-new-metro-line-inauguration',
    isPrimary: false,
    isUrgent: false,
  },
  {
    id: 'n7',
    headline: 'भारत ने लॉन्च किया सबसे शक्तिशाली उपग्रह, अंतरिक्ष में मिली बड़ी सफलता',
    description: 'इसरो ने नए संचार उपग्रह का सफल प्रक्षेपण किया। यह भारत का अब तक का सबसे भारी उपग्रह है।',
    body: `भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) ने आज इतिहास रच दिया। देश के सबसे शक्तिशाली संचार उपग्रह का सफल प्रक्षेपण किया गया।

यह उपग्रह देश की संचार क्षमता को कई गुना बढ़ाएगा। इससे इंटरनेट सेवाओं में भी सुधार होगा।

इसरो प्रमुख ने कहा कि यह सफलता भारत के वैज्ञानिकों की कड़ी मेहनत का नतीजा है।`,
    imageUrl: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=500&fit=crop',
    section: 'तकनीक',
    sectionSlug: 'tech',
    writer: 'अमित त्रिपाठी',
    datePublished: '2025-11-28T14:00:00Z',
    minutesToRead: 5,
    slug: 'isro-powerful-satellite-launch-success',
    isPrimary: true,
    isUrgent: false,
  },
  {
    id: 'n8',
    headline: 'अमेरिका में भारतीय मूल के वैज्ञानिक को मिला प्रतिष्ठित पुरस्कार',
    description: 'भारतीय मूल के वैज्ञानिक डॉ. राजीव कुमार को उनके शोध के लिए अमेरिका का प्रतिष्ठित विज्ञान पुरस्कार मिला।',
    body: `भारतीय मूल के वैज्ञानिक डॉ. राजीव कुमार को अमेरिका में प्रतिष्ठित विज्ञान पुरस्कार से सम्मानित किया गया है। उन्हें यह पुरस्कार कैंसर अनुसंधान में उनके योगदान के लिए मिला।

डॉ. कुमार ने कहा कि यह सम्मान भारत का है। उन्होंने अपनी सफलता का श्रेय अपने गुरुओं और परिवार को दिया।

भारत सरकार ने भी उन्हें बधाई दी है।`,
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
    section: 'अंतर्राष्ट्रीय',
    sectionSlug: 'international',
    writer: 'कविता राय',
    datePublished: '2025-11-28T12:00:00Z',
    minutesToRead: 3,
    slug: 'indian-scientist-us-prestigious-award',
    isPrimary: false,
    isUrgent: false,
  },
  {
    id: 'n9',
    headline: 'टाटा ने लॉन्च की नई इलेक्ट्रिक SUV, 500 किमी की रेंज',
    description: 'टाटा मोटर्स ने अपनी प्रीमियम इलेक्ट्रिक एसयूवी बाजार में उतारी। कंपनी का दावा है यह सेगमेंट की सबसे लंबी रेंज वाली गाड़ी है।',
    body: `टाटा मोटर्स ने भारतीय बाजार में अपनी नई प्रीमियम इलेक्ट्रिक एसयूवी लॉन्च की है। यह गाड़ी एक बार चार्ज करने पर 500 किलोमीटर चल सकती है।

गाड़ी की शुरुआती कीमत 25 लाख रुपये है। इसमें कई आधुनिक फीचर्स दिए गए हैं जैसे एडवांस ड्राइवर असिस्टेंस सिस्टम।

कंपनी ने पूरे देश में चार्जिंग नेटवर्क भी स्थापित किया है।`,
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop',
    section: 'वाहन',
    sectionSlug: 'automobile',
    writer: 'मनीष यादव',
    datePublished: '2025-11-28T10:00:00Z',
    minutesToRead: 4,
    slug: 'tata-new-electric-suv-500km-range',
    isPrimary: false,
    isUrgent: false,
  },
  {
    id: 'n10',
    headline: 'किसानों के लिए बड़ी खुशखबरी, MSP में 10% की बढ़ोतरी',
    description: 'केंद्र सरकार ने रबी फसलों के न्यूनतम समर्थन मूल्य में वृद्धि की घोषणा की। गेहूं की एमएसपी अब 2400 रुपये प्रति क्विंटल।',
    body: `केंद्र सरकार ने किसानों को बड़ी राहत देते हुए रबी फसलों के न्यूनतम समर्थन मूल्य (MSP) में 10 प्रतिशत की बढ़ोतरी की है।

गेहूं का एमएसपी अब 2400 रुपये प्रति क्विंटल हो गया है। सरसों और चना की कीमतों में भी इजाफा किया गया है।

कृषि मंत्री ने कहा कि यह फैसला किसानों की आय दोगुनी करने की दिशा में एक महत्वपूर्ण कदम है।`,
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop',
    section: 'राष्ट्रीय',
    sectionSlug: 'national',
    writer: 'दिनेश पटेल',
    datePublished: '2025-11-28T08:00:00Z',
    minutesToRead: 3,
    slug: 'msp-hike-farmers-good-news',
    isPrimary: false,
    isUrgent: false,
  },
  {
    id: 'n11',
    headline: 'AI तकनीक से बदलेगी शिक्षा, सरकार ने शुरू की नई योजना',
    description: 'सरकार ने स्कूलों में आर्टिफिशियल इंटेलिजेंस आधारित शिक्षा कार्यक्रम की शुरुआत की। 10,000 स्कूलों में होगी शुरुआत।',
    body: `शिक्षा मंत्रालय ने देश में एआई आधारित शिक्षा कार्यक्रम की शुरुआत की है। पहले चरण में 10,000 सरकारी स्कूलों को इसमें शामिल किया जाएगा।

इस कार्यक्रम के तहत छात्रों को व्यक्तिगत शिक्षा मिलेगी। एआई सिस्टम हर छात्र की जरूरत के हिसाब से पाठ्यक्रम तैयार करेगा।

शिक्षा मंत्री ने कहा कि यह भारत को डिजिटल शिक्षा में अग्रणी बनाएगा।`,
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    section: 'तकनीक',
    sectionSlug: 'tech',
    writer: 'स्वाति मिश्रा',
    datePublished: '2025-11-27T16:00:00Z',
    minutesToRead: 4,
    slug: 'ai-education-government-new-scheme',
    isPrimary: false,
    isUrgent: false,
  },
  {
    id: 'n12',
    headline: 'मध्य प्रदेश में बाघों की संख्या में 20% की वृद्धि',
    description: 'नई गणना के अनुसार मध्य प्रदेश में बाघों की संख्या में उल्लेखनीय वृद्धि हुई है। राज्य अब "टाइगर स्टेट" बना हुआ है।',
    body: `मध्य प्रदेश में बाघों की ताजा गणना के परिणाम आ गए हैं। राज्य में बाघों की संख्या में पिछले साल की तुलना में 20 प्रतिशत की वृद्धि हुई है।

अब प्रदेश में 800 से अधिक बाघ हैं। यह संख्या देश में सबसे अधिक है। वन विभाग के प्रयासों को इसका श्रेय दिया जा रहा है।

मुख्यमंत्री ने बाघ संरक्षण में जुटे अधिकारियों और कर्मचारियों को बधाई दी।`,
    imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&h=500&fit=crop',
    section: 'प्रदेश',
    sectionSlug: 'state',
    writer: 'संजय सिंह',
    datePublished: '2025-11-27T14:00:00Z',
    minutesToRead: 3,
    slug: 'mp-tiger-population-increase',
    isPrimary: false,
    isUrgent: false,
  },
];

// Helper functions to fetch data
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getArticlesBySection(sectionSlug: string): NewsArticle[] {
  return newsArticles.filter((article) => article.sectionSlug === sectionSlug);
}

export function getPrimaryArticles(): NewsArticle[] {
  return newsArticles.filter((article) => article.isPrimary);
}

export function getUrgentNews(): NewsArticle[] {
  return newsArticles.filter((article) => article.isUrgent);
}

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((section) => section.slug === slug);
}

export function searchArticles(query: string): NewsArticle[] {
  const searchTerm = query.toLowerCase();
  return newsArticles.filter(
    (article) =>
      article.headline.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.body.toLowerCase().includes(searchTerm) ||
      article.section.toLowerCase().includes(searchTerm)
  );
}
