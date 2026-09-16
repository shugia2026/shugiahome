// Product series and product data
// Used by product-list.html and product-detail.html for dynamic content

window.PRODUCT_SERIES = [
  {
    id: 'gold-pearl',
    name: 'Active Gold Pearl Moisturizing Series',
    nameCn: '活性金珍珠蜜润系列',
    category: 'Signature Series',
    badge: 'Bestseller',
    image: './images/aadkvdq5ijyaq_ve_miaoda-df7d4c01.png',
    description: 'Luxurious gold-infused pearl essence for deep hydration, enhanced radiance and anti-aging benefits.',
    productCount: 12
  },
  {
    id: 'ginseng-gold',
    name: 'New Ginseng Active Gold Series',
    nameCn: '新优人参活性金系列',
    category: 'Premium Series',
    badge: '',
    image: './images/aadkvdrayo6ci_ve_miaoda-48ae3499.png',
    description: 'Korean ginseng extract with 24K gold for skin revitalization and firming.',
    productCount: 12
  },
  {
    id: 'black-ganoderma',
    name: 'Black Ganoderma Anti-Wrinkle Series',
    nameCn: '黑灵芝抗皱系列',
    category: 'Anti-Aging',
    badge: '',
    image: './images/aadkvdsy4xmso_ve_miaoda-35ee7063.png',
    description: 'Reishi mushroom extract targeting fine lines, wrinkles and loss of elasticity.',
    productCount: 12
  },
  {
    id: 'phytoncide',
    name: 'Phytoncide Forest Series',
    nameCn: '芬多精系列',
    category: 'Natural Botanical',
    badge: '',
    image: './images/aadkvdqsla4gq_ve_miaoda-dd3d396f.png',
    description: 'Forest phytoncide complex for soothing, calming and purifying skin care.',
    productCount: 12
  },
  {
    id: 'spring-rain',
    name: 'Spring Rain Brightening Series',
    nameCn: '春雨美白系列',
    category: 'Brightening',
    badge: '',
    image: './images/aadkvds4tkogq_ve_miaoda-18d10085.png',
    description: 'Dewy brightening formula with niacinamide and vitamin C for luminous, even skin tone.',
    productCount: 12
  },
  {
    id: 'mens-sea-pine',
    name: "Men's Sea Pine Series",
    nameCn: '男士海松系列',
    category: "Men's Care",
    badge: '',
    image: './images/aadkvc26klicw_ve_miaoda-9256796f.png',
    description: 'Marine pine extract men skincare for oil control, hydration and post-shave soothing.',
    productCount: 12
  },
  {
    id: 'jasmine-diamond',
    name: 'Jasmine Multi-Effect Diamond Series',
    nameCn: '茉莉多效钻石系列',
    category: 'Luxury Line',
    badge: '',
    image: './images/aadkvdqncu6tg_ve_miaoda-80c6e8bc.png',
    description: 'Premium jasmine-infused multi-benefit skincare with diamond powder for radiant luxury.',
    productCount: 12
  },
  {
    id: 'angel-revitalizing',
    name: 'Angel Revitalizing Series',
    nameCn: '天使活肤系列',
    category: 'Revitalizing',
    badge: '',
    image: './images/aadkvdtcxcmgg_ve_miaoda-4c04caff.png',
    description: 'Ethereal glow revitalizing skincare that restores luminosity and youthful bounce.',
    productCount: 12
  },
  {
    id: 'angel',
    name: 'Angel Series',
    nameCn: '天使系列',
    category: 'Classic Line',
    badge: '',
    image: './images/aadkvdtcxcmgg_ve_miaoda-4c04caff.png',
    description: 'Classic daily skincare essentials — gentle, effective formulas for all skin types.',
    productCount: 12
  },
  {
    id: 'gert-wei-gold',
    name: 'Gert Wei Gold Series',
    nameCn: '格特惟黄金系列',
    category: 'Ultra Premium',
    badge: 'Ultra Premium',
    image: './images/aadkvdq2tgqlo_ve_miaoda-b7b41166.png',
    description: 'Ultra-luxury gold-infused anti-aging collection — our most prestigious skincare line.',
    productCount: 12
  }
];

// Generate 12 product placeholders for a given series
window.generateProducts = function(seriesId, seriesName) {
  var products = [];
  for (var i = 1; i <= 12; i++) {
    var num = i < 10 ? '0' + i : i;
    products.push({
      id: seriesId + '-p' + num,
      sku: 'LHX-' + seriesId.toUpperCase().replace(/-/g, '') + '-' + num,
      name: seriesName + ' - Product ' + num,
      shortName: 'Product ' + num,
      number: num,
      series: seriesName,
      seriesId: seriesId,
      priceMin: (3 + Math.random() * 2).toFixed(2),
      priceMax: (7 + Math.random() * 3).toFixed(2),
      moq: '2,000 pcs',
      description: 'High-quality ' + seriesName.toLowerCase() + ' product ' + num + ' — premium formulation with Korean cosmetic technology.'
    });
  }
  return products;
};

window.getSeriesById = function(id) {
  for (var i = 0; i < window.PRODUCT_SERIES.length; i++) {
    if (window.PRODUCT_SERIES[i].id === id) {
      return window.PRODUCT_SERIES[i];
    }
  }
  return null;
};

window.getProductById = function(productId) {
  // productId format: seriesId-pXX
  var parts = productId.split('-p');
  if (parts.length < 2) return null;
  var seriesId = parts[0];
  var series = window.getSeriesById(seriesId);
  if (!series) return null;
  var products = window.generateProducts(seriesId, series.name);
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      products[i].seriesData = series;
      return products[i];
    }
  }
  return null;
};

// Simple URL query parser
window.getQueryParam = function(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
};
