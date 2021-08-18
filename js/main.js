const section=document.querySelector('.cards');

const submitBtn=document.querySelector('.submit');
let initiallyStored=[];
let myLibrary=[];
//let i=0;
let n=0;



submitBtn.addEventListener('click', e => {
    
    e.preventDefault()
    let book=new Books(document.getElementById('author').value,
                    document.getElementById('title').value,
                    document.getElementById('pages').value,
                    document.getElementById('status').value)


    myLibrary.push(initiallyStored);
    myLibrary.push(book);
    console.log(myLibrary);
    //console.log(i);
    
    localStorage.setItem('Book List',JSON.stringify(myLibrary));
    console.log(JSON.parse(localStorage.getItem('Book List')));
    
    
    
    displayBook(JSON.parse(localStorage.getItem('Book List')));
    closeForm();
    document.querySelector('form').reset();
    n++;
});



function Books(author,title,pages,status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;

    this.info= function(){
        return `${title} by ${author}, ${pages} pages, ${status}`;
    }
}



function displayBook(array){

    //array=JSON.parse(localStorage.getItem('Book List'));
        
        let card=document.createElement('article');
        let author=document.createElement('h3');
        let title=document.createElement('h4');
        let pages=document.createElement('h4');
        let status=document.createElement('h4');
        let deleteBtn=document.createElement('img');
        let switchToggle=document.createElement('label');
        let input=document.createElement('input');
        input.type='checkbox';
        let span=document.createElement('span');

        deleteBtn.src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png'


        for(let i=0; i<array.length; i++){
        card.classList.add('card',`card-0${i}`);
        author.classList.add(`author-0${i}`);
        title.classList.add(`title-0${i}`);
        deleteBtn.classList.add('deleteBtn',`deleteBtn-0${i}`);
        switchToggle.classList.add('switch');
        span.classList.add('slider', 'round');
        
        author.textContent=`Author: ${array[i]['author']}`;
        title.textContent=`Title: ${array[i]['title']}`;
        pages.textContent=`Pages: ${array[i]['pages']}`;
        status.textContent=`Status: ${array[i]['status']}`;

        switchToggle.appendChild(input);
        switchToggle.appendChild(span);
        
        section.appendChild(card);
        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(deleteBtn);
        card.appendChild(switchToggle);
        }

        deleteBtn.addEventListener('click',e=>{
            let btn=e.target;
            let parent=btn.parentNode;
            let grand=parent.parentNode;
            grand.removeChild(parent);
            document.querySelector('form').reset();
            
        })
        
            
            input.addEventListener('change', function () {
                if (input.checked) {
                    status.textContent="Status: Read";
                
                } else {
                    status.textContent="Status: Not Read yet";
                
                }
            });
        
        //i++;
}



function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function load(){
    let storedValue= JSON.parse(localStorage.getItem('Book List'));
    
    if (storedValue!=null){
        initiallyStored.push(storedValue);
        let storedLength=storedValue.length;
        
        for(let x=0; x<storedLength; x++){
            
            displayBook(storedValue);
            
        }
        
        
    }
    //i--;
    //console.log(i);
    
}

window.onload=load();
