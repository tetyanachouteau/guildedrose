const updateDaysToSell = ({ daysToSell, name, quality }) => {
  return daysToSell - 1;
};

const updateQuality = ({ daysToSell, name, quality }) => {
  let updatedQuality;

  if (name === "Aged Brie") {
    updatedQuality = quality + 1;
  } else if (daysToSell > 0) {
    // quality decrease
    updatedQuality = quality - 1;
  } else {
    // once the limit date is past, quality decreases twice as fast
    updatedQuality = quality - 2;
  }
  // quality should never be under 0
  if (updatedQuality < 0) newQuality = 0;

  return updatedQuality;
};

module.exports = {
  updateQuality: (items) => {
    return items.map((item) => ({
      ...item,
      daysToSell: updateDaysToSell(item),
      quality: updateQuality(item),
    }));
  },
};
