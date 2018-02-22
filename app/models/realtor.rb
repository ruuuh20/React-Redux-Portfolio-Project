class Realtor < ApplicationRecord
  has_secure_password
  has_many :listings
end
