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

  static score_pair(...dice) {
    const pairs = _.filter(_.uniq(dice), (d) => this.count(dice, d) >= 2);
    return pairs.length >= 1 ? _.max(pairs) * 2 : 0;
  }

  static three_of_a_kind(...dice) {
    const pairs = _.filter(_.uniq(dice), (d) => this.count(dice, d) >= 3);
    return pairs.length >= 1 ? _.max(pairs) * 3 : 0;
  }

  static four_of_a_kind(...dice) {
    const pairs = _.filter(_.uniq(dice), (d) => this.count(dice, d) >= 4);
    return pairs.length >= 1 ? _.max(pairs) * 4 : 0;
  }

  static two_pair(...dice) {
    const pairs = _.filter(_.uniq(dice), (d) => this.count(dice, d) >= 2);
    return pairs.length === 2 ? _.sum(pairs) * 2 : 0;
  }

  static smallStraight(...dice) {
    return _.isEqual(_.sortBy(dice), [1, 2, 3, 4, 5]) ? _.sum(dice) : 0;
  }

  static largeStraight(...dice) {
    return _.isEqual(_.sortBy(dice), [2, 3, 4, 5, 6]) ? _.sum(dice) : 0;
  }

  static fullHouse(...dice) {
    return _.isEqual(
      _.sortBy(_.map(_.uniq(dice), (d) => this.count(dice, d))),
      [2, 3]
    )
      ? _.sum(dice)
      : 0;
  }

  static count(dice, value) {
    return _.filter(dice, (d) => d === value).length;
  }
}
