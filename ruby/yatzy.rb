class Yatzy
  attr_reader :dice

  def self.chance(*dice)
    dice.sum
  end

  def self.yatzy(dice)
    dice.uniq.one? ? 50 : 0
  end

  def self.two_pair(*dice)
    pairs = find_x_of_a_kind(dice, x: 2)
    pairs.count == 2 ? pairs.sum * 2 : 0
  end

  def self.score_pair(*dice)
    score_x_of_kind(dice, x: 2)
  end

  def self.three_of_a_kind(*dice)
    score_x_of_kind(dice, x: 3)
  end

  def self.four_of_a_kind(*dice)
    score_x_of_kind(dice, x: 4)
  end

  def self.score_x_of_kind(dice, x:)
    find_x_of_a_kind(dice, x:).max.to_i * x
  end

  def self.find_x_of_a_kind(dice, x:)
    dice.tally.select { |_, count| count >= x }.keys
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
    number_score(dice, 1)
  end

  def self.twos(*dice)
    number_score(dice, 2)
  end

  def self.threes(*dice)
    number_score(dice, 3)
  end

  def self.number_score(dice, number)
    dice.count(number) * number
  end

  def initialize(*dice)
    @dice = dice
  end

  def fours
    self.class.number_score(dice, 4)
  end

  def fives
    self.class.number_score(dice, 5)
  end

  def sixes
    self.class.number_score(dice, 6)
  end
end
