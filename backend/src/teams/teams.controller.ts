import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}


  @Get('userTeamProjects/:teamId')
    async userTeamProjects(@Param('teamId', ParseIntPipe) teamId: number) {
    return await this.teamsService.getUserTeamProjects(teamId); 
}
  @Patch(':teamId/removeTeamMate/:userId')
async removeTeamMate(
    @Param('teamId', ParseIntPipe) teamId: number,
    @Param('userId', ParseIntPipe) userId: number,
) {
    return await this.teamsService.removeTeamMate(userId , teamId);
}


  @Post('assignMultipleToTeam/:teamId')
  assignMultipleToTeam(@Param('teamId' , ParseIntPipe) teamId :number , 
                      @Body('userIds') userIds : number[]){
                        return this.teamsService.assignMultipleToTeam(userIds,teamId)
                      }
  
  @Get('teamMembers/:id')
  teamMembers(@Param('id' ,ParseIntPipe) id :number){
    return this.teamsService.getTeamMembers(id)
  }
  @Get('projectsInsights/:id')
  projectsInsights(@Param('id' , ParseIntPipe)  id : number){
    return this.teamsService.projectsInsights(id);
  }
  @Delete('deleteTeam/:id')
  deleteTeam(@Param('id',ParseIntPipe)  id : number){
    return this.teamsService.deleteTeam(id)
  }

  @Get('teamsList')
  teamsList(){
    return this.teamsService.getTeamsList();
  }
  @Get('teamMembersTasks/:id')
  teamMembersTasks(@Param('id',ParseIntPipe)  id : number){
    return this.teamsService.getTeamMembersTasks(id);
  }
  @Get('teamProjects')
  teamProjects(){
    return this.teamsService.getTeamProjects();
  }
  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsService.remove(+id);
  }
}
