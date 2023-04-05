class PartyPlanner {
  constructor() {
    this.guestList = [];
  }
  addToGuestList(name) {
    this.guestList.push(name);
  }
  throwParty() {
    if (this.guestList === 0) {
      return "Gotta add people to the guest list";
    } else {
    }
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = PartyPlanner;
} catch {
  module.exports = null;
}
