export const site = {
  name: 'Akash Nalawade',
  nameMr: 'आकाश नलावडे',
  tagline: 'Marathi television actor',
  taglineMr: 'मराठी दूरचित्रवाणी अभिनेता',
  url: 'https://akashnalawade.com',
  instagram: 'https://www.instagram.com/akash_nalawade_official/',
  instagramHandle: '@akash_nalawade_official',
  facebook: 'https://www.facebook.com/AkashNalawadeOfficial/',
  imdb: 'https://www.imdb.com/name/nm9813534/',
  email: 'an.events.collaboration@gmail.com',
  emailHref: 'mailto:an.events.collaboration@gmail.com',
  images: {
    hero: '/images/akash-hero.jpg',
    heroAlt: 'Akash Nalawade seated by the sea in a denim shirt',
    studio: '/images/akash-studio.jpg',
    studioAlt: 'Studio portrait of Akash Nalawade in a red shirt',
    family: '/images/akash-family.jpg',
    familyAlt: 'Akash Nalawade with his wife Ruchika Dhuri and their son Adhiraj',
    og: '/images/og.jpg',
  },
}

export const links = {
  starPravah: 'https://en.wikipedia.org/wiki/Star_Pravah',
  pune: 'https://en.wikipedia.org/wiki/Pune',
  sppu: 'https://www.unipune.ac.in/',
  lalitKala: 'https://www.unipune.ac.in/',
  sahkutumb: 'https://en.wikipedia.org/wiki/Sahkutumb_Sahaparivar',
  sadhiManasa: 'https://en.wikipedia.org/wiki/Sadhi_Manasa',
}

export const studio = {
  name: 'Mandal Softwares',
  url: 'https://software.mandal.one/',
  email: 'mandalsoftwares@gmail.com',
  emailHref: 'mailto:mandalsoftwares@gmail.com',
  phone: '+91 86525 51424',
  phoneHref: 'tel:+918652551424',
  whatsapp: 'https://wa.me/918652551424',
}

export const facts = [
  { label: 'Born', value: '8 September 1991' },
  { label: 'Hometown', value: 'Pune, Maharashtra', href: links.pune },
  { label: 'Training', value: 'Lalit Kala Kendra, SPPU', href: links.sppu },
  { label: 'Debut', value: 'Sahkutumb Sahaparivar, 2020', href: links.sahkutumb },
]

export const timeline = [
  {
    year: '1991',
    title: 'Born in Pune',
    body: 'Raised in a middle-class Pune family with no film-industry background. Schooling at Maharashtra Vidyamandir.',
  },
  {
    year: 'Education',
    title: 'Commerce, then the stage',
    body: 'Completed a commerce degree at Kaveri College, then chose acting. Formal training at Lalit Kala Kendra (Gurukul), Savitribai Phule Pune University, with a degree in theatre (natyashastra).',
  },
  {
    year: 'Theatre',
    title: 'Marathi plays first',
    body: 'Worked in Marathi theatre and experimental plays, and appeared in television commercials, before a lead television break.',
  },
  {
    year: '2020',
    title: 'Television debut as Pashya',
    body: 'Cast in Star Pravah’s family drama Sahkutumb Sahaparivar as Prashant “Pashya” More. The role made him a household name across Maharashtra.',
  },
  {
    year: '2022–23',
    title: 'Recognition and a new chapter',
    body: 'Shared the Star Pravah Parivar Puraskar for Best Siblings (2022) with his on-screen brothers. Married actress and model Ruchika Dhuri on 18 March 2023.',
  },
  {
    year: '2024–26',
    title: 'First lead: Satya',
    body: 'Headlined Sadhi Manasa (साधी माणसं) as Satya, opposite Shivani Baokar. The daily ran on Star Pravah from 18 March 2024 to 29 March 2026.',
  },
]

export const works = [
  {
    slug: 'sahkutumb-sahaparivar',
    title: 'Sahkutumb Sahaparivar',
    titleMr: 'सहकुटुंब सहपरिवार',
    role: 'Prashant “Pashya” More',
    roleMr: 'प्रशांत “पश्या” मोरे',
    channel: 'Star Pravah',
    channelHref: links.starPravah,
    href: links.sahkutumb,
    years: '24 February 2020 – 3 August 2023',
    status: 'Completed',
    episodes: '1,000 episodes',
    production: 'Frames Production',
    note: 'Official remake of the Tamil series Pandian Stores.',
    image: '/images/work-sahkutumb.jpg',
    imageAlt:
      'Akash Nalawade with Komal Kumbhar, his Sahkutumb Sahaparivar co-star as Anjali',
    summary:
      'A joint-family drama about the More household. Akash played Laxmi’s third son — an unlettered, big-hearted young man whose teasing, loyal bond with wife Anjali (Anji) became a favourite with viewers. The character turned a supporting part into the show’s breakout popular face.',
    highlights: [
      'Television debut',
      'Fan-favourite Pashya–Anji pairing',
      'Star Pravah Parivar Puraskar, Best Siblings (2022)',
    ],
    costars: 'Sunil Barve, Nandita Patkar, Komal Kumbhar, Amey Barve, Akash Shinde',
  },
  {
    slug: 'sadhi-manasa',
    title: 'Sadhi Manasa',
    titleMr: 'साधी माणसं',
    role: 'Satya',
    roleMr: 'सत्या',
    channel: 'Star Pravah',
    channelHref: links.starPravah,
    href: links.sadhiManasa,
    years: '18 March 2024 – 29 March 2026',
    status: 'Completed',
    episodes: '693 episodes',
    production: 'Frames Production',
    note: 'Official remake of the Tamil series Siragadikka Aasai. Story set in Sangli.',
    image: '/images/work-sadhi-manasa.jpg',
    imageAlt: 'Akash Nalawade in a look from the Sadhi Manasa years',
    summary:
      'Akash’s first lead. He played Satya, a troubled, unemployed young man whose life collides with Meera, a temple flower seller portrayed by Shivani Baokar. The pairing — and a look far removed from Pashya — marked his move from loved supporting actor to neta (hero) of a daily.',
    highlights: [
      'First lead role',
      'Opposite Shivani Baokar (Meera)',
      'Romantic family drama; ~2-year run',
    ],
    costars: 'Shivani Baokar, Supriya Pathare, Pandharinath Kamble, Pankaj Khamkar',
    quote:
      'Pashya received a lot of love. That role took me into people’s homes. I hope Satya finds the same love. My look in this show is very different too.',
  },
]

export const gallery = [
  {
    src: '/images/akash-studio.jpg',
    alt: 'Studio portrait of Akash Nalawade in a red shirt and black trousers',
    caption: 'Studio',
    pose: 'full',
  },
  {
    src: '/images/akash-beach.jpg',
    alt: 'Akash Nalawade on a beach in a white shirt and red cap',
    caption: 'Travel',
    pose: 'full',
  },
  {
    src: '/images/akash-car.jpg',
    alt: 'Akash Nalawade standing beside a red car',
    caption: 'In the city',
    pose: 'wide',
  },
  {
    src: '/images/akash-vintage.jpg',
    alt: 'Akash Nalawade leaning on a vintage white car',
    caption: 'Nilesh Bramhane',
    pose: 'full',
  },
  {
    src: '/images/akash-temple.jpg',
    alt: 'Akash Nalawade with folded hands at a temple doorway',
    caption: 'Temple visit',
    pose: 'tall',
  },
  {
    src: '/images/akash-selfie.jpg',
    alt: 'Akash Nalawade in glasses in a car',
    caption: 'On the road',
    pose: 'tall',
  },
]

export const nav = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about', href: '/about/', label: 'About' },
  { id: 'work', href: '/work/', label: 'Work' },
]

export const pages = [
  { href: '/', title: 'Home', blurb: 'Introduction and selected serials.' },
  { href: '/about/', title: 'About', blurb: 'Biography, photographs, and family.' },
  { href: '/work/', title: 'Work', blurb: 'Television credits and theatre training.' },
  { href: '/terms/', title: 'Terms of use', blurb: 'How this official site may be used.' },
  { href: '/credits/', title: 'Credits', blurb: 'Photographs, sources, and the studio.' },
  { href: '/sitemap/', title: 'Sitemap', blurb: 'A map of every public page.' },
]
