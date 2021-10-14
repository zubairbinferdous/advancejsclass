const student = [
    {id:1 , name:'omor sunny' },
    {id:11 , name:'maanaa' },
    {id:18  , name:'omor sunny' },
    {id:22 , name:'omor sunny' }
];

const names = student.map( s => s.name );
const ids = student.map( s => s.id );
const bigger = student.filter( s => s.id < 10 );
console.log(names);
console.log(ids);
console.log('filter' , bigger)
