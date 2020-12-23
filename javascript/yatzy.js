import _ from "lodash";

export default class Yatzy {
  constructor(...dice) {
    this.dice = dice;
  }

  fours() {
    return Yatzy._count(this.dice, 4) * 4;
  }

  fives() {
    return Yatzy._count(this.dice, 5) * 5;
  }

  sixes() {
    return Yatzy._count(this.dice, 6) * 6;
  }

  static ones(...dice) {
    return this._count(dice, 1) * 1;
  }

  static twos(...dice) {
    return this._count(dice, 2) * 2;
  }

  static threes(...dice) {
    return this._count(dice, 3) * 3;
  }

  static chance(...dice) {
    return _.sum(dice);
  }

  static yatzy(...dice) {
    return _.uniq(dice).length === 1 ? 50 : 0;
  }

  static score_pair(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this._count(dice, d) >= 2)
      .maxBy()
      .value();
    return match ? match * 2 : 0;
  }

  static three_of_a_kind(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this._count(dice, d) >= 3)
      .maxBy()
      .value();
    return match ? match * 3 : 0;
  }

  static four_of_a_kind(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this._count(dice, d) >= 4)
      .maxBy()
      .value();
    return match ? match * 4 : 0;
  }

  static two_pair(...dice) {
    const match = _.chain(dice)
      .uniq()
      .filter((d) => this._count(dice, d) >= 2)
      .value();
    return match.length === 2 ? _.sum(match) * 2 : 0;
  }

  static smallStraight(...dice) {
    const match = _.chain(dice).sortBy().isEqual([1, 2, 3, 4, 5]).value();
    return match ? _.sum(dice) : 0;
  }

  static largeStraight(...dice) {
    const match = _.chain(dice).sortBy().isEqual([2, 3, 4, 5, 6]).value();
    return match ? _.sum(dice) : 0;
  }

  static fullHouse(...dice) {
    const match = _.chain(dice)
      .uniq()
      .map((d) => this._count(dice, d))
      .sortBy()
      .isEqual([2, 3])
      .value();
    return match ? _.sum(dice) : 0;
  }

  static _count(array, element) {
    return _.filter(array, (e) => e === element).length;
  }
}
