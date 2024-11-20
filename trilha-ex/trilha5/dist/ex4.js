"use strict";
// 
class VoteSystem {
    constructor() {
        this.votes = {};
    }
}
class Election extends VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        const sortedEntries = Object.entries(this.votes).sort((a, b) => b[1] - a[1]);
        const sortedResults = sortedEntries.reduce((acc, [candidate, votes]) => {
            acc[candidate] = votes;
            return acc;
        }, {});
        return sortedResults;
    }
}
const election = new Election();
const poll = new Poll();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
poll.voteFor("Charlie");
poll.voteFor("Alice");
poll.voteFor("Alice");
poll.voteFor("Bob");
console.log("Resultados da eleicao:", election.getResults());
console.log("Resultados da enquete:", poll.getResults());
