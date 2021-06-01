class Yatzy < Struct.new(:dice)
  def initialize(*dice)
    super(dice)
  end

  def self.chance(*dice)
    dice.sum
  end

  def self.yatzy(dice)
    dice.uniq.one? ? 50 : 0
  end

  def self.ones(*dice)
    score_singles(dice, 1)
  end

  def self.twos(*dice)
    score_singles(dice, 2)
  end

  def self.threes(*dice)
    score_singles(dice, 3)
  end

  def fours
    self.class.score_singles(dice, 4)
  end

  def fives
    self.class.score_singles(dice, 5)
  end

  def sixes
    self.class.score_singles(dice, 6)
  end

  def self.score_pair(*dice)
    score_tuple(dice, 2)
  end

  def self.three_of_a_kind(*dice)
    score_tuple(dice, 3)
  end

  def self.four_of_a_kind(*dice)
    score_tuple(dice, 4)
  end

  def self.two_pair(*dice)
    pairs = tuples(dice, 2)
    pairs.count == 2 ? pairs.sum * 2 : 0
  end

  def self.smallStraight(*dice)
    score_straight(dice, 1..5)
  end

  def self.largeStraight(*dice)
    score_straight(dice, 2..6)
  end

  def self.fullHouse(*dice)
    dice.uniq.map { |d| dice.count(d) }.sort == [2, 3] ? dice.sum : 0
  end

  private

  def self.score_singles(dice, die)
    dice.count(die) * die
  end

  def self.score_tuple(dice, tuple_size)
    tuples(dice, tuple_size).max.to_i * tuple_size
  end

  def self.score_straight(dice, range)
    dice.sort == range.to_a ? dice.sum : 0
  end

  def self.tuples(dice, tuple_size)
    dice.uniq.select { |d| dice.count(d) >= tuple_size }
  end
end
