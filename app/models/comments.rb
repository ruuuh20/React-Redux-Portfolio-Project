class Comments < ApplicationRecord
  belongs_to :listing

  def date
    self.created_at.strftime("%a, %b %e %Y")
  end

end
