
/*-------------------------------------------------- 2D Array for Bookstore  */

let Bookstore = [    
    Book1={
        Book_ID:1,
        Book_Title:"Future Skills",
        Book_Author:"Khaled Yaser",
        Book_Price:"73 SR",
        Book_Quantity:200
    },
    Book2={
        Book_ID:2,
        Book_Title:"When will you start?",
        Book_Author:"Ahmad Hamed",
        Book_Price:"33 SR",
        Book_Quantity:143
    },
    
    Book3={
        Book_ID:3,
        Book_Title:"JavaScript for Beginners",
        Book_Author:"Ali Osamah",
        Book_Price:"140 SR",
        Book_Quantity:1000
    },
    
    Book4={
        Book_ID:4,
        Book_Title:"Learn MySQL",
        Book_Author:"Omar Abduallah",
        Book_Price:"120 SR",
        Book_Quantity:48
    },
    
    Book5={
        Book_ID:5,
        Book_Title:"Software Architecture",
        Book_Author:"Omar Abduallah",
        Book_Price:"130 SR",
        Book_Quantity:28
    },
    
    Book6={
        Book_ID:6,
        Book_Title:"C# Basics",
        Book_Author:"Fahd Mohammad",
        Book_Price:"70 SR",
        Book_Quantity:68
    },
    
    Book7={
        Book_ID:7,
        Book_Title:"Software Modeling",
        Book_Author:"Thamer Rami",
        Book_Price:"50 SR",
        Book_Quantity:304
    },
    Book8={
        Book_ID:8,
        Book_Title:"Introduction to Artificial Intelligence (AI)",
        Book_Author:"Salim Ammar",
        Book_Price:"110 SR",
        Book_Quantity:0
    },
    
    Book9={
        Book_ID:9,
        Book_Title:"Lua Programming Language",
        Book_Author:"Salim Ammar",
        Book_Price:"100 SR",
        Book_Quantity:25
    },
    
    Book10={
        Book_ID:10,
        Book_Title:"Networking Essentials",
        Book_Author:"Asil Sami",
        Book_Price:"85 SR",
        Book_Quantity:23
    }
    ];
    
    
    /*--------------------------------------------------------- 1st. Select all the books in Bookstore  */
    console.log("1st. Select all the books in Bookstore");
    for(var i=0; i<Bookstore.length;i++)
    {
      console.log(Bookstore[i]);
    }    
    

    /*--------------------------------------------------------- Delete a book from Bookstore  */
        var Delete_Book_From_array = Bookstore.pop();
        console.log("The book that has deleted :", Delete_Book_From_array);

    /*---------------------------------------------------------- Add a new book to Bookstore  */
    Bookstore.push(Book11={
        Book_ID:11,
        Book_Title:"CCNA",
        Book_Author:"Yosef Bsher",
        Book_Price:"74 SR",
        Book_Quantity:21
    })
    Bookstore.push(Book12={
        Book_ID:12,
        Book_Title:"Project Management Professional (PMP)",
        Book_Author:"Yosef Bsher",
        Book_Price:"104 SR",
        Book_Quantity:5
    })
    
    /*---------------------------------------------------------- Update a book in Bookstore  */
    for(var i=0; i<Bookstore.length;i++)
    {
        
      if(Bookstore[i].Book_Title==='JavaScript for Beginners')
      {
        console.log("The book is existing")
            Bookstore[i].Book_ID=Bookstore[i].Book_ID=19283;
            Bookstore[i].Book_Title=Bookstore[i].Book_Title='Introduction to MS Excel';
            Bookstore[i].Book_Author=Bookstore[i].Book_Author='Mohannad Hassn';
            Bookstore[i].Book_Price=Bookstore[i].Book_Price='52 SR';
            Bookstore[i].Book_Quantity=Bookstore[i].Book_Quantity=771;
            console.log("The book has been updated : ",Bookstore[i]);
            break;
            
      }
    else 
  {console.log("Sorry, this book is not existing");}
        
}
    

    
    /*--------------------------------------------------------- 2nd. Select all the books in Bookstore  */
    console.log("2nd. Select all the books in Bookstore");
    for(var i=0; i<Bookstore.length;i++)
    {
      console.log(Bookstore[i]);
    }
    

/*--------------------------------------------------------- Select a book by Book_ID from Bookstore  */
  
for(var i=0; i<Bookstore.length;i++)
{ 
    if(Bookstore[i].Book_ID===7)
        {console.log("Select a book by Book_ID in Bookstore", Bookstore[i])}
    else 
        {console.log("Sorry, this book is not existing");}
}
            
            
    /*--------------------------------------------------------- Select a book by Book_Title from Bookstore  */

for(var i=0; i<Bookstore.length;i++)
{ 
  if(Bookstore[i].Book_Title==='Future Skills')
  {console.log("Select a book by Book_Title in Bookstore", Bookstore[i])}
  else 
  {console.log("Sorry, this book is not existing");}
}

    /*--------------------------------------------------------- Select a book by Book_Author from Bookstore  */
    
for(var i=0; i<Bookstore.length;i++)
{ 
  if(Bookstore[i].Book_Author==='Omar Abduallah')
  {console.log("Select a book by Book_Author in Bookstore",Bookstore[i])}
  else 
  {console.log("Sorry, this book is not existing");}
}

/*--------------------------------------------------------- Sell a book from Bookstore  */
for(var i=0; i<Bookstore.length;i++)
{
    
  if(Bookstore[i].Book_Title==='Future Skills')
  {
    console.log("The book is existing")
    
    if(Bookstore[i].Book_Quantity!==0)
    {
        Bookstore[i].Book_Quantity=Bookstore[i].Book_Quantity-1;

        console.log("Thank you for your buy from our Bookstore.");
        console.log(Bookstore[i]);
        break;
    }
    
    else 
    {console.log("Excuse us, but the quantity of the book is not enough.");}

  }

  else 
  {
        console.log("Sorry, this book is not existing");
  }
}

/*--------------------------------------------------------- 3rd. Select all the books in Bookstore  */
console.log("3rd. Select all the books in Bookstore");
for(var i=0; i<Bookstore.length;i++)
{
  console.log(Bookstore[i]);
}