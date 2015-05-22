class Shop < ActiveRecord::Base
  attr_accessor :daily_donuts

  def donuts_per_hour(hour)
    @daily_donuts = [] unless daily_donuts
    @daily_donuts[hour] = avg_dpc * (rand(max_cph - min_cph) + min_cph)
  end

  def total_daily_donuts
    daily_donuts.sum
  end
end
