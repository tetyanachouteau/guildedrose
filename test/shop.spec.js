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
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 49,
    };
    item8 = {
      daysToSell: 5,
      name: "Backstage passes to a TAFKAL80ETC concert",
      quality: 49,
    };
  });
  describe("all items", () => {
    it("daysToSell should decrease by 1 every day", function () {
      const items = [item1, item2, item3, item4, item5, item6, item7, item8];
      // updateQuality called once => one day has passed
      const updatedItems = updateQuality(items);
      expect(updatedItems[0].daysToSell).toEqual(9);
      expect(updatedItems[1].daysToSell).toEqual(1);
      expect(updatedItems[2].daysToSell).toEqual(4);
      expect(updatedItems[3].daysToSell).toEqual(-1);
      expect(updatedItems[4].daysToSell).toEqual(-1);
      expect(updatedItems[5].daysToSell).toEqual(14);
      expect(updatedItems[6].daysToSell).toEqual(9);
      expect(updatedItems[7].daysToSell).toEqual(4);
    });
  });
  describe("basic items", () => {
    it("quality should decrease by 1 every day", function () {
      const items = [item1];
      // + 1 day
      expect(updateQuality(items)[0].quality).toEqual(19);
      // + 1 day
      expect(updateQuality(items)[0].quality).toEqual(18);
    });
  });

  describe("specific items", () => {
    describe("Aged Brie", () => {
      it("should increase quality by 1 every day", function () {
        const items = [item2];
        // + 1 day
        expect(updateQuality(items)[0].quality).toEqual(1);
        // + 1 day
        expect(updateQuality(items)[0].quality).toEqual(2);
      });
    });

    /*describe("Sulfuras", () => {
      it("quality should always be 80", function () {
        const items = [item4, item5];
        // + 1 day
        let updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(80);
        expect(updatedItems[1].quality).toEqual(80);
        // + 1 day
        updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(80);
        expect(updatedItems[1].quality).toEqual(80);
      });
      it("limit date should always be 0 ", function () {
        const items = [item4, item5];
        // + 1 day
        let updatedItems = updateQuality(items);
        expect(updatedItems[0].daysToSell).toEqual(0);
        expect(updatedItems[1].daysToSell).toEqual(0);
        // + 1 day
        updatedItems = updateQuality(items);
        expect(updatedItems[0].daysToSell).toEqual(0);
        expect(updatedItems[1].daysToSell).toEqual(0);
      });
    });*/

    /*describe("Backstage passes", () => {
      it("quality should drop to zero after limit date", function () {
        const items = [item8];
        // + 6 days
        let updatedItems = updateQuality(items);
        updatedItems = updateQuality(items);
        updatedItems = updateQuality(items);
        updatedItems = updateQuality(items);
        updatedItems = updateQuality(items);
        updatedItems = updateQuality(items);

        expect(updatedItems[0].quality).toEqual(0);
      });
      it("quality should decrease by 3 each day when limit date is <= 5", function () {
        const items = [item8];
        // + 1 day
        let updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(46);
        // + 1 day
        updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(43);
      });
      it("quality should decrease by 2 each day when limit date is > 5 and <= 10", function () {
        const items = [item7];
        // + 1 day
        let updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(47);
        // + 1 day
        updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(45);
      });
      it("quality should decrease by 1 each day when limit date is > 10", function () {
        const items = [item6];
        // + 1 day
        let updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(48);
        // + 1 day
        updatedItems = updateQuality(items);
        expect(updatedItems[0].quality).toEqual(47);
      });
    });*/
  });
});
