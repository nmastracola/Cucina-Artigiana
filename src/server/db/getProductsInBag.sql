select * from bag
join products on bag.productId = products.id
where userId = $1
order by bag.id;