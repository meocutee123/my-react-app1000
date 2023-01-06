type Author = {
  id: number,
  name: string,
  avatar: string
}

type Feed = {
  id: number,
  slug: string,
  banner: string,
  created: Date,
  introduction: string
  
  author: Author,
}