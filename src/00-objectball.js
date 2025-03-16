function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Regie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "Desagana Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Function to get the home team's name
  function homeTeamName() {
    let object = gameObject();
    return object.home.teamName;
  }
  
  console.log(homeTeamName());  // logs "Brooklyn Nets"
  
  // Function to calculate total points scored by the home team
  function totalPointsScored() {
    let homePlayers = gameObject().home.players;
    let points = 0;
    for (let player in homePlayers) {
      points += homePlayers[player].points;
    }
    return points;
  }
  
  console.log(totalPointsScored());  // Example output: Total points scored by home team
  
  // Function to get a player's points
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return null;  // player not found
  }
  
  console.log(numPointsScored("Alan Anderson"));  // Output: 22
  
  // Function to get a player's shoe size
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return null;
  }
  
  console.log(shoeSize("Brook Lopez"));  // Output: 17
  
  // Function to get team colors by team name
  function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null;
  }
  
  console.log(teamColors("Charlotte Hornets"));  // Output: ["Turquoise", "Purple"]
  
  // Function to get all team names
  function teamNames() {
    const game = gameObject();
    const names = [];
    for (const team in game) {
      names.push(game[team].teamName);
    }
    return names;
  }
  
  console.log(teamNames());  // Output: ["Brooklyn Nets", "Charlotte Hornets"]
  
  // Function to get player numbers from a team
  function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (const team in game) {
      if (game[team].teamName === teamName) {
        for (let player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
      }
    }
    return numbers;
  }
  
  console.log(playerNumbers("Charlotte Hornets"));  // Output: Array of player numbers
  
  // Function to get player's stats
  function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return null;
  }
  
  console.log(playerStats("Alan Anderson"));  // Output: Player stats
  
  // Function to get the player with the most points scored
  function mostPointsScored() {
    const homePlayers = gameObject().home.players;
    let mostPoints = 0;
    let mostPointsPlayer = "";
    for (let player in homePlayers) {
      if (homePlayers[player].points > mostPoints) {
        mostPoints = homePlayers[player].points;
        mostPointsPlayer = player;
      }
    }
    return mostPointsPlayer;
  }
  
  console.log(mostPointsScored());  // Example output: "Mason Plumlee"
  
  // Function to get the player with the biggest shoe size and their rebounds
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let playerWithBiggestShoe = '';
    
    for (let teamKey in game) {
      const team = game[teamKey];
      for (let playerName in team.players) {
        const player = team.players[playerName];
        if (player.shoe > largestShoe) {
          largestShoe = player.shoe;
          playerWithBiggestShoe = playerName;
        }
      }
    }
  
    if (playerWithBiggestShoe) {
      return game.home.players[playerWithBiggestShoe]?.rebounds || game.away.players[playerWithBiggestShoe]?.rebounds;
    }
  
    return 0;
  }
  
  console.log(bigShoeRebounds());  // Output: Player with the largest shoe size's rebounds
  
  // Function to get the winning team based on total points
  function winningTeam() {
    const game = gameObject();
    
    let homePointsTotal = 0;
    let awayPointsTotal = 0;
    
    // Calculate total points for the home team
    for (let player in game.home.players) {
      homePointsTotal += game.home.players[player].points;
    }
    
    // Calculate total points for the away team
    for (let player in game.away.players) {
      awayPointsTotal += game.away.players[player].points;
    }
    
    if (homePointsTotal > awayPointsTotal) {
      return game.home.teamName;
    } else if (awayPointsTotal > homePointsTotal) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  
  console.log(winningTeam());  // Output: Name of the winning team
  
  // Function to get the player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    
    for (let teamKey in game) {
      const team = game[teamKey];
      for (let playerName in team.players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    
    return longestName;
  }
  
  console.log(playerWithLongestName());  // Output: "Brendan Haywood"
  