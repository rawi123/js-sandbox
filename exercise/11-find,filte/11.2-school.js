const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 1,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
};
// all the functions can be made shorter but wont be as much understandable
function findPerson(type,id){
    return school[type].find(val=>val.id===id)
}
function findTeachingSubject(wantedSubject){
    return school["teachers"].find(val=>{
        let wantedTeacher=val.subjects.find(singleSub=>singleSub===wantedSubject)
        return val.capacityLeft>0 && wantedTeacher

    })
}
function assignStudent(id,subject){
    let teacher=findTeachingSubject(subject);
    let student=findPerson("students",id)
    if(teacher)
        if(!teacher.students.find(val=>val.id===student.id) && addSubToStudent(id,subject)){
            teacher.students.push(student)
            teacher.capacityLeft-=1
        }
        else
            console.log(`the student is alreday in this subject`);
    else console.log(`no teachers avilable`);
}
function assignTeacherSubject(id,newSubject){
    let teacher=findPerson("teachers",id)
    if(!teacher.subjects.find(val=>val===newSubject))
        teacher.subjects.push(newSubject)
}
// function of my choice - add a subject that the student is learning after adding that to the teacher!!!!!!
function addSubToStudent(id,subject){
    stud=findPerson("students",id)
    if(stud["subjects"]){
        return stud["subjects"].find(val=>val===subject)? false:(stud["subjects"].push(subject),true)
    }
    stud["subjects"]=[subject];
    return true
}

assignStudent(10,"history")
console.log(findPerson("teachers",2));
console.log(findPerson("students",10));
assignStudent(11,"history")
console.log(findPerson("teachers",2));
console.log(findPerson("students",11));
// assignTeacherSubject(1,"sports")
// console.log(findPerson("teachers",1));
