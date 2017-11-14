const GymmerModel = require('../../../models/gymmerModel');

const mockGymmer = {
	code: 1,
	name: 'Alan Bolti',
	phone: '999997222',
	email: 'alan@teste.com',
	born: '01/01/1990',
	cpf: '02314578452',
	height: '1,74',
	Weight: '85',
	gender: 'Masculino',
	address: {
		street: 'João da Silva',
		number: '13',
		neighborhood: 'Caiçara',
		city: 'Belo Horizonte',
		state: 'Minas Gerais',
		country: 'Brazil',
		cep: '44582590',
	},
};

const mockUpdateGymmer = {
	code: 10,
	name: 'Alan Junior',
	phone: '999997222',
	email: 'alanjunior@teste.com',
	born: '01/01/1990',
	cpf: '11111111111',
	height: '1,74',
	Weight: '87',
	gender: 'Masculino',
};

const createGymmer = () => {
	const newGymmer = new GymmerModel(mockGymmer);
	return newGymmer.save()
		.then(gymmer => gymmer._id)
		.catch(err => err);
};
const removeGymmer = id => GymmerModel.remove({ _id: id }, error => error || '');

describe('Gymmer controller', () => {
	it('Should get all gymmers /api/gymmers GET', (done) => {
		request
		.get('/api/gymmers')
		.end((err, res) => {
			expect(res.status).to.be.eql(200);
			done(err);
		});
	});

	it('Should get a gymmer by id /api/gymmers/:idGymmer GET', (done) => {
		createGymmer()
			.then((idGymmer) => {
				request
				.get(`/api/gymmers/${idGymmer}`)
				.end((err, res) => {
					expect(res.status).to.be.eql(200);
					expect(res.body.code).to.be.eql(1);
					expect(res.body.name).to.be.eql('Alan Bolti');
					expect(res.body.cpf).to.be.eql('02314578452');
					expect(res.body.email).to.be.eql('alan@teste.com');
					removeGymmer(idGymmer);
					done(err);
				});
			})
			.catch(err => done(err));
	});

	it('Should create e Gymmer /api/gymmers POST', (done) => {
		request
		.post('/api/gymmers')
		.send(mockGymmer)
		.end((err, res) => {
			const { body } = res;

			expect(res.status).to.be.eql(201);
			expect(res.body.code).to.be.eql(1);
			expect(res.body.name).to.be.eql('Alan Bolti');
			expect(res.body.cpf).to.be.eql('02314578452');
			expect(res.body.email).to.be.eql('alan@teste.com');

			removeGymmer(body._id);
			done(err);
		});
	});

	it('Should update e Gymmer /api/gymmers:idGymmer PUT', (done) => {
		createGymmer().then((idGymmer) => {
			request
			.put(`/api/gymmers/${idGymmer}`)
			.send(mockUpdateGymmer)
			.end((err, res) => {
				expect(res.status).to.be.eql(201);
				expect(res.body.code).to.be.eql(10);
				expect(res.body.name).to.be.eql('Alan Junior');
				expect(res.body.cpf).to.be.eql('11111111111');
				expect(res.body.email).to.be.eql('alanjunior@teste.com');
				removeGymmer(idGymmer);
				done(err);
			});
		});
	});

	it('Should delete a gymmer /api/gymmers/:idGymmer DELETE', (done) => {
		request
		.post('/api/gymmers')
		.send(mockGymmer)
		.end((error, res) => {
			if (error) {
				throw error;
			}
			const id = res.body._id;

			request
			.delete(`/api/gymmers/${id}`)
			.end((err, response) => {
				expect(response.status).to.be.eql(200);
				done(err);
			});
		});
	});
});
