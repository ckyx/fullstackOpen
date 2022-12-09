const Header = ({course}) => <h2>{course.name}</h2>

const Content = ({course}) => course.parts.map((part) => <p key={part.id}>{part.name} {part.exercises}</p>)

const Total = ({course}) => <p><b>total of {course.parts.reduce((accumulator,currentValue) => accumulator + currentValue.exercises ,0 )} exercises</b></p>


const Course = ({course}) =>{

  return(
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
  )
}

export default Course