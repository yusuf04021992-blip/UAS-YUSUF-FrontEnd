import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Load data dari LocalStorage saat startup (Simulasi Read)
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(savedData);
  }, []);

  // Save data ke LocalStorage setiap kali state berubah
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => setStudents([...students, student]);

  const updateStudent = (updated) => {
    setStudents(students.map(s => (s.id === updated.id ? updated : s)));
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    if(window.confirm("Hapus data ini?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Navbar />
      <div className="container">
        <header className="mb-4">
          <h2 className="fw-bold text-dark">Manajemen Data Mahasiswa</h2>
          <p className="text-secondary">UAS Pemrograman Front-End 2026</p>
        </header>

        <StudentForm 
          addStudent={addStudent} 
          editingStudent={editingStudent} 
          updateStudent={updateStudent} 
        />

        <div className="mt-5">
          <h5 className="fw-bold mb-3">Daftar Mahasiswa (Grid View)</h5>
          <StudentList 
            students={students} 
            deleteStudent={deleteStudent} 
            setEditingStudent={setEditingStudent} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;