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
