var names = ['Jack', 'Jane', 'Steve'];
for (var index in names) {
    var name_1 = names[index];
    console.log("[".concat(index, "]: ").concat(name_1)); // [0]: Jack [1]: Jane [2]: Steve
}
