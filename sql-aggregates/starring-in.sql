select "categories"."name" as "category",
       count("categories"."name") as "numberOfMovies"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "a"."actorId" = 178
  group by "categories"."name";
