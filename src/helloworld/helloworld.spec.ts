import {HelloWorld} from './helloworld';

describe('helloworld', () => {
    it('Deve retornar Hello World', () => {
        expect(HelloWorld()).toBe('Hello World');
    })
});