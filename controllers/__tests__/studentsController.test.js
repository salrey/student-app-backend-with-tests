const app = require('../../app');
const supertest = require('supertest');
//supertest gives extra functionality; it is to start up an app and send app a request and check assertions.

describe('returns json data for all students', () => {
    it('returns an object with all students', async () => {
        await supertest(app).get('/students')
            .expect(200)
            .then((response) => {
                // expect(response.body.students[0].firstName).toBe('Ingaberg');
                //how to assert data type with jest, students should always be an array
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(25);
            });
    });

    
})