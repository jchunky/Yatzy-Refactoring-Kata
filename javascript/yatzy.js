import _ from "lodash";

export default class Yatzy {
  constructor(...dice) {
    this.dice = dice;
  }

  fours() {
    return this.dice.filter(d => d === 4).length * 4;
  }

  fives() {
    return this.dice.filter(d => d === 5).length * 5;
  }

  sixes() {
    return this.dice.filter(d => d === 6).length * 6;
  }

  static chance(...dice) {
    return _.sum(dice);
  }

  static yatzy(...dice) {
    return _.uniq(dice).length === 1 ? 50 : 0;
  }

  static ones(...dice) {
    return dice.filter(d => d === 1).length * 1;
  }

  static twos(...dice) {
    return dice.filter(d => d === 2).length * 2;
  }

  static threes(...dice) {
    return dice.filter(d => d === 3).length * 3;
  }

  static score_pair(...dice) {
    const pair = _.max(
      _.uniq(dice).filter(d1 => {
        return (
          dice.filter(d2 => {
            return d1 === d2;
          }).length >= 2
        );
      })
    );
    return pair ? pair * 2 : 0;
  }

  static two_pair(...dice) {
    const pairs = _.uniq(dice).filter(d1 => {
      return (
        dice.filter(d2 => {
          return d1 === d2;
        }).length >= 2
      );
    });
    if (pairs.length === 2) {
      return _.sum(pairs) * 2;
    }
    return 0;
  }

  static four_of_a_kind(...dice) {
    const pair = _.max(
      _.uniq(dice).filter(d1 => {
        return (
          dice.filter(d2 => {
            return d1 === d2;
          }).length >= 4
        );
      })
    );
    return pair ? pair * 4 : 0;
  }

  static three_of_a_kind(...dice) {
    const pair = _.max(
      _.uniq(dice).filter(d1 => {
        return (
          dice.filter(d2 => {
            return d1 === d2;
          }).length >= 3
        );
      })
    );
    return pair ? pair * 3 : 0;
  }

  static smallStraight(...dice) {
    return _.isEqual(_.orderBy(dice), [1, 2, 3, 4, 5]) ? _.sum(dice) : 0;
  }

  static largeStraight(...dice) {
    return _.isEqual(_.orderBy(dice), [2, 3, 4, 5, 6]) ? _.sum(dice) : 0;
  }

  static fullHouse(...dice) {
    return _.isEqual(_.orderBy(_.values(_.countBy(dice))), [2, 3])
      ? _.sum(dice)
      : 0;
  }
}
