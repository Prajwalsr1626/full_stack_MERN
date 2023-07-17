///dupicates value list in array

const arr = [1, 2, 3, 4, 2, 5, 6, 1];

const duplicates = arr.filter((elem, index, self) => {
  return index !== self.indexOf(elem);
});

console.log(duplicates);