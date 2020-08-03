var name = 'eeee';
var letter = 'If music be the food of'+ name + '\n\nlove, play on. Give me excess of it, that, surfeiting, The appetite may sicken, and so die. That strain again! it had a dying fall O,it came oer my ear like the sweet sound That breathes upon a bank of violets, Stealing and giving odour!';
console.log(letter);

var letter = `If music be the food of ${name}

love, play on. Give me excess of it, that, surfeiting, The appetite may sicken, and so die. That strain again! it had a dying fall O,it came oer my ear like the sweet sound That breathes upon a bank of violets, Stealing and giving odour!`;

//템플릿 리터럴 ''가 아니라 ``를 사용
//`` 사용시 줄바꿈을 위한 특수문자를 사용하지 않아도 된다.
//+변수+ 사용 없이 ${변수}를 사용하면 바로 변수를 사용할 수 있다.