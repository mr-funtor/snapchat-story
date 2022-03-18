const allStoriesCase= document.querySelectorAll('.main-story');
const alternateStory= document.querySelector('.floating-story');
const alternateStory2= document.querySelectorAll('.floating-story2');
const storiesScreenFilter= document.getElementById('stories-filter');
const storiesMainBody= document.getElementById('stories-container');
const backButton=document.querySelector('button')
const theMainTag=document.querySelector('main')



allStoriesCase.forEach((item,index)=>{
    //the event listener to expand the image in the story
    item.addEventListener('click', expandStory);
    
    //set the inner images of each story to match the dimension of it's parent
    alternateStory2[index].style.height=item.getBoundingClientRect().height;
    alternateStory2[index].style.width=item.getBoundingClientRect().width;
    alternateStory2[index].style.top=item.getBoundingClientRect().top;
    alternateStory2[index].style.left=item.getBoundingClientRect().left;
})


//let's the inner images move with the parent container
storiesMainBody.addEventListener('scroll',()=>{
    allStoriesCase.forEach((item,index)=>{
        alternateStory2[index].style.left=item.getBoundingClientRect().left;
    })
})



function expandStory(e){
    let imageName=e.currentTarget.dataset.image;
  

    e.currentTarget.style.position='static';
    
    theStory=e.currentTarget;//this tracks the current story on display
    
    allStoriesCase.forEach((item,index)=>{
        if(e.currentTarget===item){
            
            //changes the size of the inner image to fit the screen
            alternateStory2[index].classList.add('expand');
            alternateStory2[index].style.left=item.getBoundingClientRect().left;
            alternateStory2[index].style.left=theMainTag.getBoundingClientRect().left;
            alternateStory2[index].style.height='100%';
            alternateStory2[index].style.width='40%';
            alternateStory2[index].style.top='0px';
            alternateStory2[index].style.visibility='visible';
        }
    })
   


    
    backButton.style.visibility='visible';
    
    storiesMainBody.style.overflow='hidden';
    
}

backButton.addEventListener('click',backToMainScreen)

function backToMainScreen(){
    allStoriesCase.forEach((item,index)=>{
        if(theStory===item){
            
            //this returns the image back to being small
           alternateStory2[index].classList.remove('expand');
           alternateStory2[index].style.height=item.getBoundingClientRect().height;
        alternateStory2[index].style.width=item.getBoundingClientRect().width;
        alternateStory2[index].style.top=item.getBoundingClientRect().top;
        alternateStory2[index].style.left=item.getBoundingClientRect().left;
        alternateStory2[index].style.visibility='hidden';
        }
    })
    
    backButton.style.visibility='hidden';
    storiesMainBody.style.overflow='auto';
}
