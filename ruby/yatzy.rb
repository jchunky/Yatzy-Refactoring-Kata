class Yatzy
  attr_reader :dice

  def self.two_pair(*dice)
    pairs = dice.uniq.select { dice.count(_1) >= 2 }
    pairs.count == 2 ? pairs.sum * 2 : 0
  end

  def self.chance(*dice)          = dice.sum
  def self.yatzy(dice)            = dice.uniq.one? ? 50 : 0
  def self.ones(*dice)            = dice.count(1) * 1
  def self.twos(*dice)            = dice.count(2) * 2
  def self.threes(*dice)          = dice.count(3) * 3
  def self.score_pair(*dice)      = dice.select { dice.count(_1) >= 2 }.max.to_i * 2
  def self.three_of_a_kind(*dice) = dice.select { dice.count(_1) >= 3 }.max.to_i * 3
  def self.four_of_a_kind(*dice)  = dice.select { dice.count(_1) >= 4 }.max.to_i * 4
  def self.smallStraight(*dice)   = dice.sort == (1..5).to_a ? dice.sum : 0
  def self.largeStraight(*dice)   = dice.sort == (2..6).to_a ? dice.sum : 0
  def self.fullHouse(*dice)       = dice.tally.values.sort == [2, 3] ? dice.sum : 0

  def initialize(*dice)           = @dice = dice

  def fours                       = dice.count(4) * 4
  def fives                       = dice.count(5) * 5
  def sixes                       = dice.count(6) * 6
end
