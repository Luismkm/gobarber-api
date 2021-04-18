import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able lo list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Luis Moraes',
      email: 'luis@teste.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Marcelo Moraes',
      email: 'marcelo@teste.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Luis M.',
      email: 'luism@teste.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
