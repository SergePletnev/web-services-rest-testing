const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const patchRequests = require('./../../data/requests/negative/patch.requests');
const env = require('./../../endpoint/test');

describe('[PATCH] Negative requests tests', () => {

    patchRequests.forEach((request) => {
        let response;
        let url = request.uri;

        before(async () => {
            request.uri = env.uri + url;
            response = await sendRequest(request);
        });

        it(`[PATCH ${url}]: verifying response status code`, () => {
            expect(response.statusCode).to.eql(request.expectedStatusCode);
        });

    });

});