const Course = ({course}) => {
    return(
      <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      </div>
    
    )
  }

const Header = ({course}) => <h2>{course.name}</h2>

const Content = ({parts}) =>   {

const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return(
    <>
    <>
    {parts.map((part, i) => 
        <p key ={i}>
            {part.name} | Exercises: {part.exercises}
        </p>
    )}
    </>
    <p><b>Total Exercises: {totalExercises}</b></p>
    </>

    )
}

export default Course