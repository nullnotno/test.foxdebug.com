function AddText(){
  const el = document.createElement('p');
  el.textContent = "hello world";
  document.body.append(el);
}

AddText();
