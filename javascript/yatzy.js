import _ from "lodash";

export default class Yatzy {
  constructor(...dice) {
    this.dice = dice;
  }

  fours() {
    return Yatzy.scoreSingles(this.dice, 4);
  }

  fives() {
    return Yatzy.scoreSingles(this.dice, 5);
  }

  sixes() {
    return Yatzy.scoreSingles(this.dice, 6);
  }

  static ones(...dice) {
    return this.scoreSingles(dice, 1);
  }

  static twos(...dice) {
    return this.scoreSingles(dice, 2);
  }

  static threes(...dice) {
    return this.scoreSingles(dice, 3);
  }

  static scoreSingles(dice, n) {
    return (_.countBy(dice)[n] || 0) * n;
  }

  static chance(...dice) {
    return _.sum(dice);
  }

  static yatzy(...dice) {
    return _.uniq(dice).length === 1 ? 50 : 0;
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
      .countBy()
      .pickBy(count => count >= n)
      .keys()
      .max();
    return (match || 0) * n;
  }

  static smallStraight(...dice) {
    return this.scoreStraight(dice, [1, 2, 3, 4, 5]);
  }

  static largeStraight(...dice) {
    return this.scoreStraight(dice, [2, 3, 4, 5, 6]);
  }

  static scoreStraight(dice, straight) {
    const match = _(dice)
      .orderBy()
      .isEqual(straight);
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
