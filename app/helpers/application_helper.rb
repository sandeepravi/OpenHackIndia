module ApplicationHelper

  def random_bg
    BACKGROUNDS[rand(BACKGROUNDS.count)]
  end
end
