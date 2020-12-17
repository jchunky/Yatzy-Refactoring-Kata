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
    const match = _.chain(dice).sortBy().isEqual([1, 2, 3, 4, 5]).value();
    return match ? _.sum(dice) : 0;
  }

  static largeStraight(...dice) {
    const match = _.chain(dice).sortBy().isEqual([2, 3, 4, 5, 6]).value();
    return match ? _.sum(dice) : 0;
  }

  static score_pair(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 2)
      .max()
      .value();
    return (match || 0) * 2;
  }

  static three_of_a_kind(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 3)
      .max()
      .value();
    return (match || 0) * 3;
  }

  static four_of_a_kind(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 4)
      .max()
      .value();
    return (match || 0) * 4;
  }

  static two_pair(...dice) {
    const pairs = _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 2)
      .value();
    return pairs.length === 2 ? _.sum(pairs) * 2 : 0;
  }

  static fullHouse(...dice) {
    const match = _.chain(dice)
      .uniq()
      .map((d) => this.count(dice, d))
      .sortBy()
      .isEqual([2, 3])
      .value();
    return match ? _.sum(dice) : 0;
  }

  static count(dice, value) {
    return _.filter(dice, (d) => d === value).length;
  }
}
