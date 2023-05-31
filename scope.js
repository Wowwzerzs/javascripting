(function secondFunction() {
  const b = 8;

  (function thirdFunction() {
    const a = 7;
    const c = 9;

    (function fourthFunction() {
      const a = 1;
      const c = 6;      
      console.log(`a: ${a}, b: ${b}, c: ${c}`);
    })();
  })();
})();

