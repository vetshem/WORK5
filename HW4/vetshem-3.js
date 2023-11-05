
class Warrior {
    constructor() {
        this._level = 1;
        this._experience = 100;
        this._rank = "Pushover";
        this._achievements = [];
    }

    level() {


        //console.log(this._level);
        if (this._level > 100) {
            this._level = 100;
        }
        return Math.floor(this._level);
        //return this._level;
    }

    experience() {
        if (this._experience > 10000) {
            this._experience = 10000;
        }

        // console.log(this._experience);
        return this._experience;
    }

    rank() {

        //  console.log(this._rank);
        return this._rank;
    }

    achievements() {
        //console.log(this._achievements);
        return this._achievements;
    }

    training([description, experiencePoints, minLevelRequirement]) {
        if (this._level >= minLevelRequirement) {
            this.updateRank(experiencePoints);
            this._achievements.push(description);
            // console.log(description);
            return description;
        } else {
            // console.log("Not strong enough");
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        const enemyRank = rankTiers[Math.floor(enemyLevel / 10)];
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }
        const warriorLevel = Math.floor(this._level);
        const levelDifference = warriorLevel - enemyLevel;

        if (levelDifference === 0) {
            const experiencePoints = 10;
            this.updateRank(experiencePoints);
            return "A good fight";
        } else if (levelDifference === 1) {
            const experiencePoints = 5;
            this.updateRank(experiencePoints);
            return "A good fight";
        } else if (levelDifference >= 2) {
            return "Easy fight";

        } else if (levelDifference < 0) {
            if (rankTiers.indexOf(this._rank) < rankTiers.indexOf(enemyRank) && warriorLevel - enemyLevel <= -5) {
                return "You've been defeated";
            }

            const experiencePoints = 20 * levelDifference * levelDifference;
            this.updateRank(experiencePoints);
            return "An intense fight";
        }
    }



    updateRank(experiencePoints) {
        this._experience += experiencePoints;
        this._level += experiencePoints / 100;
        const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        const newRank = rankTiers[Math.floor(this.level() / 10)];
        if (newRank !== this._rank) {
            this._rank = newRank;
        }
    }
}
