var jack = { name: 'Jack', age: 32 };
for (var property in jack)
    console.log("".concat(property, ": ").concat(jack[property])); // name: Jack age: 32
