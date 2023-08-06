import { RoleEntity } from 'src/modules/role';

describe('Role', () => {
  it('should be defined', () => {
    expect(new RoleEntity()).toBeDefined();
  });
});
