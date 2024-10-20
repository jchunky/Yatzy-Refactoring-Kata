class Yatzy
  attr_reader :dice

  def self.two_pair(*dice)
    pairs = dice.uniq.select { dice.count(_1) >= 2 }
    pairs.size == 2 ? pairs.sum * 2 : 0
  end

  def self.chance(*dice)              = dice.sum
  def self.yatzy(dice)                = dice.uniq.size == 1 ? 50 : 0
  def self.score_pair(*dice)          = find_n_of_a_kind(dice, n: 2) * 2
  def self.three_of_a_kind(*dice)     = find_n_of_a_kind(dice, n: 3) * 3
  def self.four_of_a_kind(*dice)      = find_n_of_a_kind(dice, n: 4) * 4
  def self.find_n_of_a_kind(dice, n:) = dice.select { dice.count(_1) >= n }.max.to_i
  def self.smallStraight(*dice)       = dice.sort == (1..5).to_a ? dice.sum : 0
  def self.largeStraight(*dice)       = dice.sort == (2..6).to_a ? dice.sum : 0
  def self.fullHouse(*dice)           = dice.tally.values.sort == [2, 3] ? dice.sum : 0
  def self.ones(*dice)                = dice.count(1) * 1
  def self.twos(*dice)                = dice.count(2) * 2
  def self.threes(*dice)              = dice.count(3) * 3

  def initialize(*dice)
    @dice = dice
  end

  def fours = dice.count(4) * 4
  def fives = dice.count(5) * 5
  def sixes = dice.count(6) * 6
end
