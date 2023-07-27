function checkPass(s) {
    if (s.length < 6) {

        return 0;
    }
    var ls = 0;

    if (s.match(/([a-z])+/)) {

        ls++;

    }

    if (s.match(/([0-9])+/)) {

        ls++;
    }

    if (s.match(/([A-Z])+/)) {

        ls++;

    }
    //if (s.match(/[^a-zA-Z0-9]+/)) {

    //   ls++;

   // }
    return ls

} 