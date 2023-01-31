const { request, response } = require('express')
const express = require('express')
const app = express()
process.env.PORT

  const character = {
    'jon snow':{
      'age': '16 to mid 20s',
      'birthName': 'Aegon Targaryen',
      'FullTile': 'Jon Snow of House Stark, first of his name, King in the North, King Beyond the Wall, Lord of Winterfell, the White Wolf, the Undead.',
      'BirthLocation': 'Tower Of Joy',
      'BirthYear': '281AC'
  },

  'daenerys targaryen':{
    'age': '13 to 16',
    'AlsoKnownAs': 'Daenerys Stormborn, affectionately known as Dany',
    'FullTitle': 'Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons',
    'BirthLocation': 'Dragonstone',
  'BirthYear': '283AC',
},
"this character can't be found":{
  'age': "This Character can't be found",
    'AlsoKnownAs': "This Character can't be found",
    'FullTitle': "This Character can't be found",
    'BirthLocation': "This Character can't be found",
  'BirthYear': "This Character can't be found",
}

  }

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
  })

app.get('/api/:characterName', (request, response)=>{
    const characterName = request.params.characterName.toLowerCase()

    if (character[characterName]){
      response.json(character[characterName])
    }else(
      response.json(character["this character can't be found"])
    )

// response.json(character)
  })

app.listen(PORT, ()=>{
    console.log('The server is running on ${PORT}!')
  })






//var asoaif = require('asoiaf-api');
//asoaif.getCharacterByName("Jon Snow");