import json
from typing import List
from fastapi import APIRouter, HTTPException, Query, status


from dispatch.auth.service import CurrentUser
from dispatch.common.utils.views import create_pydantic_include
from dispatch.database.core import DbSession
from dispatch.database.service import CommonParameters, search_filter_sort_paginate
from dispatch.models import PrimaryKey

from .models import TaskCreate, TaskUpdate, TaskRead, TaskPagination
from .service import get, update, create, delete


router = APIRouter()


@router.get("", summary="Retrieve a list of all tasks.")
def get_tasks(common: CommonParameters, include: List[str] = Query([], alias="include[]")):
    """Retrieve all tasks."""
    pagination = search_filter_sort_paginate(model="Task", **common)

    if include:
        # only allow two levels for now
        include_sets = create_pydantic_include(include)

        include_fields = {
            "items": {"__all__": include_sets},
            "itemsPerPage": ...,
            "page": ...,
            "total": ...,
        }

        return json.loads(TaskPagination(**pagination).json(include=include_fields))
    return json.loads(TaskPagination(**pagination).json())


@router.post("", response_model=TaskRead, tags=["tasks"])
def create_task(
    db_session: DbSession,
    task_in: TaskCreate,
    current_user: CurrentUser,
):
    """Creates a new task."""
    task_in.creator = {"individual": {"email": current_user.email}}
    return create(db_session=db_session, task_in=task_in)


@router.put("/{task_id}", response_model=TaskRead, tags=["tasks"])
def update_task(db_session: DbSession, task_id: PrimaryKey, task_in: TaskUpdate):
    """Updates an existing task."""
    task = get(db_session=db_session, task_id=task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=[{"msg": "A task with this id does not exist."}],
        )
    return update(db_session=db_session, task=task, task_in=task_in)


@router.delete("/{task_id}", response_model=None, tags=["tasks"])
def delete_task(db_session: DbSession, task_id: PrimaryKey):
    """Deletes an existing task."""
    task = get(db_session=db_session, task_id=task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=[{"msg": "A task with this id does not exist."}],
        )
    delete(db_session=db_session, task_id=task_id)
