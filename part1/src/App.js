const Header = (props) => {
  return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercise}
      </p>
    </div>
    )
}

const Content = (props) => {
    return (
      <>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
      </>
      )  
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercise}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [{name: 'Fundamentals of React', exercise: 10},{name: 'Using props to pass data', exercise: 7},{name: 'State of a component', exercise: 14}]


  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total exercise= {parts[0].exercise + parts[1].exercise + parts[2].exercise}/>
    </div>
  )
}



export default App