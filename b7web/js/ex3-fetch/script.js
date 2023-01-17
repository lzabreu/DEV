async function loadPosts(){
  document.getElementById("posts").innerHTML = 'Carregando....';

  let req = await fetch('https://jsonplaceholder.typicode.com/posts');
  let json = await req.json();
  montarPost(json);
  /* as 3 linhas de cima substituem todas as de baixo
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){
      return resultado.json();
    })
    .then(function(json){
      montarPost(json);
    })
    .catch(function(error){
      console.log(error);
    });
  */
}

function montarPost(lista){
  let listPosts = '';
  for(let i in lista){
    listPosts += '<h3>'+lista[i].title+'</h3>';
    listPosts += '<span>'+lista[i].body+'</span><br/>';
    listPosts += '<hr/>';
  }
  document.getElementById("posts").innerHTML = listPosts;
}