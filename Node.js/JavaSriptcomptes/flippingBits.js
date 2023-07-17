
//32 bit pading

function flippingBits(n) {
    // Convert the number to binary string
    let fipl=[]
    for(let i=0;i<n.length;i++){
     
    let binary = n[i].toString(2).padStart(32, '0');
    // Invert all the bits
    let inverted = [...binary].map(c => c === '0' ? '1' : '0').join('');
    
    // Convert the result back to integer
    fipl.push(parseInt(inverted, 2))
    }
    return fipl
  }

console.log(flippingBits([2147483647,1,2])  );