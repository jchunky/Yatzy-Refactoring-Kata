class Yatzy
  attr_reader :dice

  def self.method_missing(method, *) = new(*).send(method)

  def initialize(*dice) = @dice = dice.flatten

  def chance = dice.sum
  def yatzy = dice.uniq.one? ? 50 : 0
  def ones = dice.count(1) * 1
  def twos = dice.count(2) * 2
  def threes = dice.count(3) * 3
  def fours = dice.count(4) * 4
  def fives = dice.count(5) * 5
  def sixes = dice.count(6) * 6
  def score_pair = find_n_of_a_kind(n: 2) * 2
  def three_of_a_kind = find_n_of_a_kind(n: 3) * 3
  def four_of_a_kind = find_n_of_a_kind(n: 4) * 4
  def two_pair = pairs.count == 2 ? pairs.sum * 2 : 0
  def small_straight = dice.sort == (1..5).to_a ? dice.sum : 0
  def large_straight = dice.sort == (2..6).to_a ? dice.sum : 0
  def full_house = dice.tally.values.sort == [2, 3] ? dice.sum : 0

  private

  def find_n_of_a_kind(n:) = dice.select { dice.count(_1) >= n }.max.to_i
  def pairs = dice.uniq.select { dice.count(_1) >= 2 }
end
