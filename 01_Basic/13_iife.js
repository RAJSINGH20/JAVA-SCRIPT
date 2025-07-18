(function chai(){       //named iife
    console.log(`DBMS Connected`);

})();

((name) =>{             //arrow function iife
    console.log(`DBMS connected TWO ${name}`);

})('Raj');