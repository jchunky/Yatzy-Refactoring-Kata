class Yatzy
  attr_reader :dice

  def self.chance(*dice)
    dice.sum
  end

  def self.yatzy(dice)
    dice.uniq.size == 1 ? 50 : 0
  end

  def self.score_pair(*dice)
    counts = dice.tally
    counts.select { |_, count| count >= 2 }.keys.max.to_i * 2
  end

  def self.three_of_a_kind(*dice)
    counts = dice.tally
    counts.find { |_key, count| count >= 3 }&.first.to_i * 3
  end

  def self.four_of_a_kind(*dice)
    counts = dice.tally
    counts.find { |_key, count| count >= 4 }&.first.to_i * 4
  end

  def self.two_pair(*dice)
    counts = dice.tally
    pairs = counts.select { |_, count| count >= 2 }.keys
    pairs.size == 2 ? pairs.sum * 2 : 0
  end

  def self.smallStraight(*dice)
    dice.sort == [1, 2, 3, 4, 5] ? 15 : 0
  end

  def self.largeStraight(*dice)
    dice.sort == [2, 3, 4, 5, 6] ? 20 : 0
  end

  def self.fullHouse(*dice)
    counts = dice.tally
    pair = counts.find { |_, count| count == 2 }&.first
    triplet = counts.find { |_, count| count == 3 }&.first
    pair && triplet ? (pair * 2) + (triplet * 3) : 0
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
