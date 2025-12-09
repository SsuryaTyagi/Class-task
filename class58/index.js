
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// const  user1 = {
//     name :"surya",
//     age:20
// }
// const  user2 = {
//     name :"aryan",
//     age:660
// }
// const  user3= {
//     name :"ashu",
//     age:10
// }
// const  user4 = {
//     name :"akash",
//     age:80
// }


// class user{
//     constructor(name,age){
//         this.name = name,
//         this.age = age 
//     }
// }

// const user1 = new user("surya",20)
// const user2 = new user("aryan",660)
// const user3 = new user("ashu",10)
// const user4 = new user("akash",100)


// console.log(user1,user2,user3,user4);


	// 3.	Create a product object that stores name and price and has a method which returns the final price after discount.
// const product = {
//     name:"tv",
//     price:40000,
//     dis: function(){
//         return console.log(this.price-5000);
//     }
// }



// console.log(product.dis());


// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed


// class car{
//     constructor(brand,speed){
//         this.brand = brand,
//         this.speed = speed
//         this.drive = function(){
//             console.log(this.brand,this.speed);  
//         }
//     }
// }

// let a = new car("BMW",4000);
// let b = new car('oddi',5000);

// console.log(a.drive(),b.drive());

// function ads(){
//         console.log(this.name);
        
// }
// const user = {
//     name:"surya"
// }

// ads.call(user);
// ads.apply(user);
// const fn = ads.bind(user)

// console.log(fn());


// class employee{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//         this.print = function(){
//             console.log(this.name+" "+this.salary);    
//         }
//     }
// }

// const employee1 = new employee("surya",50000);
// const employee2 = new employee("aryan",30000);
// const employee3 = new employee("ashu",9000);

// console.log(employee1.print());
// console.log(employee2);

// class BankAccount{
//     constructor(accountHolderName,balance){
//         this.name = accountHolderName;
//         this.balance = balance;
//         this.deposit = function(amount){
//             console.log(this.balance += amount);
            
//         }
//     }
// }

// const a = new BankAccount("sueya",500000);
// const b = new BankAccount("neerauj",10000);

// console.log(a.deposit(5000))
// console.log(b.deposit(100))

// const profile = {
//     name:"surya",
//     printName: function(){
//         console.log(this.name);
        
//     }
// }
// const p1 = profile.printName
// console.log(p1());


