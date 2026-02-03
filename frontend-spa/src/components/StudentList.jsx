import React from 'react';

const StudentList = ({ students, deleteStudent, setEditingStudent }) => {
  return (
    <div className="row g-4">
      {students.length === 0 && <p className="text-center text-muted mt-5">Belum ada data mahasiswa.</p>}
      {students.map((s) => (
        <div className="col-12 col-md-6 col-lg-4" key={s.id}>
          <div className="card h-100 shadow-sm border-0 hover-shadow transition">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="fw-bold mb-1 text-primary">{s.name}</h6>
                  <p className="text-muted small mb-2">NIM: {s.nim}</p>
                  <span className="badge bg-light text-dark border">{s.major}</span>
                </div>
                <div className="btn-group btn-group-sm">
                  <button onClick={() => setEditingStudent(s)} className="btn btn-outline-warning">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button onClick={() => deleteStudent(s.id)} className="btn btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;