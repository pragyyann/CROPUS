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
    name: 'Kashmir Blend',
    code: 'REG_N_KAS',
    climate: 'Cold Temperature & Orchard Soils',
    crops: 'Apples, saffron, stone fruits, almonds, cold-hardy vegetables.',
    supports: 'Formulated to withstand low biological activity in cold temperatures, keeping roots active and supporting organic absorption in clay-loam orchard beds.'
  },
  {
    name: 'Gujarat Blend',
    code: 'REG_W_GUJ',
    climate: 'Dry Heat & Heavy Salinity',
    crops: 'Cotton, groundnuts, cumin, citrus, arid-zone fruits.',
    supports: 'Engineered for high water retention and porosity restoration to assist plants in saline conditions and reduce transpiration stress in sandy soils.'
  },
  {
    name: 'Punjab / Haryana Blend',
    code: 'REG_N_PB_HR',
    climate: 'High crop cycle exhaustion recovery',
    crops: 'Wheat, paddy, sugarcane, mustard, high-density grain farms.',
    supports: 'Optimized for fast soil carbon restoration and cellular structure conditioning after intense synthetic fertilizers crop rotation cycles.'
  },
  {
    name: 'South India Blend',
    code: 'REG_S_HUM',
    climate: 'Humid High-Rainfall Plantation',
    crops: 'Coffee, tea, cardamom, pepper, coconut, rubber, plantation crops.',
    supports: 'Specialized formulation preventing fast biological decay in hot/humid environments while sustaining slow-release organic micro-nutrients.'
  },
  {
    name: 'Central India Blend',
    code: 'REG_C_IND',
    climate: 'Clayey Black Cotton Soils',
    crops: 'Soybeans, cotton, pulses, oilseeds, wheat.',
    supports: 'Formulated with structure-loosening agents to increase air circulation and water percolation in sticky, heavy black soil systems.'
  },
  {
    name: 'Not Sure / General Blend',
    code: 'REG_GEN_ALL',
    climate: 'General Agricultural Conditions',
    crops: 'All domestic crops, home garden mixtures, potting soils.',
    supports: 'A balanced microbial active formula designed to satisfy standard domestic conditioning requirements across general Indian soils.'
  }
];
