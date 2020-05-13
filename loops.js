function forLoop (array){
  for(let i = 0; i < array.length; i++){
    array.push(`This is ${i} strange loop${i === 1 ? '':'s'}.`);
  }
  return array;
}