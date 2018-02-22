class RealtorSerializer < ActiveModel::Serializer
  attributes :id, :website, :logo, :name, :email, :phone_number, :address
end
