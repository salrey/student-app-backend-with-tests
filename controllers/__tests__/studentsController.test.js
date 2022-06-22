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

    //TDD(testDrivenDev) if api has a limit per query, then we should return that many students 
    it('returns an object with a number of students equal to or less than a limit', async () => {
        await supertest(app).get('/students?limit=10')
            .expect(200)
            .then(response => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(10);
            })
        await supertest(app).get('/students?limit=35')
        .expect(200)
        .then(response => {
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(25);
        })
    })
})

//modify api so that it takes a min and max id an returns all students by id in that range 

//students?min=3&max=10 //> all students with ids >= 3 and <= 10
