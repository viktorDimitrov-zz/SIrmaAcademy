function solve () {
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m++) {
                let hours=h.toString().padStart(2,0);
                let minutes=m.toString().padStart(2,0);

                console.log(`${hours}:${minutes}`);
            }
        
        }
}

solve();