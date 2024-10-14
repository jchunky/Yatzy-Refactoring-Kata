require_relative "yatzy"
require "test/unit"

class YatzyTest < Test::Unit::TestCase
  def test_chance_scores_sum_of_all_dice
    expected = 15
    actual = Yatzy.chance(2, 3, 4, 5, 1)
    assert expected == actual
    assert Yatzy.chance(3, 3, 4, 5, 1) == 16
  end

  def test_yatzy_scores_50
    expected = 50
    actual = Yatzy.yatzy([4, 4, 4, 4, 4])
    assert expected == actual
    assert Yatzy.yatzy([6, 6, 6, 6, 6]) == 50
    assert Yatzy.yatzy([6, 6, 6, 6, 3]) == 0
  end

  def test_1s
    assert Yatzy.ones(1, 2, 3, 4, 5) == 1
    assert Yatzy.ones(1, 2, 1, 4, 5) == 2
    assert Yatzy.ones(6, 2, 2, 4, 5) == 0
    assert Yatzy.ones(1, 2, 1, 1, 1) == 4
  end

  def test_2s
    assert Yatzy.twos(1, 2, 3, 2, 6) == 4
    assert Yatzy.twos(2, 2, 2, 2, 2) == 10
  end

  def test_threes
    assert Yatzy.threes(1, 2, 3, 2, 3) == 6
    assert Yatzy.threes(2, 3, 3, 3, 3) == 12
  end

  def test_fours_test
    assert Yatzy.new(4, 4, 4, 5, 5).fours == 12
    assert Yatzy.new(4, 4, 5, 5, 5).fours == 8
    assert Yatzy.new(4, 5, 5, 5, 5).fours == 4
  end

  def test_fives
    assert Yatzy.new(4, 4, 4, 5, 5).fives == 10
    assert Yatzy.new(4, 4, 5, 5, 5).fives == 15
    assert Yatzy.new(4, 5, 5, 5, 5).fives == 20
  end

  def test_sixes_test
    assert Yatzy.new(4, 4, 4, 5, 5).sixes == 0
    assert Yatzy.new(4, 4, 6, 5, 5).sixes == 6
    assert Yatzy.new(6, 5, 6, 6, 5).sixes == 18
  end

  def test_one_pair
    assert Yatzy.score_pair(3, 4, 3, 5, 6) == 6
    assert Yatzy.score_pair(5, 3, 3, 3, 5) == 10
    assert Yatzy.score_pair(5, 3, 6, 6, 5) == 12
  end

  def test_two_Pair
    assert_equal 16, Yatzy.two_pair(3, 3, 5, 4, 5)
    assert_equal 16, Yatzy.two_pair(3, 3, 5, 5, 5)
  end

  def test_three_of_a_kind
    assert Yatzy.three_of_a_kind(3, 3, 3, 4, 5) == 9
    assert Yatzy.three_of_a_kind(5, 3, 5, 4, 5) == 15
    assert Yatzy.three_of_a_kind(3, 3, 3, 3, 5) == 9
  end

  def test_four_of_a_knd
    assert Yatzy.four_of_a_kind(3, 3, 3, 3, 5) == 12
    assert Yatzy.four_of_a_kind(5, 5, 5, 4, 5) == 20
    assert Yatzy.three_of_a_kind(3, 3, 3, 3, 3) == 9
    assert Yatzy.four_of_a_kind(3, 3, 3, 3, 3) == 12
  end

  def test_smallStraight
    assert Yatzy.smallStraight(1, 2, 3, 4, 5) == 15
    assert Yatzy.smallStraight(2, 3, 4, 5, 1) == 15
    assert Yatzy.smallStraight(1, 2, 2, 4, 5) == 0
  end

  def test_largeStraight
    assert Yatzy.largeStraight(6, 2, 3, 4, 5) == 20
    assert Yatzy.largeStraight(2, 3, 4, 5, 6) == 20
    assert Yatzy.largeStraight(1, 2, 2, 4, 5) == 0
  end

  def test_fullHouse
    assert Yatzy.fullHouse(6, 2, 2, 2, 6) == 18
    assert Yatzy.fullHouse(2, 3, 4, 5, 6) == 0
  end
end
