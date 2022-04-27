const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerServices");
const explorers= Reader.readJsonFlie("explorers.json");

/* console.log(explorers) */

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
const usernames=ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(usernames[0])