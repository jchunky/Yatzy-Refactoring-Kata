class Yatzy
  attr_reader :dice

  def initialize(*dice)
    @dice = dice
  end

  def self.chance(*dice)
    dice.sum
  end

  def self.yatzy(dice)
    dice.uniq.one? ? 50 : 0
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

  def fours
    dice.count(4) * 4
  end

  def fives
    dice.count(5) * 5
  end

  def sixes
    dice.count(6) * 6
  end

  def self.score_pair(*dice)
    match = dice.uniq.select { |d| dice.count(d) >= 2 }.max
    match ? match * 2 : 0
  end

  def self.three_of_a_kind(*dice)
    match = dice.uniq.select { |d| dice.count(d) >= 3 }.max
    match ? match * 3 : 0
  end

  def self.four_of_a_kind(*dice)
    match = dice.uniq.select { |d| dice.count(d) >= 4 }.max
    match ? match * 4 : 0
  end

  def self.two_pair(*dice)
    pairs = dice.uniq.select { |d| dice.count(d) >= 2 }
    pairs.size == 2 ? pairs.sum * 2 : 0
  end

  def self.smallStraight(*dice)
    dice.sort == (1..5).to_a ? dice.sum : 0
  end

  def self.largeStraight(*dice)
    dice.sort == (2..6).to_a ? dice.sum : 0
  end

  def self.fullHouse(*dice)
    dice.uniq.map { |d| dice.count(d) }.sort == [2, 3] ? dice.sum : 0
  end
end
