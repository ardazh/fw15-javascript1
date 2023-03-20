function replaceVowels(text, replacement) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        result += replacement;
      } else {
        result += text[i];
      }
    }
  
    return result;
  }
  
  const text = 'jakarta';
  const replacement = 'o';
  
  console.log(replaceVowels(text, replacement)); // Output