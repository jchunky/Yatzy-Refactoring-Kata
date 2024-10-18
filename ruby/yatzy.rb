class Yatzy
  attr_reader :dice

  def self.chance(*dice)
    dice.sum
  end

  def self.yatzy(dice)
    dice.uniq.size == 1 ? 50 : 0
  end

  def self.score_pair(*dice)
    find_n_of_a_kind(dice, n: 2) * 2
  end

  def self.three_of_a_kind(*dice)
    find_n_of_a_kind(dice, n: 3) * 3
  end

  def self.four_of_a_kind(*dice)
    find_n_of_a_kind(dice, n: 4) * 4
  end

  def self.find_n_of_a_kind(dice, n:)
    dice.select { dice.count(_1) >= n }.max.to_i
  end

  def self.two_pair(*dice)
    pairs = dice.uniq.select { dice.count(_1) >= 2 }
    pairs.size == 2 ? pairs.sum * 2 : 0
  end

  def self.smallStraight(*dice)
    dice.sort == (1..5).to_a ? dice.sum : 0
  end

  def self.largeStraight(*dice)
    dice.sort == (2..6).to_a ? dice.sum : 0
  end

  def self.fullHouse(*dice)
    dice.tally.values.sort == [2, 3] ? dice.sum : 0
  end

  def self.ones(*dice)
    dice.count(1) * 1
  end

  def self.twos(*dice)
    dice.count(2) * 2
  end

  def self.threes(*dice)
    dice.count(3) * 3
  end

  def initialize(*dice)
    @dice = dice
  end

  def fours
    dice.count(4) * 4
  end

  def fives
    dice.count(5) * 5
  end

  def sixes
    dice.count(6) * 6
  end
end
