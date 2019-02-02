const GymModel = require('../../../models/gymModel');

const mockGym = {
  name: 'BodyBuilder',
  email: 'bodybuilder@builder.com',
  cnpj: '14521452145',
  address: {
    street: 'Rua birrr',
    number: 13,
    neighborhood: 'Veneza',
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    country: 'Brasil',
    cep: '38250145',
  },
};

const mockUpdateGym = {
  name: 'Birrrrrrrr',
  email: 'birrr@builder.com',
  cnpj: '14521452145',
  address: {
    street: 'Rua body',
    number: 13,
    neighborhood: 'TTTTT',
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    country: 'Brasil',
    cep: '3825789',
  },
};

const createGym = () => {
  const newGym = new GymModel(mockGym);
  return newGym
    .save()
    .then(serie => serie._id)
    .catch(err => err);
};
const removeGym = id => GymModel.remove({ _id: id }, error => error || '');

describe('Gym controller', () => {
  it('Should get all gyms /api/gyms GET', done => {
    request.get('/api/gyms').end((err, res) => {
      expect(res.status).to.be.eql(200);
      done(err);
    });
  });

  it('Should get a gym by id /api/gyms/:idGym GET', done => {
    createGym()
      .then(idGym => {
        request.get(`/api/gyms/${idGym}`).end((err, res) => {
          expect(res.status).to.be.eql(200);
          expect(res.body.name).to.be.eql('BodyBuilder');
          expect(res.body.email).to.be.eql('bodybuilder@builder.com');
          expect(res.body.cnpj).to.be.eql('14521452145');
          removeGym(idGym);
          done(err);
        });
      })
      .catch(err => done(err));
  });

  it('Should create e Gym /api/gyms POST', done => {
    request
      .post('/api/gyms')
      .send(mockGym)
      .end((err, res) => {
        const { body } = res;

        expect(res.status).to.be.eql(201);
        expect(res.body.name).to.be.eql('BodyBuilder');
        expect(res.body.email).to.be.eql('bodybuilder@builder.com');
        expect(res.body.cnpj).to.be.eql('14521452145');

        removeGym(body._id);
        done(err);
      });
  });

  it('Should update e Gym /api/gyms:idGym PUT', done => {
    createGym().then(idGym => {
      request
        .put(`/api/gyms/${idGym}`)
        .send(mockUpdateGym)
        .end((err, res) => {
          expect(res.status).to.be.eql(201);
          expect(res.body.name).to.be.eql('Birrrrrrrr');
          expect(res.body.email).to.be.eql('birrr@builder.com');
          expect(res.body.cnpj).to.be.eql('14521452145');
          removeGym(idGym);
          done(err);
        });
    });
  });

  it('Should delete a Gym /api/gyms/:idGym DELETE', done => {
    request
      .post('/api/gyms')
      .send(mockGym)
      .end((error, res) => {
        if (error) {
          throw error;
        }
        const id = res.body._id;

        request.delete(`/api/gyms/${id}`).end((err, response) => {
          expect(response.status).to.be.eql(200);
          done(err);
        });
      });
  });
});
