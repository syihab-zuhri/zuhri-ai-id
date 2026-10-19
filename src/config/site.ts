import type { DomainInfo, WhyFeature, ProcessStep, FaqItem } from '../types';

export const CURRENT_YEAR = 2026;

export const DOMAIN_DATA: DomainInfo = {
  name: 'zuhri.ai.id',
  extension: '.ai.id',
  priceDisplay: 'Rp299.000',
  priceRaw: 299000,
  priceNote: 'Negotiable (Nego Wajar)',
  priceSubtext: 'Harga penawaran awal. Negosiasi terbuka untuk penawaran yang wajar.',
  status: 'Ditawarkan untuk dijual',
  contactEmail: 'syihabzuhri301004@gmail.com',
  registrarNote: 'Transfer resmi via EPP/Auth Code registrar domain .id (PANDI)',
};

export const CONTACT_CONFIG = {
  email: DOMAIN_DATA.contactEmail,
  defaultSubject: 'Penawaran Pembelian Domain zuhri.ai.id',
  defaultBody:
    'Halo, saya tertarik membeli domain zuhri.ai.id. Saya ingin mengetahui informasi lebih lanjut dan mendiskusikan penawarannya.',
  /**
   * Generates a RFC compliant mailto: string with properly encoded parameters.
   */
  getMailtoUrl: (customSubject?: string, customBody?: string) => {
    const subject = encodeURIComponent(customSubject || CONTACT_CONFIG.defaultSubject);
    const body = encodeURIComponent(customBody || CONTACT_CONFIG.defaultBody);
    return `mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`;
  },
};

export const WHY_FEATURES: WhyFeature[] = [
  {
    id: 'ai-portfolio',
    num: '01',
    title: 'AI Portfolio',
    shortDesc: 'Untuk memamerkan proyek AI dan machine learning.',
    fullDesc:
      'Wadah representatif untuk memamerkan proyek machine learning, visualisasi model, riset komputasi, dan showcase portofolio rekayasa AI kelas dunia.',
    tag: 'Showcase & Portofolio',
  },
  {
    id: 'personal-branding',
    num: '02',
    title: 'Personal Branding',
    shortDesc: 'Untuk membangun identitas digital yang profesional.',
    fullDesc:
      'Identitas digital yang khas, ringkas, dan prestisius bagi profesional, peneliti, konsultan, atau engineer bermarga maupun berinisial Zuhri di ranah teknologi tinggi.',
    tag: 'Reputasi & Kredibilitas',
  },
  {
    id: 'ai-experiments',
    num: '03',
    title: 'AI Experiments',
    shortDesc: 'Untuk chatbot, automasi, dan eksperimen teknologi.',
    fullDesc:
      'Panggung ideal untuk meluncurkan antarmuka chatbot interaktif, autonomous agents, playground prompt, serta lab eksperimen AI generative berikutnya.',
    tag: 'Laboratorium & Inovasi',
  },
  {
    id: 'digital-projects',
    num: '04',
    title: 'Digital Projects',
    shortDesc: 'Untuk produk, layanan, atau proyek teknologi baru.',
    fullDesc:
      'Nama domain ringkas yang mudah diingat untuk pondasi micro-SaaS, layanan API kecerdasan buatan, atau inisiatif produk teknologi berbasis web modern.',
    tag: 'Platform & Produk',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Hubungi Pemilik via Email',
    desc: 'Pembeli menghubungi pemilik melalui email resmi dengan menyertakan penawaran harga.',
    detail: 'Kirim penawaran langsung ke syihabzuhri301004@gmail.com atau melalui tombol CTA.',
  },
  {
    step: '02',
    title: 'Penyepakatan Harga & Ketentuan',
    desc: 'Kedua pihak menyepakati harga dan prosedur transfer secara transparan dan tertulis.',
    detail: 'Diskusi terbuka mengenai nominal negosiasi dan metode transfer yang disepakati bersama.',
  },
  {
    step: '03',
    title: 'Pembayaran & Otorisasi Pengalihan',
    desc: 'Pembayaran dan pengalihan kepemilikan dilakukan menggunakan mekanisme yang aman dan sesuai ketentuan registrar.',
    detail: 'Pemilik menyiapkan EPP / Auth Code resmi registrar atau transfer internal sesuai regulasi.',
  },
  {
    step: '04',
    title: 'Transaksi Selesai & Terkonfirmasi',
    desc: 'Transaksi diselesaikan setelah pembayaran dan transfer kepemilikan terkonfirmasi.',
    detail: 'Domain berpindah sepenuhnya ke akun pembeli dan siap diarahkan ke server/layanan Anda.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa harga domain ini?',
    answer:
      'Harga penawaran awal untuk domain zuhri.ai.id adalah Rp299.000. Harga ini merupakan nilai pembuka yang kompetitif untuk domain spesifik ekstensi inovasi .ai.id.',
  },
  {
    id: 'faq-2',
    question: 'Apakah harga masih bisa dinegosiasikan?',
    answer:
      'Ya, negosiasi terbuka untuk penawaran yang wajar. Anda dapat mengajukan nominal yang sesuai dengan anggaran proyek Anda melalui email resmi.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana cara membeli domain?',
    answer:
      'Cukup klik tombol "Ajukan Penawaran" pada halaman ini atau kirim email langsung ke syihabzuhri301004@gmail.com. Kami akan membalas penawaran Anda dalam waktu singkat untuk mendiskusikan rincian kesepakatan.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana proses transfer domain?',
    answer:
      'Setelah pembayaran disepakati dan dikonfirmasi, pemilik akan memberikan kode otorisasi (EPP/Auth Code) atau melakukan transfer antar-akun (push domain) pada registrar resmi domain .id (seperti Rumahweb, Niagahoster, Idcloudhost, atau registrar berakreditasi PANDI lainnya) langsung ke akun registrar Anda.',
  },
  {
    id: 'faq-5',
    question: 'Apakah pembayaran dilakukan langsung melalui website?',
    answer:
      'Tidak. Website ini berfungsi sebagai halaman pemasaran dan saluran kontak resmi pemilik domain. Tidak ada sistem keranjang belanja atau gateway otomatis. Pembayaran dilakukan secara langsung melalui transfer bank/metode resmi atau mekanisme escrow yang disepakati kedua belah pihak demi transparansi dan keamanan.',
  },
  {
    id: 'faq-6',
    question: 'Untuk proyek apa domain ini cocok digunakan?',
    answer:
      'Domain zuhri.ai.id sangat cocok untuk portofolio developer AI/ML, personal website peneliti atau profesional bernama Zuhri, chatbot interface, laboratorium agen otonom, startup teknologi, hingga produk digital inovatif lainnya.',
  },
];

export const MARQUEE_ITEMS = [
  'zuhri.ai.id',
  'Domain for Sale',
  'Rp299.000 Nego',
  'Next AI Identity',
  'Personal Branding',
  'Machine Learning Portfolio',
  'Direct from Owner',
  'Resmi PANDI Registrar',
];
