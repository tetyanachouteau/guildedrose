const updateDaysToSell = ({ daysToSell, name, quality }) => {
  //Sulfite...Days not de...
  if (name==="Sulfuras, Hand of Ragnaros")
    return 0;
  else 
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

  // quality should never be over 50
  if (updatedQuality > 50) updatedQuality = 50;

  // quality should never be over 80
  if (name==="Sulfuras, Hand of Ragnaros") updatedQuality = 80;

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
