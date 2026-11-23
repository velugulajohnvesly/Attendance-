import { useState } from 'react'
import StudentAttendanceCard from './components/StudentAttendanceCard.jsx'
import { students } from './data/students.js'
import './App.css'

function App() {
  const [attendance, setAttendance] = useState(() =>
    Object.fromEntries(students.map((student) => [student.rollNumber, 'Absent'])),
  )

  const markAttendance = (rollNumber, status) => {
    setAttendance((current) => ({ ...current, [rollNumber]: status }))
  }

  const presentCount = Object.values(attendance).filter((status) => status === 'Present').length

  return (
    <main className="attendance-page">
      <header className="page-header">
        <div className="eyebrow"><span className="live-dot" /> CLASSROOM / ATTENDANCE</div>
        <h1>Daily register<span>.</span></h1>
        <p>Mark each student present or absent for today’s class.</p>
      </header>

      <section className="attendance-panel" aria-labelledby="roster-title">
        <div className="panel-heading">
          <div>
            <h2 id="roster-title">Student roster</h2>
            <p>Section A <span>·</span> {students.length} students</p>
          </div>
          <div className="attendance-summary" aria-live="polite">
            <strong>{String(presentCount).padStart(2, '0')}</strong>
            <span>of {students.length} present</span>
          </div>
        </div>

        <div className="student-list">
          {students.map((student, index) => (
            <StudentAttendanceCard
              key={student.rollNumber}
              number={String(index + 1).padStart(2, '0')}
              name={student.name}
              rollNumber={student.rollNumber}
              status={attendance[student.rollNumber]}
              onStatusChange={(status) => markAttendance(student.rollNumber, status)}
            />
          ))}
        </div>
        <footer className="panel-footer">ATTENDANCE UPDATES IN REAL TIME</footer>
      </section>
      <p className="page-note">A good day starts with showing up.</p>
    </main>
  )
}

export default App
