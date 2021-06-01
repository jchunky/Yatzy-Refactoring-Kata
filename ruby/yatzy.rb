class Yatzy < Struct.new(:dice)
  def self.method_missing(method_name, *dice)
    new(*dice).send(method_name)
  end

  def self.yatzy(dice)
    new(*dice).yatzy
  end

  def initialize(*dice)
    super(dice)
  end

  def chance
    dice.sum
  end

  def yatzy
    dice.uniq.one? ? 50 : 0
  end

  def ones
    score_die(1)
  end

  def twos
    score_die(2)
  end

  def threes
    score_die(3)
  end

  def fours
    score_die(4)
  end

  def fives
    score_die(5)
  end

  def sixes
    score_die(6)
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
    pairs = tuples(2)
    pairs.count == 2 ? pairs.sum * 2 : 0
  end

  def smallStraight
    score_straight(1..5)
  end

  def largeStraight
    score_straight(2..6)
  end

  def fullHouse
    dice.uniq.map { |d| dice.count(d) }.sort == [2, 3] ? dice.sum : 0
  end

  private

  def score_die(die)
    dice.count(die) * die
  end

  def score_tuple(tuple_size)
    tuples(tuple_size).max.to_i * tuple_size
  end

  def score_straight(range)
    dice.sort == range.to_a ? dice.sum : 0
  end

  def tuples(tuple_size)
    dice.uniq.select { |d| dice.count(d) >= tuple_size }
  end
end
