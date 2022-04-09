const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableMocks()

describe('Guardian api class', () => {
  it('calls fetch and loads the news headlines', async () => {
    const api = new GuardianApi();
    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle: 'This the first headline' }]}
    }));

    api.getHeadlines(news => {
      expect(news.response.results[0].webTitle).toEqual('This the first headline');
    });
  });
});
