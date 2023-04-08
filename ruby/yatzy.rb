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
    dice_with_count(dice, 2).max.to_i * 2
  end

  def self.three_of_a_kind(*dice)
    dice_with_count(dice, 3).max.to_i * 3
  end

  def self.four_of_a_kind(*dice)
    dice_with_count(dice, 4).max.to_i * 4
  end

  def self.two_pair(*dice)
    pairs = dice_with_count(dice, 2)
    pairs.count == 2 ? pairs.sum * 2 : 0
  end

  def self.smallStraight(*dice)
    dice.sort == (1..5).to_a ? dice.sum : 0
  end

  def self.largeStraight(*dice)
    dice.sort == (2..6).to_a ? dice.sum : 0
  end

  def self.fullHouse(*dice)
    counts = count_of_dice_values(dice)
    counts.include?(2) && counts.include?(3) ? dice.sum : 0
  end

  def self.count_of_dice_values(dice)
    (1..6).to_a.map { |d| dice.count(d) }
  end

  def self.dice_with_count(dice, count = 1)
    (1..6).to_a.select { |d| dice.count(d) >= count }
  end
end
