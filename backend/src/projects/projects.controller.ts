import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('assignMultiple/:projectId')
  async assignMultiple(
      @Param('projectId', ParseIntPipe) projectId: number,
      @Body('userIds') userIds: number[]
  ) {
      return await this.projectsService.assignMultipleToProject(userIds, projectId);
  }

  @Get('availableMembers/:projectId')
  async availableMembers(@Param('projectId' , ParseIntPipe) projectId : number){
    return await this .projectsService.getAvailableMembers(projectId)
  }
  @Get('taskInfo/:projectId')
  async taskInfo(@Param('projectId' , ParseIntPipe) projectId : number){
    return await this.projectsService.taskInfo(projectId)
  }
  @Get('tasksInsights/:projectId')
  async tasksInsights(@Param('projectId' , ParseIntPipe) projectId : number){
    return await this.projectsService.tasksInsights(projectId);
  }
  @Delete('deleteProject/:id')
  async deleteProject(@Param('id' , ParseIntPipe ) id : number){
    return await this.projectsService.deleteProject(id)
  }
  @Get('projects')
  async projects(){
    return await this.projectsService.getProjects()
  }
  @Get('projectsInsights')
  async Insights(){
    return await this.projectsService.getAdminInsights();
  }

  @Get('projectDeadlineInfo/:teamid')
  async projectDeadlineInfo(@Param('teamid' , ParseIntPipe) teamid : number){
    return await this.projectsService.getprojectDeadlineInfo(teamid)
  }

  @Get('completedProjectsInfo')
  async completedProjectsInfo(){
    return await this.projectsService.getcompletedProjectsInfo()
  }
  
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
