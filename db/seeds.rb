# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
# 10.times do |n|
#     User.create!(email: Faker::Internet.email, password: "password", nickname: "user#{n+1}")
# end

User.create!(email: "michael@gmail.com", password: "password", nickname: "His_Airness")
User.create!(email: "larry@gmail.com", password: "password", nickname: "UncleLarry")
User.create!(email: "vince@gmail.com", password: "password", nickname: "Vinsanity")
User.create!(email: "shaq@gmail.com", password: "password", nickname: "Shaq")
User.create!(email: "chris@gmail.com", password: "password", nickname: "CP3")
User.create!(email: "lebron@gmail.com", password: "password", nickname: "The_King")
User.create!(email: "yao@gmail.com", password: "password", nickname: "Yao")

Court.delete_all
Court.create!(
    address: "3401 SW 72nd Avenue",
    city: "Miami",
    state: "FL",
    name: "A.D.(DOUG)Barnes Park"
    )
Court.create!(
    address: "1466 Nw 62nd Street",
    city: "Miami",
    state: "FL",
    name: "African Square Park"
    )
Court.create!(
    address: "4230 NW 178th Street",
    city: "Miami Gardens",
    state: "FL",
    name: "AJ King Park"
    )
Court.create!(
    address: "133 NE 9th Ct",
    city: "Homestead",
    state: "FL",
    name: "Angelo Mistretta Park"
    )
Court.create!(
    address: "10801 Miramar Boulevard",
    city: "Miramar",
    state: "FL",
    name: "Ansin Sports Complex"
    )
Court.create!(
    address: "525 NW 62nd street",
    city: "Miami",
    state: "FL",
    name: "ATHALIE RANGE PARK"
    )
Court.create!(
    address: "13400 NW 12th Avenue",
    city: "North Miami",
    state: "FL",
    name: "Ben Frankilin Park"
    )
Court.create!(
    address: "13498 NE 8th Avenue",
    city: "North Miami",
    state: "FL",
    name: "Cagni Park"
    )
Court.create!(
    address: "600 SW 14th Ave",
    city: "Homestead",
    state: "FL",
    name: "Blakey Park"
    )
Court.create!(
    address: "6300 SW 56th Street",
    city: "South Miami",
    state: "FL",
    name: "Brewer Park"
    )
Court.create!(
    address: "15600 Bunche Park Drive",
    city: "Miami Gardens",
    state: "FL",
    name: "Bunche Park"
    )
Court.create!(
    address: "900 N. Flamingo Rd",
    city: "Pembroke Pines",
    state: "FL",
    name: "C.B. Smith Park"
    )
Court.create!(
    address: "1300 NW 50th Street",
    city: "Miami",
    state: "FL",
    name: "Charles Hadley Park"
    )
Court.create!(
    address: "1255 NW 135th Street",
    city: "North Miami",
    state: "FL",
    name: "Claude Pepper Park"
    )
Court.create!(
    address: "1725 NE 135th Street",
    city: "North Miami",
    state: "FL",
    name: "Enchanted Florest Elaine Gordon Park"
    )
Court.create!(
    address: "14195 NE 16th Court",
    city: "North Miami",
    state: "FL",
    name: "Jaycee Park"
    )
Court.create!(
    address: "13050 Ixora Court",
    city: "North Miami",
    state: "FL",
    name: "Keystone Park"
    )
Court.create!(
    address: "12100 NW 16th Avenue",
    city: "North Miami",
    state: "FL",
    name: "Kiwanis Park"
    )
Court.create!(
    address: "12220 North Bayshore Drive",
    city: "North Miami",
    state: "FL",
    name: "North Bayshore William Lehman Park"
    )
Court.create!(
    address: "12100 NW 113th Avenue",
    city: "North Miami",
    state: "FL",
    name: "Oleander Park "
    )
puts "Life is awesome and I like puppies."

Game.create!(
    user_id: 1,
    court_id: 2,
    opponent_id:6,
    is_active: true,
    opponent_points: 8,
    user_points: 8
)

# Veterans Memorial NE 123 Street & West Dixie highway North Miami, Florida 33161

# Curtis Park 1901 NW 24 Avenue Miami, Florida 33125

# Cutler Ridge Park 10100 SW 200 street Cutler Bay, Florida 33189

# Douglas Park 2755 SW 37th Avenue Miami, Florida 33161

# Fairway Park 3700 Largo Drive Miramar, Florida 33023

# Flamingo Park 11 Street & Jefferson Avenue Miami Beach, Florida 33139

# Golden Eagle Park 9784 NW 130 Street Miami, Florida 33161

# Harris Field Park 1034 NE 8th Street Homestead, Florida 33030

# Heritage Park 19200 Collins Avenue Miami, Florida 33030

# Ingram Park 2100 Burlington Street Opa-locka, Florida 33054

# Segal Park 2331 NW 143 Street Opa-locka, Florida 33054

# Sherbondy Park 380 Bahman Street Opa-locka, Florida 33054

# Kendale Lakes Park 7850 SW 142 Avenue Miami, Florida

# Carol City Park 18500 NW 32nd Avenue Miami Garden, Florida 33056

# Miami Lakes Optimist Park 6411 NW 162nd Street Miami Lakes, Florida 33014

# Miami Lakes Picnic Park West 15151 NW 82nd Avenue Miami Lakes, Florida

# Morgan Levy Park 5300 NW 102nd Avenue Doral, Florida 33166

# Morningside Park 750 NE 55 Terrace Miami, Florida 33137

# Myrtle Grove 3030 NW 179th Street Miami Gardens, Florida 33056

# Roberto Clemente Park 101 NW 34st Street Miami, Florida 33127

# Polo Park 4301 N Michigan Avenue Miami Beach, Florida 33140

# 96th Street Park 9580 Bay Drive Surfside, Florida 33154

# Southside Park Brickell 140 SW 11th Street Miami, Florida 33130

# Urban 5 1125 NW 71st Street Miami, Florida 33150