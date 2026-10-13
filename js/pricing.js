// ============================================================
// Central pricing configuration (edit prices here only)
// Used by js/product-data.js (single source of product data)
// All prices are USD per set, FOB.
//
// 用法：每个产品一行。tiers 里 qty=起订数量, price=对应单价。
//   - 想改金额：只改 price 数字
//   - 想改数量档位：只改 qty 数字，档位想设几个设几个
//   - moq 是该产品的起订量（现在统一 300 pcs，可单独改）
//   - 没有列出的产品自动使用 bySeries 系列价 / defaults 默认价
//
// ⚠️ 目前除格特惟 3 个是真实报价外，其余是按系列区间生成的占位价，
//    上线前请把每个产品的 price 改成真实金额。
// ⚠️ 编辑守则：永远在两个完整条目之间增删；最后一行结尾不带逗号；
//    文件最后的 '  },' / '};' 是骨架，不要删。
// ============================================================
window.SITE_PRICING = {
  defaults: { priceMin: '3.50', priceMax: '8.50', moq: '300 pcs' },
  bySeries: {
    'gold-pearl': { priceMin: '4.20', priceMax: '9.80' },   // 蜜润活性金珍珠
    'ginseng-gold': { priceMin: '4.50', priceMax: '10.50' },   // 新优人参活性金珍珠
    'black-ganoderma': { priceMin: '4.60', priceMax: '10.80' },   // 瑞草黑灵芝
    'phytoncide': { priceMin: '3.00', priceMax: '7.00' },   // 芬多精
    'spring-rain': { priceMin: '3.20', priceMax: '7.50' },   // 春雨美白
    'mens-sea-pine': { priceMin: '2.80', priceMax: '6.50' },   // 海松男士
    'jasmine-diamond': { priceMin: '3.40', priceMax: '7.90' },   // 茉莉钻石
    'angel-revitalizing': { priceMin: '3.60', priceMax: '8.20' },   // 天使赋活
    'angel': { priceMin: '3.60', priceMax: '8.20' },   // 天使爆品
    'gert-wei-gold': { priceMin: '5.20', priceMax: '12.00' },   // 格特惟黄金
  },
  byProduct: {
    // ===== 蜜润活性金珍珠 (gold-pearl) =====
    'gold-pearl-p01': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.20' }, { qty: 600, price: '4.45' }, { qty: 1000, price: '4.15' }] },
    'gold-pearl-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '6.67' }, { qty: 600, price: '5.53' }, { qty: 1000, price: '5.34' }] },
    'gold-pearl-p03': { moq: '300 pcs', tiers: [{ qty: 300, price: '11.12' }, { qty: 600, price: '10.38' }, { qty: 1000, price: '9.64' }] },
    'gold-pearl-p04': { moq: '300 pcs', tiers: [{ qty: 300, price: '7.41' }, { qty: 600, price: '6.23' }, { qty: 1000, price: '5.93' }] },
    'gold-pearl-p05': { moq: '300 pcs', tiers: [{ qty: 300, price: '7.41' }, { qty: 600, price: '6.23' }, { qty: 1000, price: '5.93' }] },
    'gold-pearl-p06': { moq: '300 pcs', tiers: [{ qty: 300, price: '4.75' }, { qty: 600, price: '4.15' }, { qty: 1000, price: '3.85' }] },
    'gold-pearl-p07': { moq: '100 pcs', tiers: [{ qty: 100, price: '42.00' }, { qty: 300, price: '40.00' }, { qty: 500, price: '38.00' }] }, 
    'gold-pearl-p08': { moq: '100 pcs', tiers: [{ qty: 100, price: '45.00' }, { qty: 300, price: '41.00' }, { qty: 500, price: '37.00' }] }, 
 // ===== 新优人参活性金珍珠 (ginseng-gold) =====
    'ginseng-gold-p01': { moq: '300 pcs', tiers: [{ qty: 300, price: '9.64' }, { qty: 600, price: '8.6' }, { qty: 1000, price: '8.16' }] },
    'ginseng-gold-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '11.12' }, { qty: 600, price: '10.38' }, { qty: 1000, price: '9.79' }] },
    'ginseng-gold-p03': { moq: '300 pcs', tiers: [{ qty: 300, price: '8.9' }, { qty: 600, price: '8.16' }, { qty: 1000, price: '7.71' }] },
    'ginseng-gold-p04': { moq: '300 pcs', tiers: [{ qty: 300, price: '8.9' }, { qty: 600, price: '8.16' }, { qty: 1000, price: '7.71' }] },
    'ginseng-gold-p05': { moq: '300 pcs', tiers: [{ qty: 300, price: '8.9' }, { qty: 600, price: '8.16' }, { qty: 1000, price: '7.71' }] },
    'ginseng-gold-p06': { moq: '300 pcs', tiers: [{ qty: 300, price: '11.12' }, { qty: 600, price: '10.38' }, { qty: 1000, price: '9.79' }] },
    // ===== 瑞草黑灵芝 (black-ganoderma) =====
    'black-ganoderma-p01': { moq: '300 pcs', tiers: [{ qty: 300, price: '6.23' }, { qty: 600, price: '5.63' }, { qty: 1000, price: '5.19' }] },
    'black-ganoderma-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '7.12' }, { qty: 600, price: '6.23' }, { qty: 1000, price: '5.93' }] },
    'black-ganoderma-p03': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.19' }, { qty: 600, price: '4.75' }, { qty: 1000, price: '4.45' }] },
    'black-ganoderma-p04': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.19' }, { qty: 600, price: '4.75' }, { qty: 1000, price: '4.45' }] },
    'black-ganoderma-p05': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.19' }, { qty: 600, price: '4.75' }, { qty: 1000, price: '4.45' }] },
    'black-ganoderma-p06': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.19' }, { qty: 600, price: '4.75' }, { qty: 1000, price: '4.45' }] },
    // ===== 芬多精 (phytoncide) =====
    'phytoncide-p01': { moq: '500 pcs', tiers: [{ qty: 500, price: '5.19' }, { qty: 800, price: '4.45' }, { qty: 1000, price: '4.00' }] },
    'phytoncide-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.93' }, { qty: 600, price: '5.34' }, { qty: 1000, price: '5.04' }] },
    'phytoncide-p03': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.93' }, { qty: 600, price: '5.34' }, { qty: 1000, price: '5.04' }] },
    'phytoncide-p04': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.93' }, { qty: 600, price: '5.34' }, { qty: 1000, price: '5.04' }] },
    'phytoncide-p05': { moq: '300 pcs', tiers: [{ qty: 300, price: '5.93' }, { qty: 600, price: '5.34' }, { qty: 1000, price: '5.04' }] },
    'phytoncide-p06': { moq: '300 pcs', tiers: [{ qty: 300, price: '4.45' }, { qty: 600, price: '4.15' }, { qty: 1000, price: '3.71' }] },
    // ===== 春雨美白 (spring-rain) =====
    'spring-rain-p01': { moq: '300 pcs', tiers: [{ qty: 300, price: '6.23' }, { qty: 600, price: '5.63' }, { qty: 1000, price: '5.19' }] },
    'spring-rain-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '6.23' }, { qty: 600, price: '5.63' }, { qty: 1000, price: '5.19' }] },
    'spring-rain-p03': { moq: '300 pcs', tiers: [{ qty: 300, price: '6.23' }, { qty: 600, price: '5.63' }, { qty: 1000, price: '5.19' }] },
    // ===== 海松男士 (mens-sea-pine) =====
    'mens-sea-pine-p01': { moq: '300 pcs', tiers: [{ qty: 300, price: '3.58' }, { qty: 600, price: '3.27' }, { qty: 1000, price: '2.98' }] },
    'mens-sea-pine-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '3.58' }, { qty: 600, price: '3.27' }, { qty: 1000, price: '2.98' }] },
    // ===== 茉莉钻石 (jasmine-diamond) =====
    'jasmine-diamond-p01': { moq: '100 pcs', tiers: [{ qty: 100, price: '6.23' }, { qty: 300, price: '5.63' }, { qty: 600, price: '5.19' }] },
    'jasmine-diamond-p02': { moq: '100 pcs', tiers: [{ qty: 100, price: '6.67' }, { qty: 300, price: '5.93' }, { qty: 600, price: '5.63' }] },
    'jasmine-diamond-p03': { moq: '100 pcs', tiers: [{ qty: 100, price: '6.67' }, { qty: 300, price: '5.93' }, { qty: 600, price: '5.63' }] },
    'jasmine-diamond-p04': { moq: '100 pcs', tiers: [{ qty: 100, price: '11.12' }, { qty: 300, price: '10.38' }, { qty: 600, price: '10.08' }] },
    // ===== 天使赋活 (angel-revitalizing) =====
    'angel-revitalizing-p01': { moq: '500 pcs', tiers: [{ qty: 500, price: '4.45' }, { qty: 800, price: '3.7' }, { qty: 1000, price: '3.41' }] },
    'angel-revitalizing-p02': { moq: '500 pcs', tiers: [{ qty: 500, price: '4.45' }, { qty: 800, price: '3.7' }, { qty: 1000, price: '3.41' }] },
    'angel-revitalizing-p03': { moq: '500 pcs', tiers: [{ qty: 500, price: '4.45' }, { qty: 800, price: '3.7' }, { qty: 1000, price: '3.41' }] },
    'angel-revitalizing-p04': { moq: '500 pcs', tiers: [{ qty: 500, price: '4.45' }, { qty: 800, price: '3.7' }, { qty: 1000, price: '3.41' }] },
    'angel-revitalizing-p05': { moq: '500 pcs', tiers: [{ qty: 500, price: '4.45' }, { qty: 800, price: '3.7' }, { qty: 1000, price: '3.41' }] },
    'angel-revitalizing-p06': { moq: '500 pcs', tiers: [{ qty: 500, price: '4.45' }, { qty: 800, price: '3.7' }, { qty: 1000, price: '3.41' }] },
    // ===== 天使爆品 (angel) =====
    'angel-p01': { moq: '318 pcs', tiers: [{ qty: 318, price: '1.93' }, { qty: 720, price: '1.34' }, { qty: 1440, price: '1.26' }] },
    'angel-p02': { moq: '318 pcs', tiers: [{ qty: 318, price: '1.93' }, { qty: 720, price: '1.34' }, { qty: 1440, price: '1.26' }] },
    'angel-p03': { moq: '318 pcs', tiers: [{ qty: 318, price: '1.93' }, { qty: 720, price: '1.34' }, { qty: 1440, price: '1.26' }] },
    'angel-p04': { moq: '400 pcs', tiers: [{ qty: 400, price: '5.05' }, { qty: 800, price: '4.76' }, { qty: 1200, price: '4.46' }] },
    'angel-p05': { moq: '280 pcs', tiers: [{ qty: 280, price: '2.08' }, { qty: 840, price: '1.78' }, { qty: 1680, price: '1.49' }] },
    'angel-p06': { moq: '205 pcs', tiers: [{ qty: 205, price: '2.2' }, { qty: 615, price: '2.05' }, { qty: 12300, price: '1.9' }] },
    'angel-p07': { moq: '320 pcs', tiers: [{ qty: 320, price: '1.93' }, { qty: 640, price: '1.34' }, { qty: 1280, price: '1.26' }] },
    'angel-p08': { moq: '500 pcs', tiers: [{ qty: 500, price: '5.19' }, { qty: 800, price: '4.45' }, { qty: 1000, price: '4.15' }] },
    // ===== 格特惟黄金 (gert-wei-gold) =====
    'gert-wei-gold-p01': { moq: '300 pcs', tiers: [{ qty: 300, price: '11.12' }, { qty: 600, price: '10.38' }, { qty: 1000, price: '10.08' }] },
    'gert-wei-gold-p02': { moq: '300 pcs', tiers: [{ qty: 300, price: '11.12' }, { qty: 600, price: '10.38' }, { qty: 1000, price: '10.08' }] },
    'gert-wei-gold-p03': { moq: '500 pcs', tiers: [{ qty: 500, price: '5.19' }, { qty: 800, price: '4.45' }, { qty: 1000, price: '4.15' }] },
    'mens-sea-pine-p03': { moq: '100 pcs', tiers: [{ qty: 100, price: '18.00' }, { qty: 300, price: '15.00' }, { qty: 500, price: '10.50' }] },
    'black-ganoderma-p07': { moq: '100 pcs', tiers: [{ qty: 100, price: '24.60' }, { qty: 300, price: '22.50' }, { qty: 500, price: '20.40' }] },
    'black-ganoderma-p08': { moq: '100 pcs', tiers: [{ qty: 100, price: '24.00' }, { qty: 300, price: '22.00' }, { qty: 500, price: '20.00' }] },
    'ginseng-gold-p07': { moq: '100 pcs', tiers: [{ qty: 100, price: '50.00' }, { qty: 300, price: '45.00' }, { qty: 500, price: '40.00' }] }
  },
  // per-product override, key = sku (wins over byProduct)
  bySku: {}
};

window.getProductPricing = function(seriesId, num, sku) {
  var p = window.SITE_PRICING;
  var price = null;
  if (sku && p.bySku[sku]) price = p.bySku[sku];
  if (!price && seriesId && num) price = p.byProduct[seriesId + '-p' + (num < 10 ? '0' + num : '' + num)];
  if (!price && seriesId && p.bySeries[seriesId]) price = p.bySeries[seriesId];
  if (!price) price = p.defaults;

  var tiers = null;
  if (price.tiers && price.tiers.length) {
    tiers = price.tiers.slice().sort(function(a, b) { return a.qty - b.qty; });
  }

  var min = price.priceMin != null ? price.priceMin : p.defaults.priceMin;
  var max = price.priceMax != null ? price.priceMax : p.defaults.priceMax;
  if (tiers) {
    max = tiers[0].price;
    min = tiers[tiers.length - 1].price;
  }

  return {
    priceMin: min,
    priceMax: max,
    moq: price.moq != null ? price.moq : p.defaults.moq,
    tiers: tiers
  };
};
