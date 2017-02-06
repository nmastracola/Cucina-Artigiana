insert INTO bag(userId)
  values($1)
  returning id;