export const puenteContent = {
  brand: 'Puente',
  category: 'Mobile App',
  headline: 'Face-to-face translation that stays on the device.',
  supportingLine:
    'Hold a natural bilingual conversation offline—speak, hear the translation, keep the turn going—without sending audio to the cloud.',
  metaDescription:
    'Puente is an offline Android conversational translator for face-to-face interpreting. Speak in English, Spanish, French, or German pairs; hear the reply; export bilingual logs—without cloud dependency after setup.',
  shortBlurb:
    'Puente is an offline Android conversational translator for face-to-face interpreting. Speak in English, Spanish, French, or German pairs; hear the reply spoken aloud; export bilingual logs—without cloud dependency after setup.',
  primaryCta: {
    label: 'Request a demo',
    url: '/contact?subject=puente-demo',
  },
  secondaryCta: {
    label: 'Contact sales',
    url: 'mailto:support@unlovedproductions.com',
  },
  definition:
    'Puente is an Android conversational interpreter for shared devices. Two people take turns speaking into one device. Puente recognizes speech on-device, translates it, speaks the result aloud, and keeps the transcript—so the exchange stays fast, private, and usable where Wi‑Fi is weak or forbidden after setup.',
  problem:
    'Front desks, clinics, hospitality counters, and field teams hit the same wall: a customer or patient who does not share a language, a shared tablet on the counter, and unreliable or restricted connectivity. Consumer translator apps assume personal phones, constant internet, and cloud processing. That breaks privacy expectations, fails in dead zones, and leaves no clean record of what was said.',
  solution:
    'Puente is an Android conversational interpreter for shared devices. Two people take turns speaking into one device. Puente recognizes speech on-device, translates it, speaks the result aloud, and keeps the transcript—so the exchange stays fast, private, and usable where Wi‑Fi is weak or forbidden after setup.',
  benefits: [
    {
      title: 'Works offline after setup',
      description:
        'First download of translation models, then recognition and translation run without a network.',
    },
    {
      title: 'Privacy by design',
      description:
        'Speech and translation stay on the device; nothing is sent to a cloud translator for the core flow.',
    },
    {
      title: 'Built for turn-taking',
      description:
        'Optimized for face-to-face interpreting, not chatbots or typed one-shots.',
    },
    {
      title: 'Operational record',
      description:
        'Export bilingual conversations as TXT, PDF, or CSV for follow-up and handoff.',
    },
    {
      title: 'Shared-device ready',
      description:
        'Speaker profiles, push-to-talk, and confidence cues for noisy counters and busy floors.',
    },
  ],
  features: [
    {
      title: 'Conversation modes',
      description:
        'Auto English ↔ Spanish with language detection, plus manual English ↔ Spanish, English ↔ French, and English ↔ German. Choose a start language and swap sides when roles flip.',
    },
    {
      title: 'Clear turns under pressure',
      description:
        'Push-to-talk, silence auto-stop, mic level feedback, and optional noise reduction keep turns clean in real rooms—not lab silence.',
    },
    {
      title: 'Confidence you can act on',
      description:
        'See recognition confidence on each turn. Retry unclear speech or translate anyway when the situation cannot wait.',
    },
    {
      title: 'Transcript and favorites',
      description:
        'Searchable conversation history with timestamps. Star important lines so staff can find them later.',
    },
    {
      title: 'Exportable bilingual logs',
      description:
        'Export to TXT, PDF, or CSV and share through the system share sheet. Keep an export history on device.',
    },
    {
      title: 'Offline phrasebook',
      description:
        'Common English/Spanish phrases for repeated workflows when a full conversation is not needed.',
    },
    {
      title: 'Model control',
      description:
        'Model Manager for Vosk speech models and ML Kit translation packs—simple view for day-to-day use, advanced when IT needs visibility.',
    },
  ],
  howItWorks: [
    {
      name: 'Set up once',
      text: 'Install Puente, grant microphone access, complete onboarding, and allow the first ML Kit model download.',
    },
    {
      name: 'Choose a mode',
      text: 'Auto EN↔ES for open conversation, or lock EN↔ES / EN↔FR / EN↔DE for known pairs.',
    },
    {
      name: 'Take turns',
      text: 'Speak (or hold push-to-talk). Puente shows and speaks the translation, then listens for the reply.',
    },
    {
      name: 'Keep or share the record',
      text: 'Favorite key turns; export TXT, PDF, or CSV when the visit or desk interaction ends.',
    },
  ],
  idealFor: [
    'Clinic and reception desks needing bilingual intake without a staff interpreter on every shift',
    'Hospitality and front-of-house counters on shared tablets',
    'Field and operations desks where connectivity is intermittent and privacy matters',
    'Any team that needs offline reliability + exportable bilingual logs, not another consumer translator icon',
  ],
  trust: [
    'Speech recognition uses on-device Vosk models (English, Spanish, French, German bundled with the app).',
    'Translation uses Google ML Kit offline models after the initial download.',
    'Core conversation flow does not require cloud STT or cloud translation APIs once models are cached.',
    'Exports leave the device only when a user explicitly shares them.',
  ],
  languages: [
    { mode: 'Auto', languages: 'English ↔ Spanish' },
    { mode: 'Manual', languages: 'English ↔ Spanish' },
    { mode: 'Manual', languages: 'English ↔ French' },
    { mode: 'Manual', languages: 'English ↔ German' },
  ],
  platform: 'Android (API 21+)',
  closingHeadline: 'Ready to put a shared-device interpreter on the counter?',
  contactEmail: 'support@unlovedproductions.com',
  faqs: [
    {
      question: 'What is Puente?',
      answer:
        'Puente is an Android conversational interpreter for shared devices. Two people take turns speaking into one device; Puente recognizes speech on-device, translates it, speaks the result aloud, and keeps a bilingual transcript—without sending audio to the cloud for the core flow.',
    },
    {
      question: 'Does Puente work offline?',
      answer:
        'Yes. After the first download of translation models, speech recognition and translation run on the device without a network. Core conversation does not require cloud STT or cloud translation APIs once models are cached.',
    },
    {
      question: 'Which languages does Puente support?',
      answer:
        'v1.0 supports Auto English ↔ Spanish, plus manual English ↔ Spanish, English ↔ French, and English ↔ German. Platform: Android (API 21+).',
    },
    {
      question: 'Is speech sent to the cloud?',
      answer:
        'No. Speech recognition uses on-device Vosk models. Translation uses Google ML Kit offline models after the initial download. Exports leave the device only when a user explicitly shares them.',
    },
    {
      question: 'Can I export conversation logs?',
      answer:
        'Yes. Export bilingual conversations as TXT, PDF, or CSV through the system share sheet, and keep an export history on device.',
    },
    {
      question: 'Who is Puente for?',
      answer:
        'Clinic and reception desks, hospitality and front-of-house counters on shared tablets, field and operations desks with intermittent connectivity, and any team that needs offline reliability plus exportable bilingual logs.',
    },
  ],
  keywords: [
    'offline translator',
    'Android interpreter',
    'shared device translation',
    'English Spanish French German',
    'on-device speech recognition',
    'clinic hospitality translation',
    'conversational interpreter',
    'offline bilingual logs',
  ],
} as const;
