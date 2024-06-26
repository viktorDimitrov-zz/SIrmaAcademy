function finFirstLastOccurrence(list, toFind) {
    let firstIndex = list.indexOf(toFind);
    let lastIndex = firstIndex;
    if (firstIndex === -1) {
        console.log('Record not found');
    } else {
        for (let i = firstIndex; i < list.length; i++) {
            if (list[i] === list[lastIndex]) {
                lastIndex = i;
            }
        }

        console.log(`First Occurrence: ${firstIndex}`);
        console.log(`Last Occurrence: ${lastIndex}`);

    }

}

//finFirstLastOccurrence(["Frodo", "Sam", "Frodo", "Merry"], "Frodo");
//finFirstLastOccurrence(["Pippin", "Merry", "Sam", "Pippin"], "Pippin");
//finFirstLastOccurrence(["Aragorn", "Legolas", "Gimli"], "Boromir");
//finFirstLastOccurrence(["Gandalf", "Sam", "Aragorn", "Frodo"], "Frodo");