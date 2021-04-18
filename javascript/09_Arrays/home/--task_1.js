function camelize(str) {
    let words = str.split('-');
    words.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    words.join('');
    console.log(words);
          
        // console.log(words.toUpperCase() + words.join(''));
    }
    


camelize('my-short-string');