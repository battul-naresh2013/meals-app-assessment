import axios from 'axios';
import clientApi from '../../../src/services/client-api';

// Mock module with Jest mock functions
jest.mock('../../../src/services/client-api');

describe('In clientApi', () => {
  const baseURL = 'https://www.themealdb.com/api/json/v1/1';

  it('clientApi to be defined', () => {
    expect(clientApi).toBeDefined();
  });

  it('axios.create sets the baseUrl', () => {
    const expected = axios.create({
      baseURL,
    });
    expect(clientApi.baseURL).toEqual(expected.baseURL);
  });
});
