class School{
  constructor(name, level, numberOfStudents){
    this._level = level;
    this._name = name;
    this._numbberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numbberOfStudents;
  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numbberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    let randIndex = Math.floor(Math.random()*(substituteTeachers - 1));
    return substituteTeachers[randIndex];
  }

  set numberOfStudents(newNumberOfStudents){
    if (typeof(newNumberOfStudents) !== "Number"){
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numbberOfStudents = numberOfStudents;
    }
  }
}

class PrimarySchool extends School{
  constructor(name, level, numberOfStudents, pickupPolicy){
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name, level, numberOfStudents, sportsTeams){
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    console.log(`${this._sportsTeams}`);
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', "primary", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"])

const alSmith = new HighSchool("Al E. Smith", "high", 415, "['Baseball', 'Basketball', 'Volleyball', 'Track and Field']" );

alSmith.sportsTeams;