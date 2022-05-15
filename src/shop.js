module.exports = {
  updateQuality: (items) => {
    return items.map((item) => {
      let updatedItem = item;

      // limit date
      updatedItem.daysToSell = item.daysToSell - 1;

      // specific case : Aged Brie
      if (item.name === "Aged Brie") {
        updatedItem.quality = item.quality + 1;
      } else if (item.daysToSell > 0) {
        // quality decrease
        updatedItem.quality = item.quality - 1;
      } else {
        // once the limit date is past, quality decreases twice as fast
        updatedItem.quality = item.quality - 2;
      }

      // quality should never be under 0
      if (updatedItem.quality < 0) updatedItem.quality = 0;

      return updatedItem;
    });
  },
};
