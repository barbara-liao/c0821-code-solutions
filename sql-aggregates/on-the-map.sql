select "countries"."name" as "country",
       count("cities".*) as "numberOfCities"
  from "cities"
  join "countries" using ("countryId")
group by "countries"."countryId";
