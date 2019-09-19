



var input = document.querySelector('textarea');

input.oninput = function(){
    document.querySelector('p').innerHTML = input.value;
    
    var p = document.querySelector('p').innerHTML,
    char = p.split(""),
    test = p.split(" "),
    words = test.length,
    a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0;
    console.log(test);
    
    for (var y = 0; y < test.length; y++){
        
        if(test[y] === ""){
            var words = words - 1;
        }
        
    }
    
    for (var x = 0; x < char.length; x++){
        
        if ((char[x] === "A") || (char[x] === "a")){
            a +=1;
        } else if ((char[x] === "E") || (char[x] === "e")){
            e +=1;
        } else if ((char[x] === "I") || (char[x] === "i")){
            i +=1;
        } else if ((char[x] === "O") || (char[x] === "o")){
            o +=1;
        } else if ((char[x] === "U") || (char[x] === "u")){
            u +=1;
        }
        
    }
    
    document.querySelector("div").innerHTML = "Total Characters: " + char.length + " Total Words: " + words + " A: " + a + " E: " + e + " I: " + i + " O: " + o + " U: " + u;
};