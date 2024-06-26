function countingVotes(arrVotes) {
    let yesVotes = 0;
    let noVotes = 0;
    let isThereVote = false;
    let resultOfVote;

    for (const vote of arrVotes) {

        if (vote === 'Yes') {
            yesVotes++;
            isThereVote = true;
        } else if (vote === 'No') {
            noVotes++;
            isThereVote = true;
        } else {
            isThereVote = true;
            continue;
        }
    }


    if (isThereVote) {
        if (yesVotes > noVotes) {
            resultOfVote = 'Yes';
        } else if (noVotes > yesVotes) {
            resultOfVote = 'No';
        } else if (yesVotes == 0 && noVotes == 0) {
            resultOfVote = 'Abstain';
        } else if (yesVotes === noVotes) {
            resultOfVote = 'Tie';
        }
    } else {
        console.log('There is no vote!')
    }

    return console.log(resultOfVote);
}

//countingVotes(["Yes", "No", "Yes", "Abstain", "Yes"]);
//countingVotes(["No", "No", "Yes"]);
//countingVotes(["Yes", "No"]);
//countingVotes(["Abstain"]);
//countingVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);
//countingVotes(["No", "Abstain", "Abstain"]);
