# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating users..."
User.create(username: "Kermit", password: "frog", bio: "I'm green")
User.create(username: "Darth Vader", password: "darksideoftheforce", bio: "I'm ur daddy")
User.create(username: "Cookie Monster", password: "cookie", bio: "COOOOOOOOOKIE")
User.create(username: "Captain Jack Sparrow", password: "rum", bio: "Why is the rum gone?")
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
user_id: 1)

Recipe.create(
ingredients: ["2 lbs turkey", "1 cup ricotta cheese", "chopped mint", "chopped parsley", "salt and pepper"], 
instructions: ["Mix all ingredients together.", "Roast golf ball sized balls in oven at 350 degrees for one hour.", "Mix with tomato sauce and enjoy over pasta."], genre:"Italian", 
time:"30 minutes prep, 1 hour cook time", 
size: "Serves 10", 
title: "Turkey Ricotta Meatballs",
image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2020-06-Small-Victories-Cookbook-Recipes%2F150625_SV_5_MeatPoultry_TurkeyRicottaMeatballs_039",
user_id: 3)

Recipe.create(
ingredients: ["Elbow macaroni", "cheese", "salt and pepper", "breadcrumbs"],
instructions: ["Cook pasta according to instructions on box.", "Add grated cheese and top with breadcrumbs.", "Mix in steamed vegetables for a healthier version.", "Toast under broiler for 15 minutes."], 
genre:"Weeknight Dinner", 
time: "45 minutes", 
size: "serves 4", 
title: "Weeknight mac and cheese",
image: "https://drivemehungry.com/wp-content/uploads/2019/10/southern-baked-mac-and-cheese-20-768x1024.jpg", user_id: 1)

Recipe.create(
ingredients: ["Bowtie pasta", "cherry tomatoes", "olive oil", "feta"], 
instructions: ["Arrange all ingredients except feta and pasta on a sheet pan.", "Place block of feta in the center.", "Roast at 350 degrees for 30 minutes.", "Meanwhile, cook pasta according to box instructions.", "Mix together and enjoy."], genre:"Weeknight Dinner", 
time: "45 minutes", 
size: "Serves 6", 
title: "TikTok Pasta",
image: "https://seaofblush.com/wp-content/uploads/feta-pasta.jpg", user_id: 3)
#create recipes

puts "Creating reviews..."
Review.create(
    description: "This dish absolutely changed my life.",
    user_id: 1,
    recipe_id: 2
)

Review.create(
    description: "My feelings toward this dish are certainly lukewarm.",
    user_id: 2, 
    recipe_id: 1
)

Review.create(
    description: "This dish tastes like the sunset. Splendid.",
    user_id: 3, 
    recipe_id: 5
)

Review.create(
    description: "It wasn't bad, but I was disappointed.",
    user_id: 2,
    recipe_id: 4
)

Review.create(
    description: "If this dish were a color, it would be gray.",
    user_id: 3, 
    recipe_id: 3
)

Review.create(
    description: "I ate this dish when my ex broke up with me, so I hate it.",
    user_id: 1, 
    recipe_id: 5
)

Review.create(
    description: "If I could marry this dish, I would.",
    user_id: 2,
    recipe_id: 1
)

Review.create(
    description: "The dish tasted great but was unpleasant that night. ",
    user_id: 4, 
    recipe_id: 3
)

Review.create(
    description: "I wish the whole world could try this dish.",
    user_id: 3, 
    recipe_id: 4
)

Review.create(
    description: "This dish made my depression worse.",
    user_id: 2, 
    recipe_id: 5
)
#create reviews

puts "Done seeding!"