window.onload = function()
{
 let content = {
  'written-history':'When we think of history, we primarily think of written history.\
  Written history is arguably more credible than spoken history, because it is not \
  limited by human memory. This means that written history can survive independently \
  of the people who write it. However, it is important to take historical bias into \
  account when reading history. Historical bias occurs because writers of history were often \
  highly educated, which may not give the most accurate representation of the whole population. \
  Nevertheless, written history is one of the best resources we have for learning about the past.'
  ,
  'oral-history':'However, written history is certainly not the only way to learn of the past, \
  We have oral (or spoken) history as well. Although spoken history is arguably not as credible \
  as written history, it may make up for this by making history like a story. When history is \
  told as a story, it is more enjoyable for some to learn. However, from a purely evidence-\
  based standpoint, it is most likely not the most credible source available.'
  ,
  'other-animals':'Humans aren\'t the only species that shared history; certain animals remember \
  the past as well. For example, trees\' rings denote the years that the tree was alive. The \
  size and color of the rings also denotes additional information about the year, including \
  rainfall and temperature. The difference is humans are conscious of their knowledge of the \
  whereas animals would have no way of communicating their knowledge of the past collectively.'
 };

 //document.getElementById('cont').children[0].innerHTML = content['written-history'];

 ['written-history','oral-history','other-animals'].forEach(v => {
  document.getElementById(v).onclick = e => {
   [...document.getElementsByClassName('selected')][0].classList.remove('selected');
   e.target.classList.add('selected');
   document.getElementById('cont').innerHTML = content[e.target.id];
  };
 });
};