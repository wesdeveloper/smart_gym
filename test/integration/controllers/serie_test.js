const SerieModel = require('../../../models/serieModel');

const mockSerie = {
	exercise: 'Extensora',
	quantities: 4,
	repeatQuantity: '12',
	target: 'Peito',
};

const mockUpdateSerie = {
	exercise: 'Agachamento',
	quantities: '5',
	repeatQuantity: '20',
	target: 'Perna',
};

const createSerie = () => {
	const newSerie = new SerieModel(mockSerie);
	return newSerie.save()
		.then(serie => serie._id)
		.catch(err => err);
};
const removeSerie = id => SerieModel.remove({ _id: id }, error => error || '');

describe('Serie controller', () => {
	it('Should get all series /api/series GET', (done) => {
		request
		.get('/api/series')
		.end((err, res) => {
			expect(res.status).to.be.eql(200);
			done(err);
		});
	});

	it('Should get a serie by id /api/series/:idSerie GET', (done) => {
		createSerie()
			.then((idSerie) => {
				request
				.get(`/api/series/${idSerie}`)
				.end((err, res) => {
					expect(res.status).to.be.eql(200);
					expect(res.body.exercise).to.be.eql('Extensora');
					expect(res.body.quantities).to.be.eql(4);
					expect(res.body.repeatQuantity).to.be.eql('12');
					removeSerie(idSerie);
					done(err);
				});
			})
			.catch(err => done(err));
	});

	it('Should create e Serie /api/series POST', (done) => {
		request
		.post('/api/series')
		.send(mockSerie)
		.end((err, res) => {
			const { body } = res;

			expect(res.status).to.be.eql(201);
			expect(body.exercise).to.be.eql('Extensora');
			expect(body.quantities).to.be.eql(4);
			expect(body.repeatQuantity).to.be.eql('12');

			removeSerie(body._id);
			done(err);
		});
	});

	it('Should update e Serie /api/series:idSerie PUT', (done) => {
		createSerie().then((idSerie) => {
			request
			.put(`/api/series/${idSerie}`)
			.send(mockUpdateSerie)
			.end((err, res) => {
				expect(res.status).to.be.eql(201);
				expect(res.body.exercise).to.be.eql('Agachamento');
				expect(res.body.quantities).to.be.eql(5);
				expect(res.body.repeatQuantity).to.be.eql('20');
				removeSerie(idSerie);
				done(err);
			});
		});
	});

	it('Should delete a serie /api/series/:idSerie DELETE', (done) => {
		request
		.post('/api/series')
		.send(mockSerie)
		.end((error, res) => {
			if (error) {
				throw error;
			}
			const id = res.body._id;

			request
			.delete(`/api/series/${id}`)
			.end((err, response) => {
				expect(response.status).to.be.eql(200);
				done(err);
			});
		});
	});
});
