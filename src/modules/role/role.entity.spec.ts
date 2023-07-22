import { RoleEntity } from './role.entity';

describe('Role', () => {
  it('should be defined', () => {
    expect(new RoleEntity()).toBeDefined();
  });
});
