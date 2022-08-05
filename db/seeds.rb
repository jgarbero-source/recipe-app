# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating users..."
User.create(username: "Kermit", password: "froggy", bio: "I'm green", avatar:"https://www.looper.com/img/gallery/kermit-the-frogs-history-explained/l-intro-1601411424.jpg")
User.create(username: "Darth Vader", password: "darksideoftheforce", bio: "I'm ur daddy", avatar: "https://media.distractify.com/brand-img/p6YqWm4az/0x0/will-darth-vader-be-in-the-obi-wan-series-1649173325239.jpeg" )
User.create(username: "Cookie Monster", password: "cookie", bio: "COOOOOOOOOKIE", avatar: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F11%2Fthe-joy-of-cookies-cookie-monster-blog0817.jpg&q=60" )
User.create(username: "Captain Jack Sparrow", password: "pirate", bio: "Why is the rum gone?", avatar: "https://d.newsweek.com/en/full/2042519/captain-jack-sparrow-run-viral-tiktok.jpg?w=1600&h=1200&q=88&f=600b670045f214f172807b570e075526")
#create users


puts "Creating recipes..."
Recipe.create(
ingredients: ["1 Red Cabbage", "1 Red Onion", "1 Purple Carrot", "Vinegar", "Oil"], instructions: ["Grate vegetables and combine in a bowl with the oil and vinegar, and some salt."], 
genre: "American", 
time: "20 minutes",
size: "Serves 6", 
title: "Cabbage Slaw",
image: "https://www.spendwithpennies.com/wp-content/uploads/2020/05/Red-Cabbage-Slaw-SpendWithPennies-3.jpg",
user_id: 1)

Recipe.create(
ingredients: ["2 lbs Boneless chicken", "1/2 bottle BBQ Sauce", "Brioche buns", "Smoked cheddar cheese"], 
instructions: ["Put chicken in slow cooker on medium heat for 7 hours.", "Mix with BBQ sauce and serve on brioche buns."], 
genre: "American", 
size:"serves 6", 
time: "10 minutes prep, 7 hours total", 
title: "Pulled Chicken Sliders",
image: "https://www.mynameissnickerdoodle.com/wp-content/uploads/2017/03/Instant-Pot-BBQ-Chicken-Sliders-My-Name-Is-Snickerdoodle-2.jpg",
user_id: 2)

Recipe.create(
ingredients: ["2 lbs turkey", "1 cup ricotta cheese", "chopped mint", "chopped parsley", "salt and pepper"], 
instructions: ["Mix all ingredients together.", "Roast golf ball sized balls in oven at 350 degrees for one hour.", "Mix with tomato sauce and enjoy over pasta."], genre:"Italian", 
time:"30 minutes prep, 1 hour cook time", 
size: "Serves 10", 
title: "Turkey Ricotta Meatballs",
image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2020-06-Small-Victories-Cookbook-Recipes%2F150625_SV_5_MeatPoultry_TurkeyRicottaMeatballs_039",
user_id: 1)

Recipe.create(
ingredients: ["Elbow macaroni", "cheese", "salt and pepper", "breadcrumbs"],
instructions: ["Cook pasta according to instructions on box.", "Add grated cheese and top with breadcrumbs.", "Mix in steamed vegetables for a healthier version.", "Toast under broiler for 15 minutes."], 
genre:"Weeknight Dinner", 
time: "45 minutes", 
size: "serves 4", 
title: "Weeknight mac and cheese",
image: "https://drivemehungry.com/wp-content/uploads/2019/10/southern-baked-mac-and-cheese-20-768x1024.jpg", user_id: 2)

Recipe.create(
ingredients: ["Bowtie pasta", "cherry tomatoes", "olive oil", "feta"], 
instructions: ["Arrange all ingredients except feta and pasta on a sheet pan.", "Place block of feta in the center.", "Roast at 350 degrees for 30 minutes.", "Meanwhile, cook pasta according to box instructions.", "Mix together and enjoy."], genre:"Weeknight Dinner", 
time: "45 minutes", 
size: "Serves 6", 
title: "TikTok Pasta",
image: "https://seaofblush.com/wp-content/uploads/feta-pasta.jpg", user_id: 1)

Recipe.create(
    ingredients: ["Peanut Butter", "Jelly", "Bread (2 slices)"],
    instructions: ["Spread Peanut Butter on one slice of bread", "Spread jelly on the other slice of bread", "Assemble that ish like it's voltron"],
    time: "2 minutes",
    size: "Serves 1",
    title: "PB&J",
    image: "http://theheritagecook.com/wp-content/uploads/2013/10/PBJ-Triangles-w-fruit-iStock.jpg",
    user_id: 2
)

Recipe.create(
    ingredients: ["1 cup softened salted butter","1 cup white (granulated) sugar", "1 cup light brown sugar packed", "2 tsp pure vanilla extract", "2 large eggs", "3 cups all-purpose flour", "1 tsp baking soda", "½ tsp baking powder", "1 tsp sea salt", "2 cups chocolate chips (or chunks or chopped chocolate)"],
    instructions: ["Preheat oven to 375 degrees F and line a baking pan with parchment paper", "Mix flour baking soda salt and baking powder in a separate bowl", "Cream together butter and sugars until combined", "Beat in eggs and vanilla until fluffy", "Mix in the dry ingredients until combined", "Add 12 oz package of chocolate chips and mix well", "Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies)", "Bake in preheated oven for approximately 8-10 minutes (take them out when they are just starting to brown)", "Let them sit on the baking pan for 2 minutes before removing to cooling rack"],
    time: "10 minutes of prep, 10 minutes to bake",
    size: "36 coooookies",
    title: "Chocolate Chip Coooookies",
    image: "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg",
    user_id: 3
)

Recipe.create(
    ingredients: ["Rum"],
    instructions: ["Open bottle", "Enjoy until gone", "Get sad and ask why the rum is gone"],
    time: "As fast as you can drive to the liquor store, purchase a bottle of rum, and unscrew the cap.",
    size: "The bigger the better",
    title: "Rum",
    image: "http://2.bp.blogspot.com/-Hrc0_0Nh_5A/VSxZIaUPIZI/AAAAAAAACUY/Zzoax4YCXWc/s1600/121.1.jpg",
    user_id: 4
)

Recipe.create(
    ingredients: ["As many chickens as needed (cut into halves)", "Whatever seasoning you prefer"],
    instructions: ["Season chicken halves to taste", "Put chicken halves on a spit and roast over coals (rotating every 5 minutes)"],
    time: "30 minutes",
    size: "One serving = half a chicken",
    title: "Roast Chicken",
    image: "https://www.greekboston.com/wp-content/uploads/2018/02/Kotopoulo-tis-Souvla.jpg",
    user_id: 4
)

Recipe.create(
    ingredients: ["4 (6-ounce) salmon fillets or a large 1 ½ pound fillet (wild caught if possible)", "olive oil", "½ teaspoon each of kosher salt and freshly ground black pepper", "3 tablespoons basil pesto (homemade preferred)", "1 tablespoon toasted and chopped pine nuts", "lemon zest"],
    instructions: ["Preheat the oven to 325 degrees Fahrenheit", "Rub bottom of baking dish with olive oil and place in it each piece of salmon", "Sprinkle salmon with kosher salt and fresh ground pepper", "Cover pan with foil and back for 10 minutes", "Remove foil and bake for another ~5 minutes (contingent on thickness of salmon fillets)", "Remove salmon from oven and top with pesto and lemon zest"],
    time: "15 Minutes Prep, 15 Minutes to Cook",
    size: "Serves 4",
    title: "Pesto Salmon",
    image: "https://www.acouplecooks.com/wp-content/uploads/2020/08/Pesto-Salmon-013.jpg",
    user_id: 1
)


#create recipes


puts "Creating reviews..."
Review.create(
    description: "This dish absolutely changed my life.",
    user_id: 1,
    recipe_id: 2,
    rating: 5
)

Review.create(
    description: "My feelings toward this dish are certainly lukewarm.",
    user_id: 2, 
    recipe_id: 1,
    rating: 3
)

Review.create(
    description: "This dish tastes like the sunset. Splendid.",
    user_id: 3, 
    recipe_id: 5,
    rating: 4
)

Review.create(
    description: "It wasn't bad, but I was disappointed.",
    user_id: 2,
    recipe_id: 4,
    rating: 2
)

Review.create(
    description: "If this dish were a color, it would be gray.",
    user_id: 3, 
    recipe_id: 3,
    rating: 2
)

Review.create(
    description: "I ate this dish when my ex broke up with me, so I hate it.",
    user_id: 1, 
    recipe_id: 5,
    rating: 1
)

Review.create(
    description: "If I could marry this dish, I would.",
    user_id: 2,
    recipe_id: 7,
    rating: 5
)

Review.create(
    description: "The dish tasted great but was unpleasant that night. ",
    user_id: 4, 
    recipe_id: 3,
    rating: 3
)

Review.create(
    description: "I wish the whole world could try this dish.",
    user_id: 3, 
    recipe_id: 4,
    rating: 5
)

Review.create(
    description: "This dish made my depression worse.",
    user_id: 2, 
    recipe_id: 5,
    rating: 1
)

Review.create(
    description: "Basic af... but still tasty",
    user_id: 2,
    recipe_id: 10,
    rating: 4
)

Review.create(
    description: "NOT A COOOOOKIE",
    user_id: 3,
    recipe_id: 9,
    rating: 1
)
#create reviews

puts "Done seeding!"