describe('Routes Index', () => {
  it('should return status code 200 / GET', done => {
    request.get('/').end((err, res) => {
      expect(res.status).to.be.eql(200);
      expect(res.text).to.be.eql('{"success":true}');
      done(err);
    });
  });
});
