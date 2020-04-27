import _ from "lodash";

export default class Yatzy {
  constructor(...dice) {
    this.dice = dice;
  }

  fours() {
    return Yatzy.count(this.dice, 4) * 4;
  }

  fives() {
    return Yatzy.count(this.dice, 5) * 5;
  }

  sixes() {
    return Yatzy.count(this.dice, 6) * 6;
  }

  static ones(...dice) {
    return this.count(dice, 1) * 1;
  }

  static twos(...dice) {
    return this.count(dice, 2) * 2;
  }

  static threes(...dice) {
    return this.count(dice, 3) * 3;
  }

  static chance(...dice) {
    return _.sum(dice);
  }

  static yatzy(...dice) {
    return _.uniq(dice).length === 1 ? 50 : 0;
  }

  static smallStraight(...dice) {
    return _.isEqual(dice.sort(), [1, 2, 3, 4, 5]) ? _.sum(dice) : 0;
  }

  static largeStraight(...dice) {
    return _.isEqual(dice.sort(), [2, 3, 4, 5, 6]) ? _.sum(dice) : 0;
  }

  static score_pair(...dice) {
    return this.scoreMultiple(dice, 2);
  }

  static three_of_a_kind(...dice) {
    return this.scoreMultiple(dice, 3);
  }

  static four_of_a_kind(...dice) {
    return this.scoreMultiple(dice, 4);
  }

  static scoreMultiple(dice, n) {
    const match = _(dice)
      .uniq()
      .filter(d => this.count(dice, d) >= n)
      .max();
    return (match || 0) * n;
  }

  static two_pair(...dice) {
    const pairs = _(dice)
      .uniq()
      .filter(d => this.count(dice, d) >= 2)
      .value();
    return pairs.length === 2 ? _.sum(pairs) * 2 : 0;
  }

  static fullHouse(...dice) {
    const match = _(dice)
      .uniq()
      .map(d => this.count(dice, d))
      .orderBy()
      .isEqual([2, 3]);
    return match ? _.sum(dice) : 0;
  }

  static count(dice, n) {
    return _.countBy(dice)[n] || 0;
  }
}
