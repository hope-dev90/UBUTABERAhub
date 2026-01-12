const studentList=[
    {name:"kalisa",age:12,marks:10,isActive:false},
    {name:"ashraf",age:23,marks:10,isActive:false},
    {name:"nelson",age:23,marks:8},
]
const students=studentList.map((student)=>{return ({name:student.name,age:student.age})})
console.log(students)
const studentWithAge23= studentList.filter((student)=> student.age==23)
console.log(studentWithAge23)

const studentWithAge24= studentList.find((student)=>{return student.age==23})
console.log(studentWithAge24)

const SumMarks= studentList.reduce((acc,curr)=>{
    return acc+curr.marks/studentList.length
},0)
console.log(SumMarks);
