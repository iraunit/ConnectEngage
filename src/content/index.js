let accountName = "Raunit Verma";
let comments = [];
let tagPerson = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'executeReplyToComments') {
      chrome.storage.local.get(['comments','tagPerson','username'], (result) => {
        if (result.comments && Array.isArray(result.comments)) {
          comments = result.comments
        }
        if(result.tagPerson!=undefined)tagPerson = result.tagPerson;
        if(result.username)accountName = result.username
        replyToComments();
      });
    }
  });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function moveCursor(element,name){
    var text = "@"+name
    const targetElement = element.getElementsByClassName('comments-comment-box-comment__text-editor')[0];
    if (targetElement) {
    const paragraphElement = targetElement.getElementsByTagName('p')[0];
    if (paragraphElement) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(paragraphElement.childNodes[0], text.length);
    range.setEnd(paragraphElement.childNodes[0], text.length);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  await sleep(5000);
  try{document.getElementsByClassName('editor-typeahead-fetch')[0].getElementsByTagName('img')[0].click();}
  catch(e){  }
  await sleep(1000);
}

  }

  function getComment(){
    const index = Math.floor(Math.random() * comments.length);
    return comments[index]
    
  }

  function alreadyCommented(element){
    if (element && element.textContent.includes('Shubham'))return true;
    else return false;
  }


  async function replyToComments(){
    var comments = document.getElementsByTagName('article');
    var commentsLength = comments.length;
    alert('Started');
    for(let i = 0; i<commentsLength; i++){
        try{
        if(i+5>=commentsLength){
          try{
            var loadMoreComments = document.getElementsByClassName('comments-comments-list__show-previous-container ')[0].getElementsByTagName('button')[0];
            loadMoreComments.click();
            // console.log("Loading More Comments");
            await sleep(10000);
          }
          catch(e){} 
        }
        comments = document.getElementsByTagName('article');
        commentsLength = comments.length;
        var current = comments[i];
        await sleep(1000);
        var personName = current.getElementsByClassName('comments-post-meta__name-text hoverable-link-text')[0].innerText.split('\n')[0].trim();
        if(personName==accountName || alreadyCommented(current))continue;
        var replyButton = current.getElementsByClassName('comments-comment-social-bar__action-group')[1].getElementsByTagName('button')[0];
        var commentText = current.getElementsByClassName('comments-comment-item-content-body break-words')[0].getElementsByTagName('span')[0].innerText
        // console.log("Name : ",personName);
        // console.log("Comment : ",commentText);
        // click Reply Button
        replyButton.click();
        await sleep(100);
        // Tag the Person
        if(tagPerson==true){
        current.getElementsByClassName('comments-comment-box-comment__text-editor')[0].getElementsByTagName('p')[0].innerHTML="@"+personName
        await sleep(1000);
        await moveCursor(current,personName);    
        }
        // Write the Comment
        current.getElementsByClassName('comments-comment-box-comment__text-editor')[0].getElementsByTagName('p')[0].innerHTML+=getComment();
        await sleep(1000);
        // click on reply button
        current.getElementsByClassName('comments-comment-box__form-container flex-grow-1')[0].getElementsByTagName('button')[2].click();
        await sleep(3000);
        }
        catch(e){
            // console.log(e);
        }
    }
  }