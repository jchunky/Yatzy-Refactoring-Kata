class Yatzy
  attr_reader :dice

  class << self
    def two_pair(*dice)
      pairs = dice.uniq.select { dice.count(_1) >= 2 }
      pairs.size == 2 ? pairs.sum * 2 : 0
    end

    def chance(*dice) = dice.sum
    def yatzy(dice) = dice.uniq.size == 1 ? 50 : 0
    def score_pair(*dice) = find_n_of_a_kind(dice, n: 2) * 2
    def three_of_a_kind(*dice) = find_n_of_a_kind(dice, n: 3) * 3
    def four_of_a_kind(*dice) = find_n_of_a_kind(dice, n: 4) * 4
    def find_n_of_a_kind(dice, n:) = dice.select { dice.count(_1) >= n }.max.to_i
    def smallStraight(*dice) = dice.sort == (1..5).to_a ? dice.sum : 0
    def largeStraight(*dice) = dice.sort == (2..6).to_a ? dice.sum : 0
    def fullHouse(*dice) = dice.tally.values.sort == [2, 3] ? dice.sum : 0
    def ones(*dice) = dice.count(1) * 1
    def twos(*dice) = dice.count(2) * 2
    def threes(*dice) = dice.count(3) * 3
  end

  def initialize(*dice)
    @dice = dice
  end

  def fours = dice.count(4) * 4
  def fives = dice.count(5) * 5
  def sixes = dice.count(6) * 6
end
