export interface BaseTaskDTO {
    in?: number
    name: string
    type: string
    birth: Date
    photo: string | null
}

export interface TaskDTO extends BaseTaskDTO{
    id: number
    userId: number | null
}

export interface CreateTaskDTO extends BaseTaskDTO{}

export interface UpdateTaskDTO extends Partial<BaseTaskDTO> {}