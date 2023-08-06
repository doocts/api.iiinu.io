import { StatusEntity } from 'src/modules/status';

describe('Status', () => {
  it('should be defined', () => {
    expect(new StatusEntity()).toBeDefined();
  });
});
