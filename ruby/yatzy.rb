class Yatzy
  attr_reader :dice

  def self.chance(*dice)
    dice.sum
  end

  def self.yatzy(dice)
    dice.uniq.one? ? 50 : 0
  end

  def self.ones(*dice)
    count_and_multiply(dice, 1)
  end

  def self.twos(*dice)
    count_and_multiply(dice, 2)
  end

  def self.threes(*dice)
    count_and_multiply(dice, 3)
  end

  def self.score_pair(*dice)
    find_of_a_kind(dice, 2) * 2
  end

  def self.three_of_a_kind(*dice)
    find_of_a_kind(dice, 3) * 3
  end

  def self.four_of_a_kind(*dice)
    find_of_a_kind(dice, 4) * 4
  end

  def self.two_pair(*dice)
    pairs = dice.uniq.select { |d| dice.count(d) >= 2 }
    pairs.count == 2 ? pairs.sum * 2 : 0
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

  def self.count_and_multiply(dice, number)
    dice.count(number) * number
  end

  def self.find_of_a_kind(dice, count)
    dice.uniq.select { |d| dice.count(d) >= count }.max.to_i
  end

  def initialize(*dice)
    @dice = dice
  end

  def fours
    self.class.count_and_multiply(dice, 4)
  end

  def fives
    self.class.count_and_multiply(dice, 5)
  end

  def sixes
    self.class.count_and_multiply(dice, 6)
  end
end
