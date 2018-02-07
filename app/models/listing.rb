class Listing < ApplicationRecord
  has_many :comments
  has_many :images
  accepts_nested_attributes_for :comments, reject_if: :all_blank, allow_destroy: true

  # define scope for featured_listings

end
