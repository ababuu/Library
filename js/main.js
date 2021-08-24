document.querySelector('.openButton').addEventListener('click', ()=>{
    const open=new openForm();
    open.open();
})

document.querySelector('.cancel').addEventListener('click', ()=>{
    const close=new closeForm();
    close.close();
})

        
const submitBtn=document.querySelector('.submit');

let myLibrary=[];




submitBtn.addEventListener('click', e => {
    
    e.preventDefault()
    let book=new Books(document.getElementById('author').value,
                    document.getElementById('title').value,
                    document.getElementById('pages').value,
                    document.getElementById('status').value)


    myLibrary.pop();
    myLibrary.push(book);
    console.log(myLibrary);
    //console.log(i);
    
    // localStorage.setItem('Book List',JSON.stringify(myLibrary));
    //console.log(JSON.parse(localStorage.getItem('Book List')));
    
    
    const display=new displayBook(myLibrary)
    display.display();
    const close=new closeForm();
    close.close();
    document.querySelector('form').reset();
    

});




class Books{

    constructor(author,title,pages,status){

        this.title=title;
        this.author=author;
        this.pages=pages;
        this.status=status;
    }
    info(){
        return `${title} by ${author}, ${pages} pages, ${status}`;
    }
}



class displayBook{

    constructor(array){
        this.array=array;
    }
        
        
        display(){
            

        for(let i=0; i<this.array.length; i++){
            let author=document.createElement('h3');
            let title=document.createElement('h4');
            let pages=document.createElement('h4');
            let status=document.createElement('h4');
            let deleteBtn=document.createElement('img');
            const section=document.querySelector('.cards');
let card=document.createElement('article');
            let switchToggle=document.createElement('label');
            let input=document.createElement('input');
            deleteBtn.src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png'
        input.type='checkbox';
        let span=document.createElement('span');
        card.classList.add('card',`card-0${i}`);
        author.classList.add(`author-0${i}`);
        title.classList.add(`title-0${i}`);
        deleteBtn.classList.add('deleteBtn',`deleteBtn-0${i}`);
        switchToggle.classList.add('switch');
        span.classList.add('slider', 'round');
        
        author.textContent=`Author: ${this.array[i]['author']}`;
        title.textContent=`Title: ${this.array[i]['title']}`;
        pages.textContent=`Pages: ${this.array[i]['pages']}`;
        status.textContent=`Status: ${this.array[i]['status']}`;

        switchToggle.appendChild(input);
        switchToggle.appendChild(span);
        
        section.appendChild(card);
        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(deleteBtn);
        card.appendChild(switchToggle);


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
            
        }

        
        }
        //i++;
}



class openForm {
    open(){
    document.getElementById("popupForm").style.display = "block";
    }
}
class closeForm {
    close(){
        document.getElementById("popupForm").style.display = "none";
}
    
}

// function load(){
//     let storedValue= JSON.parse(localStorage.getItem('Book List'));
    
//     if (storedValue!=null){
//         initiallyStored.push(storedValue);
//         let storedLength=storedValue.length;
        
//         for(let x=0; x<storedLength; x++){
            
//             const display=new displayBook(storedValue);
//             display.display();
            
//         }
        
        
//     }
//     //i--;
//     //console.log(i);
    
// }

// window.onload=load();
