import _ from "lodash";

export default class Yatzy {
  constructor(...dice) {
    this.dice = dice;
  }

  fours() {
    return (_.countBy(this.dice)[4] || 0) * 4;
  }

  fives() {
    return (_.countBy(this.dice)[5] || 0) * 5;
  }

  sixes() {
    return (_.countBy(this.dice)[6] || 0) * 6;
  }

  static ones(...dice) {
    return (_.countBy(dice)[1] || 0) * 1;
  }

  static twos(...dice) {
    return (_.countBy(dice)[2] || 0) * 2;
  }

  static threes(...dice) {
    return (_.countBy(dice)[3] || 0) * 3;
  }

  static chance(...dice) {
    return _.sum(dice);
  }

  static yatzy(...dice) {
    return _.uniq(dice).length === 1 ? 50 : 0;
  }

  static score_pair(...dice) {
    const pair = _(dice)
      .countBy()
      .pickBy(count => count >= 2)
      .keys()
      .max();
    return (pair || 0) * 2;
  }

  static three_of_a_kind(...dice) {
    const pair = _(dice)
      .countBy()
      .pickBy(count => count >= 3)
      .keys()
      .max();
    return (pair || 0) * 3;
  }

  static four_of_a_kind(...dice) {
    const pair = _(dice)
      .countBy()
      .pickBy(count => count >= 4)
      .keys()
      .max();
    return (pair || 0) * 4;
  }

  static smallStraight(...dice) {
    const match = _(dice)
      .orderBy()
      .isEqual([1, 2, 3, 4, 5]);
    return match ? _.sum(dice) : 0;
  }

  static largeStraight(...dice) {
    const match = _(dice)
      .orderBy()
      .isEqual([2, 3, 4, 5, 6]);
    return match ? _.sum(dice) : 0;
  }

  static two_pair(...dice) {
    const pairs = _(dice)
      .countBy()
      .pickBy(count => count >= 2)
      .keys()
      .map(d => parseInt(d))
      .value();
    return pairs.length === 2 ? _.sum(pairs) * 2 : 0;
  }

  static fullHouse(...dice) {
    const match = _(dice)
      .countBy()
      .values()
      .orderBy()
      .isEqual([2, 3]);
    return match ? _.sum(dice) : 0;
  }
}
