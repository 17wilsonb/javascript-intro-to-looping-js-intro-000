function forLoop (array){
  for(let i = 0; i < 25; i++){
    array.push(`This is ${i} strange loop${i === 1 ? '':'s'}.`);
  }
  return array;
}
