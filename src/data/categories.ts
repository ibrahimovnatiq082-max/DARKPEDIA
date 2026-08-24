import { CategoryInfo, CategoryId } from '../types';

export const CATEGORIES_MAP: Record<CategoryId, CategoryInfo> = {
  'paranormal': {
    id: 'paranormal',
    name: 'Paranormal',
    icon: '👻',
    description: 'Ruhlar, poltergeistlər, qeyri-adi görünməyən varlıqlar və izah olunmamış müşahidələr.',
    subcategories: [
      'Ruhlar',
      'Kabuslar',
      'Poltergeist hadisələri',
      'Görünməyən varlıqlar',
      'Paranormal araşdırmalar',
      'Qəribə səslər',
      'Qəribə görüntülər'
    ],
    color: '#6366f1'
  },
  'sirli-hadiseler': {
    id: 'sirli-hadiseler',
    name: 'Sirli hadisələr',
    icon: '🕵️',
    description: 'Tarixin ən böyük açılmamış sirrləri, itkin düşən ekspedisiyalar və naməlum şəxslər.',
    subcategories: [
      'Açılmamış hadisələr',
      'İtkin düşmələr',
      'Sirli ölümlər',
      'İzah olunmamış hadisələr',
      'Naməlum şəxslər',
      'Naməlum siqnallar'
    ],
    color: '#8b5cf6'
  },
  'qorxulu-yerler': {
    id: 'qorxulu-yerler',
    name: 'Qorxulu yerlər',
    icon: '🏚️',
    description: 'Tərk edilmiş xəstəxanalar, ruhlu qəsrlər, lənətlənmiş meşələr və sirli yeraltı şəhərlər.',
    subcategories: [
      'Tərk edilmiş xəstəxanalar',
      'Tərk edilmiş evlər',
      'Tərk edilmiş şəhərlər',
      'Meşələr',
      'Mağaralar',
      'Qəsrlər',
      'Həbsxanalar',
      'Otellər'
    ],
    color: '#78716c'
  },
  'cinayet-hadiseleri': {
    id: 'cinayet-hadiseleri',
    name: 'Cinayət və real hadisələr',
    icon: '🔪',
    description: 'Təsdiqlənmiş tarixi məhkəmə işləri, məşhur açılmamış soyuq cinayətlər və sirli işlər.',
    subcategories: [
      'Məşhur açılmamış cinayətlər',
      'Serial cinayət hadisələri',
      'İtkin şəxslər',
      'Tarixi cinayətlər',
      'Sirli cinayətlər',
      'Soyuq işlər'
    ],
    color: '#8b0000'
  },
  'psixologiya': {
    id: 'psixologiya',
    name: 'Psixologiya',
    icon: '🧠',
    description: 'Yuxu iflici, nadir nevroloji delüziyalar, kollektiv panika və insan şüurunun qaranlıq qatları.',
    subcategories: [
      'Yuxu iflici',
      'Qorxu',
      'Hallüsinasiyalar',
      'Déjà vu',
      'İnsan beyninin qəribə halları',
      'Kollektiv panika',
      'Qorxunun psixologiyası'
    ],
    color: '#0284c7'
  },
  'ufo-namelum': {
    id: 'ufo-namelum',
    name: 'UFO və naməlum hadisələr',
    icon: '👽',
    description: 'Rəsmi hərbi UAP müşahidələri, dərin kosmos radio siqnalları və qeyri-adi astronomik anomalilər.',
    subcategories: [
      'UFO müşahidələri',
      'UAP hadisələri',
      'Naməlum siqnallar',
      'Kosmosdan gələn qəribə siqnallar',
      'Astronomik anomalilər'
    ],
    color: '#059669'
  },
  'efsaneler-mifler': {
    id: 'efsaneler-mifler',
    name: 'Əfsanələr və miflər',
    icon: '🧟',
    description: 'Əsrlər boyu danışılan şəhər əfsanələri, qədim folklor canavarları və qaranlıq regional dastanlar.',
    subcategories: [
      'Şəhər əfsanələri',
      'Folklor',
      'Qədim miflər',
      'Canavar əfsanələri',
      'Ruh hekayələri',
      'Regional əfsanələr'
    ],
    color: '#d97706'
  },
  'kosmosun-qaranliq-terefi': {
    id: 'kosmosun-qaranliq-terefi',
    name: 'Kosmosun qaranlıq tərəfi',
    icon: '🌌',
    description: 'Qara dəliklər, qaranlıq maddə, kainatın termodinamik ölümü və ölümcül kosmik radiasiya sahələri.',
    subcategories: [
      'Qara dəliklər',
      'Supernovalar',
      'Kainatın ölümü',
      'Qaranlıq maddə',
      'Qaranlıq enerji',
      'Kosmik radiasiya',
      'Ekstremal planetlər',
      'Kosmik anomalilər'
    ],
    color: '#4338ca'
  },
  'qeribe-canlilar': {
    id: 'qeribe-canlilar',
    name: 'Qəribə canlılar',
    icon: '🧬',
    description: 'Okeanın 11 km dərinliyindəki canavarlar, zombi parazitlər və qeyri-adi təbii mutasiyalar.',
    subcategories: [
      'Dərin dəniz canlıları',
      'Qeyri-adi heyvanlar',
      'Parazitlər',
      'Ekstremal canlılar',
      'Nadir biologiya hadisələri'
    ],
    color: '#15803d'
  }
};

export const CATEGORIES: (CategoryInfo & { articleCount?: number })[] = Object.values(CATEGORIES_MAP).map(cat => ({
  ...cat,
  articleCount: 12
}));

export const CATEGORY_LIST = CATEGORIES;
