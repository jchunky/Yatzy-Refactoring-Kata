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

  static chance(...dice) {
    return _.sum(dice);
  }

  static yatzy(...dice) {
    return _.uniq(dice).length === 1 ? 50 : 0;
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

  static score_pair(...dice) {
    return (
      (_.max(_.keys(_.pickBy(_.countBy(dice), count => count >= 2))) || 0) * 2
    );
  }

  static two_pair(...dice) {
    const pairs = _.map(
      _.keys(_.pickBy(_.countBy(dice), count => count >= 2)),
      d => parseInt(d, 10)
    );
    return pairs.length === 2 ? _.sum(pairs) * 2 : 0;
  }

  static four_of_a_kind(...dice) {
    return (
      (_.max(_.keys(_.pickBy(_.countBy(dice), count => count >= 4))) || 0) * 4
    );
  }

  static three_of_a_kind(...dice) {
    return (
      (_.max(_.keys(_.pickBy(_.countBy(dice), count => count >= 3))) || 0) * 3
    );
  }

  static smallStraight(...dice) {
    return _(dice)
      .orderBy()
      .isEqual([1, 2, 3, 4, 5])
      ? _.sum(dice)
      : 0;
  }

  static largeStraight(...dice) {
    return _(dice)
      .orderBy()
      .isEqual([2, 3, 4, 5, 6])
      ? _.sum(dice)
      : 0;
  }

  static fullHouse(...dice) {
    return _(dice)
      .countBy()
      .values()
      .orderBy()
      .isEqual([2, 3])
      ? _.sum(dice)
      : 0;
  }
}
