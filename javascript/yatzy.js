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

  static score_pair(d1, d2, d3, d4, d5) {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;
    let at;
    for (at = 0; at != 6; at++)
      if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
    return 0;
  }

  static two_pair(d1, d2, d3, d4, d5) {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;
    let n = 0;
    let score = 0;
    for (let i = 0; i < 6; i += 1)
      if (counts[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    if (n == 2) return score * 2;
    return 0;
  }

  static four_of_a_kind(_1, _2, d3, d4, d5) {
    let tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1]++;
    tallies[_2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static three_of_a_kind(d1, d2, d3, d4, d5) {
    let t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
  }

  static smallStraight(d1, d2, d3, d4, d5) {
    let tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (
      tallies[0] == 1 &&
      tallies[1] == 1 &&
      tallies[2] == 1 &&
      tallies[3] == 1 &&
      tallies[4] == 1
    )
      return 15;
    return 0;
  }

  static largeStraight(d1, d2, d3, d4, d5) {
    let tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (
      tallies[1] == 1 &&
      tallies[2] == 1 &&
      tallies[3] == 1 &&
      tallies[4] == 1 &&
      tallies[5] == 1
    )
      return 20;
    return 0;
  }

  static fullHouse(d1, d2, d3, d4, d5) {
    let tallies;
    let _2 = false;
    let i;
    let _2_at = 0;
    let _3 = false;
    let _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    return 0;
  }
}
