function StudentAttendanceCard({ number, name, rollNumber, status, onStatusChange }) {
  const isPresent = status === 'Present'

  return (
    <article className="student-card">
      <div className="student-identity">
        <span className="student-number">{number}</span>
        <div>
          <h3>{name}</h3>
          <p>Roll no. {rollNumber}</p>
        </div>
      </div>
      <div className="student-actions">
        <span className={`status-pill ${isPresent ? 'status-present' : 'status-absent'}`}>
          <span className="status-dot" />{status}
        </span>
        <div className="button-group" aria-label={`Mark ${name} attendance`}>
          <button
            className={`mark-button present-button ${isPresent ? 'selected' : ''}`}
            type="button"
            aria-pressed={isPresent}
            onClick={() => onStatusChange('Present')}
          >
            Present
          </button>
          <button
            className={`mark-button absent-button ${!isPresent ? 'selected' : ''}`}
            type="button"
            aria-pressed={!isPresent}
            onClick={() => onStatusChange('Absent')}
          >
            Absent
          </button>
        </div>
      </div>
    </article>
  )
}

export default StudentAttendanceCard
