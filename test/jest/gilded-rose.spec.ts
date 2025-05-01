import { Item, GildedRose, GildedRoseProducts } from '@/gilded-rose';

describe('GiledRose', () => {
// sellIn Tests:
  it('GivenAgedBrieSellIn_WhenUpdateQuantity_ThenLowerSellIn', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.AGEDBRIE, 10, 10)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].sellIn).toBeLessThan(10);
  });

  

  //Quality Tests:
  it('GivenBackStageQuality10_WhenUpdateQuantity_ThenIncreaseQualityBy2', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.BACKSTAGE, 9, 10)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toEqual(12);
  });

  it('GivenBackStageQuality10_WhenSellInIs0_ThenQualityIs0', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.BACKSTAGE, 0, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it('GivenBackStageQuality10_WhenSellInIs5orLess_ThenUpdateQualityBy3', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.BACKSTAGE, 5, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toEqual(13);
  });
//agedbrie
  it('GivenAgedBrie50_WhenUpdateQuantity_ThenQualityRemainsAt50', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.AGEDBRIE, 10  , 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });
  //backstage
  it('GivenBackStageQuality50_WhenUpdateQuantity_ThenQualityRemainsAt50', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.BACKSTAGE, 10  , 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(50);
  });
 
  it('GivenItemSulfuras_WhenUpdateQuantity_ThenQualityRemainsTheSame', () => {

    const gildedRose = new GildedRose([new Item(GildedRoseProducts.SULFURAS, 10  , 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(10);
  });

});
