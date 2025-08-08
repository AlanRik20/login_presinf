import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
  ) {}
  
  create(createUserDto: CreateUserDto): Promise<Usuario> {
    const usuario: Usuario = new Usuario();
    usuario.nombre = createUserDto.nombre;
    usuario.email = createUserDto.email;
    usuario.rolId = createUserDto.rol_id;
    usuario.password = createUserDto.password;
    return this.userRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

 async findByEmail(email: string): Promise<Usuario | null> {
  return this.userRepository.findOne({ where: { email } });
}


}
