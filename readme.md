Slash Trade

1. Clone Directory
2. Install Dependencies
3. Seed Database

# 1. Clone Directory
`git clone git@github.com:JordPWN/meteor_slash_trade.git meteor_slash_trade`

# 2. Install Dependencies
`meteor npm install`

# 3. Seed Database
Run the following from your terminal in the app's root directory with the app running:
`meteor mongo`
`mongoimport --db meteor collection items --drop --file ~/seed/seeder.json`

# 4. Run App
From the app's root directory, simply enter:
`meteor`