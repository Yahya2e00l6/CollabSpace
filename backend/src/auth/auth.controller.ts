import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInDto } from './dto/signIn-auth.dto';
import { CreateRequestDto } from './dto/createrequest-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Get('gender/:id')
  async gender(@Param('id' , ParseIntPipe) id : number){
    return this.authService.gender(id)
  }
  @Get('requests')
  async requests() {
    return await this.authService.requests();
  }
  @Patch('rejectedRequest/:id')
  async rejectedRequest(@Param( 'id' , ParseIntPipe ) id : number){
    return await this.authService.rejectedRequest(id)
  }
  @Delete('deleteUser/:id')
  async deleteUser (@Param('id' ,ParseIntPipe) id : number) {
    return await this.authService.RemoveUser(id)
  }

  @Get('taskInfo/:id')
  async taskInfo(@Param('id' , ParseIntPipe) id : number){
    return await this.authService.getTaskInfo(id);
  }
  @Get('userData')
  async userData(){
    return await this.authService.getUserData();
  }

  @Get('noTeamMembers')
  async noTeamMembers(){
    return await this.authService.getNoTeamMembers();
  }
  @Patch('demoteToMember/:id')
  async demoteToMember (@Param('id',ParseIntPipe) id : number ){
    return await this.authService.demoteToMember(+id)
  }
  @Get('userTeam/:id')
  async userTeam(@Param('id',ParseIntPipe) id : number){
    const result = await this.authService.getTeamIdRaw(id)
    if(!result){
      return {message : "User is not assigned to a team yet."}
    }
    return {teamId: result.teamId}
  }







  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('signin')
  signin(@Body() SignInDto: SignInDto) {
    return this.authService.validateUser(SignInDto.identifier,SignInDto.password);
  }

  @Post('register')
  register(@Body() dto : CreateRequestDto) {
    return this.authService.createRequest(dto)
  }

  @Post('existingRequester')
  existingRequester(@Body() exist : CreateRequestDto){
    return this.authService.validateRequest(exist.cin, exist.email, exist.phoneNumber)
  }
  @Post('existingRequest')
  existingRequest(@Body() exist : CreateRequestDto){
    return this.authService.Requeststatus(exist.cin, exist.email, exist.phoneNumber)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
