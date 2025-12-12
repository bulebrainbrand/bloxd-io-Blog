const element = document.getElementById("header")
if(element){
  setHeader()
}

async function setHeader(){
  const data = await fetch('header.html')
  if(!data.ok)return;
  const text = await data.text()
  if(text)element.innerHTML = text
}
