const { updateQuality } = require("../src/shop");

describe("Gilded Rose", function () {
  let item1, item2, item3, item4, item5, item6, item7, item8;
  beforeEach(() => {
    item1 = {
      daysToSell: 10,
      name: "+5 Dexterity Vest",
      quality: 20,
    };
    item2 = {
      daysToSell: 2,
      name: "Aged Brie",
      quality: 0,
    };
    item3 = {
      daysToSell: 5,
      name: "Elixir of the Mongoose",
      quality: 7,
    };
    item4 = {
      daysToSell: 0,
      name: "Sulfuras, Hand of Ragnaros",
      quality: 80,
    };
    item5 = {
      daysToSell: 0,
      name: "Sulfuras, Hand of Ragnaros",
      quality: 80,
    };
    item6 = {
      daysToSell: 15,
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 49,
    };
    item7 = {
      daysToSell: 10,
      name: "Aged Brie",
      quality: 49,
    };
    item8 = {
      daysToSell: 5,
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 49,
    };
    item9 = {
      daysToSell: 8,
      name: "Conjured",
      quality: 12,
    };
  });
  describe("all items", () => {
    it("daysToSell should decrease by 1 every day", function () {
      let items = [item1, item2, item3, item4, item5, item6, item7, item8];
      // updateQuality called once => one day has passed
      items = updateQuality(items);
      expect(items[0].daysToSell).toEqual(9);
      expect(items[1].daysToSell).toEqual(1);
      expect(items[2].daysToSell).toEqual(4);
      //expect(items[3].daysToSell).toEqual(-1);
      //expect(items[4].daysToSell).toEqual(-1);
      expect(items[5].daysToSell).toEqual(14);
      expect(items[6].daysToSell).toEqual(9);
      expect(items[7].daysToSell).toEqual(4);
    });
  });
  describe("basic items", () => {
    it("quality should decrease by 1 every day", function () {
      let items = [item1];
      // + 1 day
      items = updateQuality(items);
      expect(items[0].quality).toEqual(19);
      // + 1 day
      items = updateQuality(items);
      expect(items[0].quality).toEqual(18);
    });

    it("quality should never be greater than 50", function () {
      let items = [item7];
      // + 1 day
      items = updateQuality(items);
      expect(items[0].quality).toEqual(50);
      // + 1 day
      items = updateQuality(items);
      expect(items[0].quality).toEqual(50);
    });
  });
  describe("specific items", () => {
    describe("Aged Brie", () => {
      it("should increase quality by 1 every day", function () {
        let items = [item2];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(1);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(2);
      });
    });

    describe("Sulfuras", () => {
      it("quality should always be 80", function () {
        let items = [item4, item5];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(80);
        expect(items[1].quality).toEqual(80);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(80);
        expect(items[1].quality).toEqual(80);
      });
      it("limit date should always be 0 ", function () {
        let items = [item4, item5];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].daysToSell).toEqual(0);
        expect(items[1].daysToSell).toEqual(0);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].daysToSell).toEqual(0);
        expect(items[1].daysToSell).toEqual(0);
      });
    });
    describe("Backstage passes", () => {
      it("quality should drop to zero after limit date", function () {
        let items = [item8];
        // + 6 days
        items = updateQuality(items);
        items = updateQuality(items);
        items = updateQuality(items);
        items = updateQuality(items);
        items = updateQuality(items);
        items = updateQuality(items);

        expect(items[0].quality).toEqual(0);
      });
      it("quality should decrease by 3 each day when limit date is <= 5", function () {
        let items = [item8];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(46);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(43);
      });
      it("quality should decrease by 2 each day when limit date is > 5 and <= 10", function () {
        let items = [item7];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(47);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(45);
      });
      it("quality should decrease by 1 each day when limit date is > 10", function () {
        let items = [item6];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(48);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(47);
      });
    });
    describe("quality of Conjured", () => {
      it("quality of Conjured should decrease by 2 each day", function () {
        let items = [item9];
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(10);
        // + 1 day
        items = updateQuality(items);
        expect(items[0].quality).toEqual(8);
      });
    });
  });
});
