json.array!(@shops) do |shop|
  json.extract! shop, :id, :name, :min_cph, :max_cph, :avg_dpc, :hours
  json.url shop_url(shop, format: :json)
end
