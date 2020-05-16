import { transaction } from './index.js'

it('should return an array', () => {
    const currency = transaction.currency;
    expect(currency).toEqual('USD');
})
it('should return an array', () => {
    const operation = transaction['operation'];
    expect(operation).toEqual("sale");
})
it('should return opoeration time', () => {
    const operationTime = transaction['operation time'];
    expect(operationTime).toEqual(1584029990001);
})