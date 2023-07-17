function userfun(obj) {
    var name = obj.name, id = obj.id, stutes = obj.stutes, arrayobj = obj.arrayobj;
    return name + id + stutes + arrayobj;
}
var object = {
    name: "parjwal",
    id: 123456,
    stutes: true,
    arrayobj: [1, 2, 3, 4]
};
console.log(userfun(object));
