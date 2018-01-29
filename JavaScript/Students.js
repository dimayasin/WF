var students = [
{first_name: 'Michael', last_name:'Jordan'},
{first_name: 'John', last_name:'Rosalens'},
{first_name: 'Mark', last_name:'Guillen'},
{first_name: 'KB', last_name:'Tonel'},
]

console.log("Part One:");
for(var i=0; i<students.length;i++)
{
    console.log(students[i].first_name,students[i].last_name);
}



console.log("=================================");
console.log("Part Two:");


var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }



 console.log("Students");
    for(var index=0;index<users.Students.length;index++)
    {
    console.log(i," - " ,users.Students[index].first_name,users.Students[index].last_name, " - ", users.Students[index].first_name.length + users.Students[index].last_name.length);
    }

    console.log("Instructors");
    for(var index=0;index<users.Instructors.length;index++)
    {
    console.log(i," - " ,users.Instructors[index].first_name,users.Instructors[index].last_name, " - ", users.Instructors[index].first_name.length + users.Instructors[index].last_name.length);
    }
