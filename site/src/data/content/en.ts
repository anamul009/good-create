// Single source of truth for site content.
// Facts marked "CONFIRM" differ between the source PDFs and the current website.

export const company = {
  name: 'Good Create Co., Ltd.',
  nameJa: '株式会社グッドクリエイト',
  short: 'Good Create',
  founded: 'March 1, 2000',
  // CONFIRM: current website = ¥258,175,000 / 3,627 shares; 2026 PDF = ¥243,550,000 / 3,588 shares.
  capital: '¥258,175,000',
  authorizedShares: '50,000',
  issuedShares: '3,627',
  officers: [
    { role: 'Representative Director & President', name: 'Masahiro Yamamoto' },
    // CONFIRM spelling: PDFs show both "Inage" and "Inamo".
    { role: 'Chairman of the Board & CTO', name: 'Hiroshi Inage' },
  ],
  philosophy:
    'Through technology, we connect people and society to create new value and trusted infrastructure.',
  vision:
    'We provide trust infrastructure for the Web3.0 era and build a future where everyone can connect with confidence.',
  mission:
    'We develop and expand @POP-based secure communication, identity authentication and platforms worldwide.',
  business: [
    'Development and sale of computer databases and software',
    'Sale of computers, office automation equipment and related supplies',
    'Information processing and information services using AI',
    'Development and sale of AI-based systems',
    'Planning, manufacturing, sale and export of IT equipment',
  ],
  advisors: [
    { role: 'Legal counsel', name: 'Protect Stance Law Firm' },
    { role: 'Tax accountant', name: 'Aoki Accounting Office' },
    { role: 'Labor & social security', name: 'Ai Social Insurance Labor Consultants' },
    { role: 'Patent attorney', name: 'Soko International Patent Office' },
  ],
  banks: [
    'The Hyakujushi Bank — Ayanan Branch',
    'MUFG Bank — Jimbocho Branch',
    'The Ehime Bank — Marugame Branch',
    'Sumitomo Mitsui Banking Corporation — Kyobashi Branch',
    'The Kagawa Bank — Ayauta Branch',
  ],
  offices: [
    {
      label: 'Head Office',
      city: 'Marugame',
      lines: ['346-3 Okadashimo, Ayauta-cho', 'Marugame, Kagawa 761-2402'],
      tel: '0877-57-1111',
      fax: '0877-57-1185',
    },
    {
      label: 'Tokyo Headquarters',
      city: 'Tokyo',
      lines: ['6F Omori Bellport Building B', '6-26-2 Minami-Oi, Shinagawa-ku', 'Tokyo 140-0013'],
    },
    {
      label: '@POP Business Division',
      city: 'Takamatsu',
      lines: ['13F-C Takamatsu Symbol Tower', '2-1 Sunport, Takamatsu', 'Kagawa 760-0019'],
      tel: '087-802-6757',
      fax: '087-802-6758',
    },
  ],
};

export const patents = [
  { region: 'Japan', code: 'JP', number: 'Patent No. 7616571' },
  { region: 'United States', code: 'US', number: 'US 11836766 B2' },
  { region: 'China', code: 'CN', number: 'CN 107533520B' },
  { region: 'Korea', code: 'KR', number: 'No. 10-2634225' },
  { region: 'International (PCT)', code: 'PCT', number: 'PCT/JP2020/035327' },
];

export const recognition = [
  {
    year: '2025',
    title: 'Minister for National Resilience Award',
    body: '11th Japan Resilience Award 2025 — Runner-up Grand Prize and the inaugural Minister’s Award, for Waravi and SecurityTalk.',
  },
  {
    year: '2025',
    title: 'World’s first halal certification in ICT',
    body: 'SecurityTalk became the first product in the IT field to receive official halal certification.',
  },
  {
    year: 'Ongoing',
    title: 'Adopted by Japan’s Ministry of Defense',
    body: 'Selected by special units where national-level confidentiality and security are required.',
  },
  {
    year: 'Ongoing',
    title: 'Deployed by governments overseas',
    body: 'Implemented and operated by government agencies and defense organizations in multiple countries.',
  },
];

export type Solution = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  status?: string;
  external?: { label: string; href: string };
  highlights: { title: string; body: string }[];
  facts?: { label: string; value: string }[];
  steps?: { title: string; body: string }[];
  useCases?: string[];
  note?: string;
};

export const solutions: Solution[] = [
  {
    slug: 'securitytalk',
    name: 'SecurityTalk',
    category: 'Secure communication',
    tagline: 'Communication that leaves nothing behind.',
    summary:
      'A closed-network voice, video and chat platform for organizations. Authentication runs on @POP, calls travel peer-to-peer, and no communication data is ever stored on a server.',
    external: { label: 'securitytalk.jp', href: 'https://securitytalk.jp/' },
    highlights: [
      {
        title: 'No server retention',
        body: 'Communication content is never stored on a server. When a call or room ends, its data is deleted.',
      },
      {
        title: 'Private ID network',
        body: 'Every contract receives its own key. Only users inside the same contract can reach each other — no outside apps, no strangers.',
      },
      {
        title: '@POP authentication',
        body: 'Only an encrypted, non-decryptable ID is kept. Even if it were stolen, it could not be used to impersonate a user.',
      },
      {
        title: 'P2P encryption',
        body: 'Devices connect directly over encrypted peer-to-peer channels. Relays are used only for stability and never keep content.',
      },
      {
        title: 'Call locks',
        body: 'A personal key is required to place or answer calls. Repeated wrong entries lock the app; further attempts wipe it.',
      },
      {
        title: 'Screenshot protection',
        body: 'Screenshots are blocked on Android during video calls. On iOS, every participant is alerted instantly.',
      },
    ],
    steps: [
      {
        title: 'Authenticate',
        body: 'The authentication server — which can run in your own environment — confirms which call numbers may connect.',
      },
      {
        title: 'Connect',
        body: 'An encrypted peer-to-peer channel opens directly between the two devices.',
      },
      {
        title: 'Disappear',
        body: 'When the session ends, nothing remains on any server. History lives only on the device.',
      },
    ],
    facts: [
      { label: 'Platforms', value: 'iOS · Android · Web' },
      { label: 'Modes', value: '1:1 voice & video · chat · SMS' },
      { label: 'Rooms', value: '3–5 participants, role-ordered layout' },
      { label: 'Administration', value: 'Org IDs, departments, per-user suspension' },
      { label: 'Hosting', value: 'Your servers or managed' },
      { label: 'Developed & operated', value: 'Entirely in Japan' },
    ],
    useCases: [
      'Government & defense',
      'Executive & board communication',
      'Healthcare',
      'Disaster response',
      'Legal & finance',
    ],
  },
  {
    slug: 'secure-device',
    name: 'Secure Device & Web3.0 OS',
    category: 'Hardware & operating system',
    tagline: 'A phone that answers to its owner — not its OS vendor.',
    summary:
      'A dedicated terminal for governments and critical institutions, built on a hardened, restricted AOSP-based operating system with @POP at its core. It removes the background data collection that general-purpose phones cannot avoid.',
    status: 'Deployment planned in Japan, Egypt, the Philippines and Saudi Arabia',
    highlights: [
      {
        title: 'Zero-ID communication',
        body: 'No persistent identifiers. Every conversation runs over its own pairwise channel.',
      },
      {
        title: 'Metadata minimization',
        body: 'Designed to leave no record of who talked to whom, or when.',
      },
      {
        title: 'Camera-less design',
        body: 'No camera is physically installed, so none can be activated.',
      },
      {
        title: 'Physical kill switch',
        body: 'Hardware cut-off for the microphone and all wireless radios.',
      },
      {
        title: 'Least-privilege OS',
        body: 'Unnecessary features are removed at the OS level. Only what the mission needs remains.',
      },
      {
        title: 'On-device protection',
        body: 'Data stays on the terminal, protected by @POP synchronization technology.',
      },
    ],
    facts: [
      { label: 'Base', value: 'AOSP, restricted build' },
      { label: 'Identity', value: '@POP, on-device' },
      { label: 'Audience', value: 'Ministers, agencies, critical institutions' },
    ],
  },
  {
    slug: 'waravi',
    name: 'Waravi',
    category: 'TV-based digital services',
    tagline: 'The TV remote becomes the simplest way to connect.',
    summary:
      'Video calling and digital services on the household smart TV, operated with nothing but the remote. Built for seniors, families, care facilities and local governments — no smartphone required.',
    external: { label: 'Waravi flyer (PDF, Japanese)', href: '/docs/waravi-flyer.pdf' },
    highlights: [
      {
        title: 'Remote-only operation',
        body: 'The familiar home TV and remote are all anyone needs — easy for children and seniors alike.',
      },
      {
        title: 'Answers even when off',
        body: 'Incoming calls appear even when the TV is off. Select Open and the call begins (depends on the TV model).',
      },
      {
        title: 'WARAVI Alert (option)',
        body: 'Disaster and emergency notices for your registered area appear on the TV and can be read aloud.',
      },
      {
        title: 'Group calls & chat',
        body: 'One-to-one calls, meetings with three or more people, chat and screen sharing with a PC.',
      },
      {
        title: 'Nothing left on servers',
        body: 'Peer-to-peer WebRTC connections mean call data never stays on a server.',
      },
      {
        title: 'Any device',
        body: 'Connect from a smartphone, PC, tablet or TV. Virtual backgrounds and blur are available on PC.',
      },
    ],
    steps: [
      { title: 'Open Waravi', body: 'Launch WARAVI from the TV menu.' },
      { title: 'Enter a number', body: 'Type the other person’s number, or pick one from speed dial.' },
      { title: 'Answer easily', body: 'Incoming calls pop up while you watch TV. Select Open to talk.' },
    ],
    facts: [
      { label: 'Devices', value: 'Android TVs · smartphones · tablets · PCs' },
      { label: 'Patents', value: 'JP · CN · US · KR' },
      { label: 'Japan', value: 'Patent No. 6797791' },
      { label: 'United States', value: 'US 10,484,325 B2' },
      { label: 'China', value: 'ZL 2016 8 022915.X' },
      { label: 'Official site', value: 'waravi.info' },
    ],
    useCases: [
      'Family monitoring',
      'Group TV meetings',
      'Online medical & health consultation',
      'Customer support',
      'Interviews & reception',
      'Online seminars',
      'Disaster notifications',
      'Care facilities',
    ],
    note:
      'TVPAY — a TV remote with built-in payment and video calling, developed with PAY ROUTE Co., Ltd. with support from Sony Acceleration Platform — uses zero-knowledge RC-Auth: no ID, no password.',
  },
  {
    slug: 'halal-sns',
    name: 'Official Halal SNS',
    category: 'Social platform',
    tagline: 'A social network built on privacy and faith.',
    summary:
      'A safe, certified social platform for the Islamic world, built on SecurityTalk technology. It launches in 2026 with partners in seven countries, and is designed to grow into a super app, a dedicated OS and dedicated hardware.',
    status: 'Official launch 2026',
    highlights: [
      {
        title: 'Certified halal',
        body: 'Built on the first ICT technology ever to receive official halal certification.',
      },
      {
        title: 'Privacy by architecture',
        body: 'SecurityTalk and @POP technology keep personal data off central servers.',
      },
      {
        title: 'Local partnerships',
        body: 'Joint ventures with religious authorities, governments and royal-affiliated companies.',
      },
    ],
    steps: [
      { title: 'App launch', body: 'Multilingual SNS with chat, posting and @POP authentication.' },
      { title: 'Foundation', body: 'Country joint ventures, payments and advertising.' },
      { title: 'Super app', body: 'Remittance, donations, e-commerce and on-device AI.' },
      { title: 'Halal OS', body: 'A dedicated AOSP-based OS with @POP built in.' },
      { title: 'Hardware', body: 'A dedicated smartphone for the community.' },
    ],
    facts: [
      { label: 'Market', value: '2.5 billion people' },
      { label: 'Goal', value: '1 billion users' },
      {
        label: 'MOU & JV countries',
        value: 'Indonesia · Bangladesh · Pakistan · UAE · Saudi Arabia · Uzbekistan · Poland',
      },
    ],
  },
  {
    slug: 'tsugite',
    name: 'TSUGITE',
    category: 'Physical asset trust',
    tagline: 'A digital passport for things worth keeping.',
    summary:
      'Trust infrastructure for the lifecycle of valuable physical assets. Starting with graded trading cards, TSUGITE links authentication, physical verification, storage and transfer history to one unique Asset ID.',
    status: 'In development',
    highlights: [
      { title: 'Identify', body: 'A unique Asset ID issued from grading data.' },
      { title: 'Verify', body: 'Who verified it, when, and with what evidence.' },
      { title: 'Protect', body: 'Storage status recorded — home or vault.' },
      { title: 'Connect', body: 'Linked to sale, transfer, insurance and inheritance.' },
    ],
  },
];

export const digitalServices = [
  {
    name: '@CREATOR',
    body: 'A store-app builder. Pick one of eight templates, add photos and text, and your own app is ready — with booking, coupons, stamp cards, e-commerce, chat and @POP delivery built in. App management can be outsourced to us.',
    href: '/solutions/atcreator/',
  },
  {
    name: 'Website production',
    body: 'Corporate and service websites designed, built and maintained with security in mind.',
  },
  {
    name: 'Web marketing',
    body: 'Search, content and campaign support that turns a website into a business channel.',
  },
];

export const news = [
  {
    slug: '2025-06-16-halal-certification',
    date: '2025-06-16',
    related: ['securitytalk', 'halal-sns'] as string[],
    tag: 'Certification',
    title: 'SecurityTalk receives the world’s first halal certification in ICT',
    body: 'SecurityTalk has been recognized as an information protection technology aligned with Islamic values, becoming the first product in the IT field to be halal certified.',
  },
  {
    slug: '2025-04-25-japan-resilience-award',
    date: '2025-04-25',
    related: ['waravi', 'securitytalk'] as string[],
    tag: 'Award',
    title: 'Runner-up Grand Prize and inaugural Minister for National Resilience Award at the 11th Japan Resilience Award 2025',
    body: 'Waravi and SecurityTalk were recognized for their contribution to disaster preparedness and resilient social infrastructure.',
  },
  {
    slug: '2023-12-18-capital-alliance',
    date: '2023-12-18',
    related: [] as string[],
    tag: 'Corporate',
    title: 'Capital and business alliance with Nakanishi Sangyo Co., Ltd.',
    body: 'Good Create has entered into a capital and business alliance with Nakanishi Sangyo Co., Ltd.',
  },
];

// Company history. Only dates confirmed by source materials are listed.
export const history = [
  { year: '2000', month: 'March', title: 'Company founded', body: 'Good Create Co., Ltd. is established in Marugame, Kagawa, developing information distribution tools and medical systems.' },
  { year: '2020', month: '', title: '@POP international patent application', body: 'PCT application filed for @POP (PCT/JP2020/035327). Patents later granted in Japan, the United States, China and Korea.' },
  { year: '2020', month: '', title: 'Waravi is born', body: 'At the request of hospitals during the COVID-19 pandemic, Good Create develops TV video-calling technology to make online visits easier.' },
  { year: '2023', month: 'December', title: 'Capital and business alliance', body: 'Capital and business alliance concluded with Nakanishi Sangyo Co., Ltd.' },
  { year: '2025', month: 'April', title: 'Minister for National Resilience Award', body: 'Runner-up Grand Prize and the inaugural Minister’s Award at the 11th Japan Resilience Award, for Waravi and SecurityTalk.' },
  { year: '2025', month: 'June', title: 'World’s first halal certification in ICT', body: 'SecurityTalk becomes the first product in the IT field to receive official halal certification.' },
  { year: '2026', month: '', title: 'Official Halal SNS launch', body: 'Launch of the Official Halal SNS with MOU and joint-venture partners in seven countries.' },
];

export type NavItem = {
  label: string;
  href: string;
  intro?: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const nav: NavItem[] = [
  {
    label: 'Technology',
    href: '/technology/',
    intro: '@POP — our patented technology that keeps personal information on the device.',
    children: [
      { label: '@POP overview', href: '/technology/', desc: 'Personal Own Protocol' },
      { label: 'How authentication works', href: '/technology/#authentication', desc: 'Encrypted, non-reusable IDs' },
      { label: 'Patents', href: '/technology/#patents', desc: 'Granted in JP · US · CN · KR' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions/',
    intro: 'Products built on @POP — from government security to the living room.',
    children: [
      { label: 'SecurityTalk', href: '/solutions/securitytalk/', desc: 'Secure communication' },
      { label: 'Secure Device & Web3.0 OS', href: '/solutions/secure-device/', desc: 'Hardware & OS' },
      { label: 'Waravi', href: '/solutions/waravi/', desc: 'TV-based digital services' },
      { label: 'Official Halal SNS', href: '/solutions/halal-sns/', desc: 'Social platform' },
      { label: 'TSUGITE', href: '/solutions/tsugite/', desc: 'Physical asset trust' },
      { label: '@CREATOR', href: '/solutions/atcreator/', desc: 'Store-app builder' },
      { label: 'Digital services', href: '/solutions/#digital', desc: 'Web production · marketing' },
    ],
  },
  {
    label: 'Company',
    href: '/company/',
    intro: 'Founded in Kagawa in 2000. Building trust infrastructure for Japan and the world.',
    children: [
      { label: 'Message from the President', href: '/company/#message' },
      { label: 'Philosophy & mission', href: '/company/#philosophy' },
      { label: 'Company profile', href: '/company/#profile' },
      { label: 'History', href: '/company/#history' },
      { label: 'Offices', href: '/company/#offices' },
    ],
  },
  { label: 'News', href: '/news/' },
];

