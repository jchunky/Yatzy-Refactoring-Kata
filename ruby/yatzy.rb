class Yatzy < Struct.new(:dice)
  def self.method_missing(method_name, *dice)
    new(*dice).send(method_name)
  end

  def initialize(*dice)
    super(dice.flatten)
  end

  def chance
    dice.sum
  end

  def yatzy
    dice.uniq.one? ? 50 : 0
  end

  def ones
    score_number(1)
  end

  def twos
    score_number(2)
  end

  def threes
    score_number(3)
  end

  def fours
    score_number(4)
  end

  def fives
    score_number(5)
  end

  def sixes
    score_number(6)
  end

  def score_pair
    score_tuple(2)
  end

  def three_of_a_kind
    score_tuple(3)
  end

  def four_of_a_kind
    score_tuple(4)
  end

  def two_pair
    pairs.count == 2 ? pairs.sum * 2 : 0
  end

  def smallStraight
    score_straight(1..5)
  end

  def largeStraight
    score_straight(2..6)
  end

  def fullHouse
    dice.tally.values.sort == [2, 3] ? dice.sum : 0
  end

  private

  def score_number(number)
    dice.count(number) * number
  end

  def score_tuple(tuple_size)
    dice.uniq.select { |d| dice.count(d) >= tuple_size }.max.to_i * tuple_size
  end

  def pairs
    dice.uniq.select { |d| dice.count(d) >= 2 }
  end

  def score_straight(range)
    dice.sort == range.to_a ? dice.sum : 0
  end
end
