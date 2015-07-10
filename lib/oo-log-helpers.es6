let chalk = {};
if (Meteor.isServer) {
  Npm.require('console.table');
  chalk = Npm.require('chalk');
};

oo = {
  /**
   * @summary Stylized console.log helpers fro client and server
   * @param  {string}    color Valid options 'red', 'green', 'blue', 'magenta', 'yellow', 'gray', 'cyan'
   * @param  {string}    title  Title to use for console output
   * @param  {...Any} args  Any number of arguments passed to console.log
   */
  _logger(color, title, ...args) {
    // Colors for browser console
    let colors = {
      red: "f14646",
      green: "72bd3d",
      blue: "5c75db",
      magenta: "c54482",
      yellow: "f80",
      gray: "545454",
      cyan: "3ca5d3",
    }
    if (Meteor.isServer) {
      return console.log(chalk.styles[color].open + title + chalk.styles[color].close, ...args);
    } else if (Meteor.isClient) {
      return console.log(`%c ${title} `, `background: #${colors[color]}; color: white; padding: 1px 20px 1px 5px;`, ...args);
    }

  },
  log(title, ...args) {
    return this._logger("magenta", title, ...args);
  },
  logWithColor(color, title, ...args) {
    return this._logger(color, title, ...args);
  },
  /**
   * @summary Prints Mongo.Collection contents to console in a nicely formated table
   * @locus Anywhere
   * @param  {(string|Object)} arg Internal Mongo.Colelction name | Mongo.Collection instance
   * @param  {Object} query Optional mongo query object
   */
  logMongoCollection(arg, query = {}) {

    let collection = {};
    let collectionName = "";

    // Check if passed arg is collectiona name or instance
    if (typeof arg === "string") {
      collection = Mongo.Collection.get(arg).find(query).fetch();
      collectionName = arg;
    } else {
      collection = arg.find(query).fetch();
      collectionName = arg._name;
    }

    if (Meteor.isServer) {
      // Npm console.table acceps additional (first) paramerter for table name
      console.table(collectionName, collection);
      console.log(collection);
    } else if (Meteor.isClient) {
      console.table(collection);
    }
  }
  // // TEST
  // // XXX Create real tests ;)
  // oo.log(`default`, 0);

  // oo.logWithColor('magenta', `I'am magenta`, 1);
  // oo.logWithColor('blue', `I'am blue`, 2);
  // oo.logWithColor('red', `I'am red`, 3);
  // oo.logWithColor('gray', `I'am gray`, 4);
  // oo.logWithColor('yellow', `I'am yellow`, 5);
  // oo.logWithColor('green', `I'am green`, 7);
  // oo.logWithColor('cyan', `I'am cyan`, 8);

};
