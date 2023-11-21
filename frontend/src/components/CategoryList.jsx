// CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import cardiologist from '../cardiologist.jpg';
import dermatologist from '../dermatologist.jpg';
import gynocologist from '../gynocologist.jpg';


const categoryImages = {
  Cardiologist: cardiologist,
  Dermatologist: dermatologist,
  Gynecologist: gynocologist,
};

const CategoryList = ({ categories }) => (
  <div className="container">
    <div className="category">
      <div className="content">
        <div className="heading">
          <h2>CATEGORIES</h2>
        </div>
        <div className="title">
          <h3>Book an appointment for an in-clinic consultation</h3>
          <p>Find experienced doctors across all specialties</p>
        </div>
        <div className="list">
          <ul className="unordered-list">
            {categories.map(category => (
              <li className="category-card" key={category}>
                <Link to={`/doctors/${category.toLowerCase()}`}>
                <img className='doc-img' src={categoryImages[category]} alt={`${category} Category`} />
                  <h2 className="sec">{category}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryList;
