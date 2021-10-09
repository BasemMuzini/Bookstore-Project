
/*-------------------------------------------------- 2D Array for E-Bookstore  */

let E_Bookstore = [    
    Book1={
        Book_ID:1,
        Book_Title:"Future Skills",
        Book_Author:"Khaled Yaser",
        Book_Price:"73 SR",
    },
    Book2={
        Book_ID:2,
        Book_Title:"When will you start?",
        Book_Author:"Ahmad Hamed",
        Book_Price:"33 SR",
    },
    
    Book3={
        Book_ID:3,
        Book_Title:"JavaScript for Beginners",
        Book_Author:"Ali Osamah",
        Book_Price:"140 SR",
    },
    
    Book4={
        Book_ID:4,
        Book_Title:"Learn MySQL",
        Book_Author:"Omar Abduallah",
        Book_Price:"120 SR",
    },
    
    Book5={
        Book_ID:5,
        Book_Title:"Software Architecture",
        Book_Author:"Omar Abduallah",
        Book_Price:"130 SR",
    },
    
    Book6={
        Book_ID:6,
        Book_Title:"C# Basics",
        Book_Author:"Fahd Mohammad",
        Book_Price:"70 SR",
    },
    
    Book7={
        Book_ID:7,
        Book_Title:"Software Modeling",
        Book_Author:"Thamer Rami",
        Book_Price:"50 SR",
    },
    Book8={
        Book_ID:8,
        Book_Title:"Introduction to Artificial Intelligence (AI)",
        Book_Author:"Salim Ammar",
        Book_Price:"110 SR",
    },
    
    Book9={
        Book_ID:9,
        Book_Title:"Lua Programming Language",
        Book_Author:"Salim Ammar",
        Book_Price:"100 SR",
    },
    
    Book10={
        Book_ID:10,
        Book_Title:"Networking Essentials",
        Book_Author:"Asil Sami",
        Book_Price:"85 SR",
    }
    ];
    
    
    /*--------------------------------------------------------- 1st. Select all the books in E-Bookstore  */
    console.log("1st. Select all the books in E-Bookstore");
    for(var i=0; i<E_Bookstore.length;i++)
    {
      console.log(E_Bookstore[i]);
    }    
    

    /*--------------------------------------------------------- Delete a book from E-Bookstore  */
        var Delete_Book_From_array = E_Bookstore.pop();
        console.log("The book that has deleted :", Delete_Book_From_array);

    /*---------------------------------------------------------- Add a new book to E-Bookstore  */
    E_Bookstore.push(Book11={
        Book_ID:11,
        Book_Title:"CCNA",
        Book_Author:"Yosef Bsher",
        Book_Price:"74 SR",
    })
    E_Bookstore.push(Book12={
        Book_ID:12,
        Book_Title:"Project Management Professional (PMP)",
        Book_Author:"Yosef Bsher",
        Book_Price:"104 SR",
    })
    
    /*---------------------------------------------------------- Update a book in E-Bookstore  */
    for(var i=0; i<E_Bookstore.length;i++)
    {
        
      if(E_Bookstore[i].Book_Title==='JavaScript for Beginners')
      {
        console.log("The book is existing")
        E_Bookstore[i].Book_ID=E_Bookstore[i].Book_ID=19283;
        E_Bookstore[i].Book_Title=E_Bookstore[i].Book_Title='Introduction to MS Excel';
        E_Bookstore[i].Book_Author=E_Bookstore[i].Book_Author='Mohannad Hassn';
        E_Bookstore[i].Book_Price=E_Bookstore[i].Book_Price='52 SR';
            console.log("The book has been updated : ",E_Bookstore[i]);
            break;
            
      }
    else 
  {console.log("Sorry, this book is not existing");}
        
}
    

    
    /*--------------------------------------------------------- 2nd. Select all the books in E-Bookstore  */
    console.log("2nd. Select all the books in E-Bookstore");
    for(var i=0; i<E_Bookstore.length;i++)
    {
      console.log(E_Bookstore[i]);
    }
    

/*--------------------------------------------------------- Select a book by Book_ID from E-Bookstore  */
  
for(var i=0; i<E_Bookstore.length;i++)
{ 
    if(E_Bookstore[i].Book_ID===7)
        {console.log("Select a book by Book_ID in E-Bookstore", E_Bookstore[i])}
    else 
        {console.log("Sorry, this book is not existing");}
}
            
            
    /*--------------------------------------------------------- Select a book by Book_Title from E-Bookstore  */

for(var i=0; i<E_Bookstore.length;i++)
{ 
  if(E_Bookstore[i].Book_Title==='Future Skills')
  {console.log("Select a book by Book_Title in E-Bookstore", E_Bookstore[i])}
  else 
  {console.log("Sorry, this book is not existing");}
}

    /*--------------------------------------------------------- Select a book by Book_Author from E-Bookstore  */
    
for(var i=0; i<E_Bookstore.length;i++)
{ 
  if(E_Bookstore[i].Book_Author==='Omar Abduallah')
  {console.log("Select a book by Book_Author in E-Bookstore",E_Bookstore[i])}
  else 
  {console.log("Sorry, this book is not existing");}
}

/*--------------------------------------------------------- Sell a book from E-Bookstore  */
for(var i=0; i<E_Bookstore.length;i++)
{
    
  if(E_Bookstore[i].Book_Title==='Future Skills')
  {
    console.log("The book is existing")
    console.log("Thank you for your buy from our E-Bookstore.");
    console.log(E_Bookstore[i]);
    break;
  }

  else 
  {
    console.log("Sorry, this book is not existing");
  }
}

/*--------------------------------------------------------- 3rd. Select all the books in E-Bookstore  */
console.log("3rd. Select all the books in E-Bookstore");
for(var i=0; i<E_Bookstore.length;i++)
{
  console.log(E_Bookstore[i]);
}