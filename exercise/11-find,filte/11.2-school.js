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
    capacityLeft: 2,
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
        if(!teacher.students.find(val=>val.id===student.id))
            teacher.students.push(student)
        else
            console.log(`the student is alreday in this subject`);
    else console.log(`no teachers avilable`);
}
function assignTeacherSubject(id,newSubject){
    let teacher=findPerson("teachers",id)
    if(!teacher.subjects.find(val=>val===newSubject))
        teacher.subjects.push(newSubject)
}
assignStudent(10,"history")
console.log(findPerson("teachers",2));
assignTeacherSubject(1,"sports")
console.log(findPerson("teachers",1));
