/**
 * demo
 */
public class demo {

    String name;
    int age;
     demo setname(String name){
         this.name=name;
         return  this ;
     }
     demo setage(int age){
        this.age=age;
        return this;
     }
     demo display(){
        System.out.println(name);
        System.out.println(age);
        return this;
     }
     public static void main(String[] args) {
        demo ref= new demo();
        ref.setname("rohan").setage(21).display();
     }
    
}