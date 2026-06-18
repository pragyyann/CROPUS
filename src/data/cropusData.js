// CROPUS mock data for frontend usage

export const regionOptions = [
  'Kashmir',
  'Gujarat',
  'Punjab / Haryana',
  'South India',
  'Central India',
  'Not Sure'
];

export const products = [
  {
    id: 'kashmir-blend',
    name: 'Kashmir Blend',
    slug: 'kashmir-blend',
    description: 'For colder soil conditions, orchard crops, and moisture-sensitive regions.',
    region: 'Kashmir',
    recommendedFor: 'Apples, saffron, almonds, cold-hardy orchard vegetables.',
    image: '/images/product/kashmir-blend.png',
    packSizes: [
      { label: '1kg', price: 499 },
      { label: '5kg', price: 1299 },
      { label: '10kg', price: 2299 },
      { label: '25kg', price: 4999 }
    ]
  },
  {
    id: 'gujarat-blend',
    name: 'Gujarat Blend',
    slug: 'gujarat-blend',
    description: 'For dry heat, moisture retention needs, and soil structure support.',
    region: 'Gujarat',
    recommendedFor: 'Cotton, groundnuts, cumin, citrus, arid-zone fruits.',
    image: '/images/product/gujarat-blend.png',
    packSizes: [
      { label: '1kg', price: 499 },
      { label: '5kg', price: 1299 },
      { label: '10kg', price: 2299 },
      { label: '25kg', price: 4999 }
    ]
  },
  {
    id: 'punjab-haryana-blend',
    name: 'Punjab / Haryana Blend',
    slug: 'punjab-haryana-blend',
    description: 'For high-crop-cycle agricultural belts and soil recovery.',
    region: 'Punjab / Haryana',
    recommendedFor: 'Wheat, paddy, sugarcane, mustard, intense rotation crops.',
    image: '/images/product/punjab-haryana-blend.png',
    packSizes: [
      { label: '1kg', price: 499 },
      { label: '5kg', price: 1299 },
      { label: '10kg', price: 2299 },
      { label: '25kg', price: 4999 }
    ]
  },
  {
    id: 'south-india-blend',
    name: 'South India Blend',
    slug: 'south-india-blend',
    description: 'For humid regions, plantation crops, and organic matter support.',
    region: 'South India',
    recommendedFor: 'Coffee, tea, cardamom, pepper, coconut, rubber plantation.',
    packSizes: [
      { label: '1kg', price: 499 },
      { label: '5kg', price: 1299 },
      { label: '10kg', price: 2299 },
      { label: '25kg', price: 4999 }
    ]
  },
  {
    id: 'central-india-blend',
    name: 'Central India Blend',
    slug: 'central-india-blend',
    description: 'For mixed farming, dryland agriculture, and soil conditioning.',
    region: 'Central India',
    recommendedFor: 'Soybeans, cotton, pulses, oilseeds, wheat.',
    packSizes: [
      { label: '1kg', price: 499 },
      { label: '5kg', price: 1299 },
      { label: '10kg', price: 2299 },
      { label: '25kg', price: 4999 }
    ]
  },
  {
    id: 'general-blend',
    name: 'Not Sure / General Blend',
    slug: 'general-blend',
    description: 'For buyers who want guidance before choosing a region-specific option.',
    region: 'Not Sure',
    recommendedFor: 'Domestic plants, balcony gardening, mixed potting mixes.',
    packSizes: [
      { label: '1kg', price: 499 },
      { label: '5kg', price: 1299 },
      { label: '10kg', price: 2299 },
      { label: '25kg', price: 4999 }
    ]
  }
];

export const bulkVolumes = [
  { volume: '100kg', label: 'Trial bulk orders', use: 'Small farms & test programs' },
  { volume: '500kg', label: 'Regional supply', use: 'Commercial nurseries & local clubs' },
  { volume: '1 Ton+', label: 'Commercial procurement', use: 'FPOs, distributors & estates' },
  { volume: 'Custom Volume', label: 'Based on requirement', use: 'Tailored enterprise contracts' }
];

export const buyerCategories = [
  { title: 'Agri Distributors', desc: 'State-wide distribution partnerships with custom logistics.' },
  { title: 'Commercial Farms', desc: 'Direct-to-farm regional blends mapped to specific crops.' },
  { title: 'Nurseries', desc: 'High-purity organic compost in retail packs or large quantities.' },
  { title: 'Organic Stores', desc: 'Shelf-ready small packs with clear region-aware labeling.' },
  { title: 'FPOs / Farmer Groups', desc: 'Collective sourcing agreements for cost-effective restoration.' },
  { title: 'Private Label Buyers', desc: 'Full custom packaging and customized formula setups.' }
];

export const productDetails = {
  baseDescription: 'Premium, region-aware organic compost prepared based on Indian local soils and crop biology.',
  accordionItems: [
    {
      title: 'Composition & Details',
      content: 'Prepared under shade using pure organic inputs, pre-treated weed-free biomass, and premium earthworm strains (Eisenia fetida). Moisture content is stabilized at 15-25% to sustain active soil biology.'
    },
    {
      title: 'Soil Health Benefits',
      content: 'Enhances organic carbon levels, restores depleted micro-flora, increases soil porosity, optimizes soil structure, and strengthens roots against local moisture stresses.'
    },
    {
      title: 'Application & Dosage Guidelines',
      content: 'For Potted Plants: Apply 150-200g once in 30 days. For Fruit Trees: Apply 1-2kg per tree twice a year. For Farms: 1-2 Tons per acre depending on existing soil organic carbon deficit.'
    },
    {
      title: 'Storage & Handling',
      content: 'Store in a cool, dry, shaded area away from direct sunlight. Do not allow to dry completely to preserve active microbial colonies. Keep bag sealed when not in use.'
    },
    {
      title: 'Shipping & Returns Policy',
      content: 'Dispatched within 24-48 hours. Standard domestic delivery takes 3-7 business days. Due to the biological nature of the compost, returns are accepted within 7 days only if the package remains sealed.'
    }
  ]
};

export const checkoutSummaryMock = {
  productName: 'CROPUS Vermicompost – Gujarat Blend',
  regionSelected: 'Gujarat',
  quantity: 2,
  pricePerUnit: 1299,
  subtotal: 2598,
  deliveryCharge: 80,
  taxText: 'Included',
  total: 2678
};

export const regionalBlendsDetailed = [
  {
    id: 'kashmir-blend',
    code: 'REG_N_KAS',
    name: 'Kashmir Blend',
    slug: 'kashmir-blend',
    shortDescription: 'For colder soil conditions, orchard crops, and moisture-sensitive regions.',
    bestFor: 'Cold valleys, orchard farms, saffron fields, stone fruits, almonds, and cold-hardy vegetables.',
    targetClimateSoil: 'Cold temperature zones, clay-loam orchard beds, moisture-sensitive soils.',
    commonCropTargets: 'Apples, saffron, stone fruits, almonds, cold-hardy vegetables.',
    formulationSupport: 'Formulated to withstand low biological activity in cold temperatures, keeping roots active and supporting organic absorption in clay-loam orchard beds.',
    howItHelps: 'Supports root-zone conditioning, organic matter availability, and moisture balance in colder growing conditions.',
    recommendedPacks: '1kg / 5kg / 10kg / 25kg',
    ctaPath: '/product/kashmir-blend'
  },
  {
    id: 'gujarat-blend',
    code: 'REG_W_GUJ',
    name: 'Gujarat Blend',
    slug: 'gujarat-blend',
    shortDescription: 'For dry heat, moisture retention needs, and soil structure support.',
    bestFor: 'Dryland farms, sandy soils, salinity-prone regions, cotton, groundnuts, cumin, citrus, and arid-zone fruits.',
    targetClimateSoil: 'Dry heat, sandy soil, heavy salinity, low moisture retention.',
    commonCropTargets: 'Cotton, groundnuts, cumin, citrus, arid-zone fruits.',
    formulationSupport: 'Engineered for high water retention and porosity restoration to assist plants in saline conditions and reduce transpiration stress in sandy soils.',
    howItHelps: 'Supports soil structure, root-zone moisture retention, and long-term organic matter improvement in dry growing belts.',
    recommendedPacks: '1kg / 5kg / 10kg / 25kg',
    ctaPath: '/product/gujarat-blend'
  },
  {
    id: 'punjab-haryana-blend',
    code: 'REG_N_PB_HR',
    name: 'Punjab / Haryana Blend',
    slug: 'punjab-haryana-blend',
    shortDescription: 'For high-crop-cycle agricultural belts and soil recovery.',
    bestFor: 'Wheat, paddy, sugarcane, mustard, high-density grain farms, and exhausted agricultural soils.',
    targetClimateSoil: 'High crop cycle exhaustion recovery, intensive cultivation belts, soil carbon depletion.',
    commonCropTargets: 'Wheat, paddy, sugarcane, mustard, high-density grain farms.',
    formulationSupport: 'Optimized for fast soil carbon restoration and cellular structure conditioning after intense fertilizer-heavy crop rotation cycles.',
    howItHelps: 'Supports recovery of soil structure, organic matter, and long-term crop-cycle resilience.',
    recommendedPacks: '1kg / 5kg / 10kg / 25kg',
    ctaPath: '/product/punjab-haryana-blend'
  },
  {
    id: 'south-india-blend',
    code: 'REG_S_HUM',
    name: 'South India Blend',
    slug: 'south-india-blend',
    shortDescription: 'For humid regions, plantation crops, and organic matter support.',
    bestFor: 'Coffee, tea, cardamom, pepper, coconut, rubber, plantation crops, and humid high-rainfall regions.',
    targetClimateSoil: 'Humid high-rainfall plantation zones, laterite-rich soils, moisture-heavy growing regions.',
    commonCropTargets: 'Coffee, tea, cardamom, pepper, coconut, rubber, plantation crops.',
    formulationSupport: 'Built to support organic matter stability in humid soils and improve root-zone conditioning in plantation crop systems.',
    howItHelps: 'Supports moisture-rich soil balance, biological activity, and long-term soil texture improvement in humid regions.',
    recommendedPacks: '1kg / 5kg / 10kg / 25kg',
    ctaPath: '/product/south-india-blend'
  },
  {
    id: 'central-india-blend',
    code: 'REG_C_IND',
    name: 'Central India Blend',
    slug: 'central-india-blend',
    shortDescription: 'For mixed farming, dryland agriculture, and soil conditioning.',
    bestFor: 'Soybeans, cotton, pulses, oilseeds, wheat, mixed farming, and black cotton soil regions.',
    targetClimateSoil: 'Clayey black cotton soils, mixed dryland farms, variable rainfall regions.',
    commonCropTargets: 'Soybeans, cotton, pulses, oilseeds, wheat.',
    formulationSupport: 'Designed to improve soil conditioning, organic matter support, and root-zone balance across mixed farming conditions.',
    howItHelps: 'Supports soil texture, moisture behavior, and organic structure in variable central Indian farm conditions.',
    recommendedPacks: '1kg / 5kg / 10kg / 25kg',
    ctaPath: '/product/central-india-blend'
  },
  {
    id: 'general-blend',
    code: 'REG_GEN_ALL',
    name: 'Not Sure / General Blend',
    slug: 'general-blend',
    shortDescription: 'For guided selection and general agricultural soil conditioning.',
    bestFor: 'Home gardens, potting soils, domestic crops, nurseries, and buyers unsure of their regional blend.',
    targetClimateSoil: 'General agricultural conditions and mixed soil types.',
    commonCropTargets: 'All domestic crops, home garden mixtures, potting soils.',
    formulationSupport: 'A balanced starting formulation for users who need general soil conditioning before selecting a more specific regional blend.',
    howItHelps: 'Provides a simple entry point for soil improvement while guiding users toward better region-specific selection.',
    recommendedPacks: '1kg / 5kg / 10kg / 25kg',
    ctaPath: '/product/general-blend'
  }
];
