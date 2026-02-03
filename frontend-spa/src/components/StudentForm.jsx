import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, editingStudent, updateStudent }) => {
  const [student, setStudent] = useState({ name: '', nim: '', major: '' });

  useEffect(() => {
    if (editingStudent) setStudent(editingStudent);
    else setStudent({ name: '', nim: '', major: '' });
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) updateStudent(student);
    else addStudent({ ...student, id: Date.now() });
    setStudent({ name: '', nim: '', major: '' });
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{editingStudent ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}</h5>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Nama Lengkap" required
              value={student.name} onChange={(e) => setStudent({...student, name: e.target.value})} />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="NIM" required
              value={student.nim} onChange={(e) => setStudent({...student, nim: e.target.value})} />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={student.major} required
              onChange={(e) => setStudent({...student, major: e.target.value})}>
              <option value="">Pilih Jurusan</option>
              <option value="Informatika">Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">DKV</option>
            </select>
          </div>
          <div className="col-md-2 d-grid">
            <button className={`btn ${editingStudent ? 'btn-warning' : 'btn-success'} fw-bold`}>
              {editingStudent ? 'Update' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;