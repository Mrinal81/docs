// backend/server.js
const express = require('express');
const faker = require('faker');

const app = express();
const port = 3001;

const generateDoctors = () => {
    const doctors = [];

    const roles = ['Cardiologist', 'Dermatologist', 'Gynecologist'];

    for (let i = 1; i <= 20; i++) {
        doctors.push({
            id: i,
            name: `Dr. ${faker.name.firstName()}`,
            role: faker.random.arrayElement(roles),
            exp: faker.random.number({ min: 1, max: 30 }),
            place: `${faker.address.city()}, ${faker.address.state()}`,
            clinic: faker.company.companyName(),
            fees: faker.random.number({ min: 100, max: 500 }),
            rating: faker.random.number({ min: 0, max: 100 }),
            stories: faker.random.number({ min: 1, max: 50 }),
            available: faker.random.arrayElement(['Available Today', 'Not Available']),
            img: `https://i.pravatar.cc/150?img=${i}`,
        });
    }

    return doctors;
};

const doctors = generateDoctors();

app.get('/api/doctors', (req, res) => {
    res.json(doctors);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
