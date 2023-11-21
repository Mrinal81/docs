// DoctorList.jsx
import React from 'react';

const DoctorList = ({ doctors }) => (
  <div className='doc-container'>
    <div className="doc-category">
      <div className="doc-content">
        <div className="doc-heading">
          <h2>Doctors</h2>
        </div>
        <div className="doc-list">
          <ul className='doc-unlist'>
            {doctors.map(doctor => (
              <li className='doctor-card' key={doctor.id}>
                <div className="details">
                  <div className="detail-img">
                    <img className='doctor-img' src={doctor.img} alt={`Dr. ${doctor.name}`} />
                  </div>
                  <div className="booking">
                    <div className="doc-name">
                      <h3 className='doc-nam'>{doctor.name}</h3>
                    </div>
                    <div className="para">
                      <p>{doctor.role}</p>
                      <p><span>{doctor.exp}</span> years experience overall</p>
                      <div className="pla-cli">
                        <span className='place'><strong>{doctor.place}</strong></span>
                        <p className='clinic'>
                          <ul><li>{doctor.clinic}</li></ul></p>
                      </div>
                      <p><span>{doctor.fees}</span> Consultation fee at clinic</p>
                    </div>
                    <div className="like">
                      <p className='btnLike'><span>👍</span>{doctor.rating} %</p>
                      <p className='stories'><span>{doctor.stories}</span> Patient Stories</p>
                    </div>
                  </div>
                    <div className="bookingbtn">
                  <div className="bookBtn">
                    <p>{doctor.available}</p>
                    <button>Book Appointment</button>
                  </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DoctorList;
