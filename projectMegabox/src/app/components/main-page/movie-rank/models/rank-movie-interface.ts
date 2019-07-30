export interface RankMovie {
  movie_id: number,
  age: number,
  title: string,
  booking_rate: string,
  release_date: string,
  img_url: string,
  selected: boolean
}

export interface RankStar {
  id: number,
  rankStar: string,
  starContent: string
}