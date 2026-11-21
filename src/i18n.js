// Traductions de l'invitation : français (texte d'origine dans index.html), néerlandais, darija marocaine.
// Versets : traductions publiées (FR : Muhammad Hamidullah ; NL : Malak Faris Abdalsalaam, via quran.com).
// En darija, versets et hadiths restent en arabe d'origine (pas de traduction).
// Les hadiths en néerlandais sont des traductions libres, signalées comme telles.

const SAW = '<span class="saw">ﷺ</span>';

export const LANGS = ['fr', 'nl', 'ary'];

export const T = {
  // le français statique vient de index.html ; ici seulement les textes générés par le script
  fr: {
    soon: 'Bientôt, in shâ’ Allâh', tbd: 'À venir', bigDay: 'C’est le grand jour ✨',
    soundOff: 'Couper le son', soundOn: 'Remettre le son', replay: 'Réécouter la récitation', listen: 'Écouter la récitation',
    icsTitle: 'Fiançailles de Shayma & Bilal', locale: 'fr-FR',
  },

  nl: {
    loader: 'De maan komt op', introAria: 'Welkom', kicker: 'Uitnodiging', enter: 'Tik op de maan',
    soundHint: '🎧 Zet het geluid aan · recitatie van Al-Fatiha',
    v78tr: '“En Wij hebben jullie in paren geschapen.”',
    v78ref: 'Soera An-Naba (78), vers 8',
    sub1: 'verbinden hun harten', sub2: 'en nodigen u uit om hun verloving te vieren',
    scrollAria: 'Scroll naar de rest van de uitnodiging', scroll: 'Scroll naar beneden', skip: 'Overslaan ›',
    v30tr: '“En het behoort tot Zijn Tekenen dat Hij voor jullie van jullie eigen soort echtgenotes heeft geschapen, opdat jullie rust bij haar vinden en Hij bracht tussen jullie (echtparen) liefde en genade. Waarlijk, dat zijn zeker Tekenen voor mensen die nadenken.”',
    v30ref: 'Soera Ar-Roem (30), vers 21 · vert. Malak Faris Abdalsalaam',
    grace: 'Door de genade van Allah', union: 'Onze verbintenis',
    u1: 'Twee zielen, als paar geschapen, die elkaar vonden onder dezelfde maan.',
    u2: 'Met de zegen van hun families hebben Shayma en Bilal ervoor gekozen om samen hun dien (geloof) te vervolmaken.',
    u3: 'Met grote vreugde nodigen zij u uit op hun verloving.',
    v2tr: '“Zij zijn (als) kleding voor jullie en jullie zijn (als) kleding voor hen.”',
    v2ref: 'Soera Al-Baqara (2), uit vers 187 · vert. Malak Faris Abdalsalaam',
    sunna: 'De Soennah', hTitle: `Woorden van de Profeet ${SAW} over het huwelijk`,
    h1tr: '“Voor twee mensen die van elkaar houden, is er niets gezien dat gelijk is aan het huwelijk.”',
    h1src: 'Overgeleverd door Ibn ʿAbbas · Soenan Ibn Madjah nr. 1847 · authentiek (sahih) volgens al-Albani · vrije vertaling',
    h2tr: '“Deze wereld is genot, en het beste genot van deze wereld is een vrome vrouw.”',
    h2src: 'Overgeleverd door ʿAbdullah ibn ʿAmr · Sahih Muslim nr. 1467 · vrije vertaling',
    h3tr: '“De beste onder jullie is degene die het best is voor zijn familie, en ik ben de beste van jullie voor mijn familie.”',
    h3src: 'Overgeleverd door ʿAisha · Djamiʿ at-Tirmidhi nr. 3895 · authentiek (sahih) volgens al-Albani · vrije vertaling',
    h4tr: '“De gelovigen met het meest volmaakte geloof zijn degenen met het beste karakter, en de besten onder jullie zijn degenen met het beste karakter tegenover hun vrouwen.”',
    h4src: 'Overgeleverd door Abu Hurayra · Djamiʿ at-Tirmidhi nr. 1162 · hasan sahih · vrije vertaling',
    rdv: 'Waar en wanneer', underMoon: 'Onder de maan',
    lblDate: 'Datum', lblTime: 'Tijd', lblPlace: 'Locatie',
    cdDays: 'dagen', cdHours: 'uur', cdMin: 'min', cdSec: 'sec',
    bMaps: 'Route', bCal: 'Toevoegen aan agenda', bRsvp: 'Aanwezigheid bevestigen',
    doua: 'Smeekbede (doea)',
    v25tr: '“Onze Heer! Geef ons van onze vrouwen en ons nageslacht degenen die plezier voor onze ogen zijn en maakt ons leiders van de godvrezenden.”',
    v25ref: 'Soera Al-Furqan (25), vers 74 · vert. Malak Faris Abdalsalaam',
    duaTr: '“Moge Allah je zegenen, Zijn zegen over je laten neerdalen en jullie beiden in het goede verenigen.”',
    duaRef: `Smeekbede van de Profeet ${SAW} voor pasgetrouwden · Soenan Abi Dawud nr. 2130 · authentiek (sahih) volgens al-Albani · vrije vertaling`,
    fin: 'We kijken ernaar uit om dit moment met u te delen.',
    sources: 'Bronnen',
    sourcesList: `<li>Koranverzen: Arabische tekst via quran.com; Franse vertaling van Muhammad Hamidullah, Nederlandse vertaling van Malak Faris Abdalsalaam (interpunctie van 30:21 licht aangepast).</li>
        <li>Hadiths: Arabische tekst en beoordeling van de authenticiteit via de hadith-api-database (fawazahmed0). De Nederlandse vertalingen (“vrije vertaling”) zijn voor deze uitnodiging geschreven.</li>
        <li>Recitatie: soera Al-Fatiha door Mishary Rashid Alafasy (bestanden per vers van EveryAyah.com).</li>
        <li>Maan: NASA Scientific Visualization Studio, “CGI Moon Kit” (SVS 4720). Aarde: NASA SVS “Blue Marble” (SVS 2915).</li>`,
    soon: 'Binnenkort, in sha’ Allah', tbd: 'Volgt nog', bigDay: 'Het is de grote dag ✨',
    soundOff: 'Geluid uit', soundOn: 'Geluid aan', replay: 'Recitatie opnieuw beluisteren', listen: 'Recitatie beluisteren',
    rsvpMsg: 'Salam! Ik bevestig mijn aanwezigheid op de verloving van Shayma & Bilal 🌙',
    icsTitle: 'Verloving van Shayma & Bilal', locale: 'nl-NL',
  },

  ary: {
    loader: 'القمر طالع', introAria: 'الاستقبال', kicker: 'عْراضة', enter: 'ورّك على القمر',
    soundHint: '🎧 طلّع الصوت · قراءة سورة الفاتحة',
    v78ref: 'سورة النبأ، الآية 8',
    sub1: 'جمعو قلوبهم', sub2: 'و كيعرضو عليكم تفرحو معاهم فالخطوبة ديالهم',
    scrollAria: 'هبط لباقي العراضة', scroll: 'هبط لتحت', skip: '‹ دوّز',
    v30ref: 'سورة الروم، الآية 21',
    grace: 'بفضل الله', union: 'ارتباطنا',
    u1: 'جوج أرواح تخلقو زوج، و تلاقاو تحت نفس القمر.',
    u2: 'بالرضى ديال عائلاتهم، شيماء و بلال ختارو يكمّلو دينهم مع بعضياتهم.',
    u3: 'و فرحانين بزاف يعرضو عليكم للخطوبة ديالهم.',
    v2ref: 'سورة البقرة، من الآية 187',
    sunna: 'السنة النبوية', hTitle: `شنو قال النبي ${SAW} على الزواج`,
    h1src: 'رواه ابن ماجه (1847) عن ابن عباس، وصححه الألباني',
    h2src: 'رواه مسلم (1467) عن عبد الله بن عمرو',
    h3src: 'رواه الترمذي (3895) عن عائشة، وصححه الألباني',
    h4src: 'رواه الترمذي (1162) عن أبي هريرة، وقال: حسن صحيح',
    rdv: 'الموعد', underMoon: 'تحت القمر',
    lblDate: 'النهار', lblTime: 'الساعة', lblPlace: 'البلاصة',
    cdDays: 'يام', cdHours: 'سوايع', cdMin: 'دقايق', cdSec: 'ثواني',
    bMaps: 'الطريق', bCal: 'زيد فالأجندة', bRsvp: 'أكّد الحضور ديالك',
    doua: 'دعاء',
    v25ref: 'سورة الفرقان، الآية 74',
    duaRef: `دعاء النبي ${SAW} للعرسان · رواه أبو داود (2130)، وصححه الألباني`,
    fin: 'متشوقين نفرحو معاكم فهاد النهار.',
    sources: 'المصادر',
    sourcesList: `<li>الآيات: النص من quran.com.</li>
        <li>الأحاديث: النص و الحكم ديالها من قاعدة hadith-api (fawazahmed0).</li>
        <li>القراءة: سورة الفاتحة بصوت مشاري راشد العفاسي (EveryAyah.com).</li>
        <li>صور القمر و الأرض: ناسا (NASA SVS 4720 و 2915).</li>`,
    soon: 'قريب إن شاء الله', tbd: 'مازال', bigDay: 'اليوم هو النهار الكبير ✨',
    soundOff: 'طفي الصوت', soundOn: 'شعل الصوت', replay: 'عاود سمع القراءة', listen: 'سمع القراءة',
    rsvpMsg: 'السلام! كنأكد الحضور ديالي فالخطوبة ديال شيماء و بلال 🌙',
    icsTitle: 'خطوبة شيماء و بلال', locale: 'ar-MA',
  },
};
