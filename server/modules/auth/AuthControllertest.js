process.env.NODE_ENV = 'test';

import chai from 'chai';
import '@babel/polyfill';
import chaiHttp from 'chai-http';
import app from '../../server'
import sinon from 'sinon';

//configure chai
chai.use(chaiHttp)
chai.should()


describe('POST /login', () => {
    // try logging in a user 
    it ("should terminate with an error",(done) => {
        chai.request(app)
                .get('/api/v1/logi')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    done();
                });
    })
})
// test successfull login
describe('SUCCES /login', () => {
    it("should login a user",(done) => {
        const body = {
            "email":"emmanulthedeelope@gmail.com",
            "password":"3050manu"
        }
        chai.request(app)
            .post('/api/v1/login')
            .send(body)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
            })
    })
})
// test unsucessfull login
describe('POST /Login',() => {
    it('Should give an error', (done) => {
        const body = {
            "email":"emmanule@gmail.com",
        "password":"3050manu"
        }
        chai.request(app)
            .post('/api/v1/login')
            .send(body)
            .end((err,res) => {
                res.should.have.status(403);
                res.body.should.be.a('object')
                done()
            })
    })
})

