import React, { useEffect } from 'react'
import { connect } from "react-redux"
import store from "../../redux/store"
import { getCourse } from "../../redux/actionCreators"
import Banner from "../Organisms/Banner"
import { Link } from "react-router-dom"

const Course = ({ course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])

  return (
    <>
      { course &&
      <>
        <Banner
          color="dark-color"
          title={course.name}
          subtitle={course.subtitle}
          image={{
            src: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs",
            alt: course.name
          }}
          courseBanner
          poster={course.picture}
          especialidad={course.data.specialities[0].name}
          info={course.information}
        />
        <main className="ed-grid lg-grid-10">
          <div className="lg-cols-7">
            <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
              <div>
                <h3 className="t4">¿Qué aprenderás?</h3>
                <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
              </div>
              <div>
                <h3 className="t4">Cónocimientos previos</h3>
                <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
              </div>
              <div>
                <h3 className="t4">Nivel</h3>
                <p>{course.level}</p>
              </div>
            </div>
            <h2>Temario del curso</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              {
                course.data.classes.map(cl => (
                  <div className="course-class l-section" key={cl.class.id}>
                    <h3>{cl.class.title}</h3>
                    <p>{cl.class.description}</p>
                    <ul className="data-list">
                    {
                      cl.subjects.map(s => (
                        <li key={s.subject.id}>
                          <Link to={`/clase/${s.subject.id}`} className="color dark-color" >{s.subject.title}</Link>
                        </li>
                      ))
                    }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="lg-cols-3" >
            <h2 className="t3"> Profesor </h2>
            <p>Beto Quiroga</p>
          </div>
        </main>
      </> 
      }
    </>
  )
} 

const mapStateToProops = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProops, {})(Course)
