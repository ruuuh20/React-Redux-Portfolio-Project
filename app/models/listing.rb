class Listing < ApplicationRecord
  has_many :comments
  has_many :images
  belongs_to :realtor
  accepts_nested_attributes_for :comments, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :images, reject_if: :all_blank, allow_destroy: true

  def listing_price_formatted
    number = self.listing_price.to_s.split("").unshift("$").reverse.each_slice(3).to_a
    i = 1
    price = []
    until i == number.length
      price.push(number[number.length - i].reverse)
      price.push(",")
      i += 1
    end
    price.push(number[0].reverse)
    price.join("")
  end

  def all_image_sources
    all_images = []
    all_images.push(self.main_img)
    self.images.each do |image|
      all_images.push(image.source)
    end
    all_images
  end


end
