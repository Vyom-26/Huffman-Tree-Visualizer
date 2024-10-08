function Node(value, freq, right, left){
  this.value = value;
  this.freq = freq;
  this.right = right;
  this.left = left;
  this.code = "";
}

function createCode(node, s){
  if(node==null){
    return ;
  }
  if(node.right==null && node.left==null){
    node.code = s;
    return ;
  }
  node.code = s;

  createCode(node.left, s + '0');
  createCode(node.right, s + '1');
}

function createTree(array){
  var list = [].concat(array);

  if(list.length == 1){
    var x = list.pop();
    list.push(new Node(x.value, x.freq, null, x));
  }

  while(list.length > 1){
    var x = list.pop();
    var y = list.pop();
    var parent = new Node((x.value + y.value), (x.freq + y.freq), x, y);
    list.push(parent);

    list.sort(function(a, b){
      return b.freq - a.freq;
    })
  }

  createCode(list[0], "");

  codedOutput(array);

  try{
    drawGraph(array);
  }
  catch{
    console.log("No text");
  }
}

function createNodes(list){
  var new_list = [];

  for(var key in list){
    if(list.hasOwnProperty(key)){
      if(key == ""){
        new_list.push(new Node("SC" + ":" + list[key], list[key], null, null));
      }
      else if(key == "\n"){
        new_list.push(new Node("NL" + ":", list[key], list[key], null, null));
      }
      else{
        new_list.push(new Node(key + ":" + list[key], list[key], null, null));
      }
    }
  }

  new_list.sort(function(a, b){
    return a.freq - b.freq;
  })

  new_list.reverse();
  createTree(new_list);
}

function codedOutput(array){
  var text = String(document.getElementById("paragraph_text").value);
  var output = document.getElementById("coded");
  var encoded_digit = document.getElementById("encoded_digit");
  output.innerHTML = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Encoded: ";
  var count = 0;
  for(var l =0;l<text.length;l++){
    var cond = text[l];

    for(var t = 0;t<array.length;t++){
      var char = (array[t].value.split(":")[0]);

      if(char == "SC"){
        char = " ";

      } else if(char == "NL"){
        char = "\n";
      }
      if(char == cond){
        output.innerHTML += array[t].code + " ";
        count += array[t].code.length;
      } else{
        continue
      }

    }

  }

  encoded_digit.innerHTML = count;
}
