import 'dart:io';
void main(){
  stdout.write("enter name sir");
  String name= stdin.readLineSync()??"Guest";
  stdout.write("enter age");
  int age= int.parse(stdin.readLineSync()??"0");
  if(age>=18){
    print("hii $name, you are an adult");
  }
    else{
      print("hii $name you are still a child");
    
  }
}