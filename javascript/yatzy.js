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
    return _.chain(dice)
      .uniq()
      .size()
      .isEqual(1)
      .toInteger()
      .multiply(50)
      .value();
  }

  static smallStraight(...dice) {
    return _.chain(dice)
      .sortBy()
      .isEqual([1, 2, 3, 4, 5])
      .toInteger()
      .multiply(_.sum(dice))
      .value();
  }

  static largeStraight(...dice) {
    return _.chain(dice)
      .sortBy()
      .isEqual([2, 3, 4, 5, 6])
      .toInteger()
      .multiply(_.sum(dice))
      .value();
  }

  static score_pair(...dice) {
    return _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 2)
      .max()
      .toInteger()
      .multiply(2)
      .value();
  }

  static three_of_a_kind(...dice) {
    return _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 3)
      .max()
      .toInteger()
      .multiply(3)
      .value();
  }

  static four_of_a_kind(...dice) {
    return _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 4)
      .max()
      .toInteger()
      .multiply(4)
      .value();
  }

  static two_pair(...dice) {
    const pairs = _.chain(dice)
      .uniq()
      .filter((d) => this.count(dice, d) >= 2)
      .value();
    return pairs.length === 2 ? _.sum(pairs) * 2 : 0;
  }

  static fullHouse(...dice) {
    return _.chain(dice)
      .uniq()
      .map((d) => this.count(dice, d))
      .sortBy()
      .isEqual([2, 3])
      .toInteger()
      .multiply(_.sum(dice))
      .value();
  }

  static count(dice, value) {
    return _.filter(dice, (d) => d === value).length;
  }
}
